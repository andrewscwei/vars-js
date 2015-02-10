/**
 *  vars.js
 *  (c) VARIANTE (http://variante.io)
 *
 *  Asset loader for images, videos, and audios.
 *
 *  This software is released under the MIT License:
 *  http://www.opensource.org/licenses/mit-license.php
 */
define(['utils/assert', 'utils/log', 'utils/inherit', 'events/eventtype', 'events/eventdispatcher'], function(assert, log, inherit, EventType, EventDispatcher) {

/**
 * @constant
 * Common image file extensions.
 * @type {Array}
 */
var IMAGE_EXTENSIONS = ['jpg', 'png', 'svg', 'jpeg', 'gif'];

/**
 * @constant
 * Common video file extensions.
 * @type {Array}
 */
var VIDEO_EXTENSIONS = ['mp4', 'mpeg', 'ogg', 'ogv', 'mov', 'avi', 'flv'];

/**
 * @constant
 * Common audio file extensions.
 * @type {Array}
 */
var AUDIO_EXTENSIONS = ['mp3', 'mp4', 'mpeg', 'flac', 'wav', 'ogg'];

/**
 * @constant
 * Mime type lookup.
 * @type {Object}
 */
var MIME_TYPES =
{
    IMAGE:
    {
        jpg:  'image/jpeg',
        jpeg: 'image/jpeg',
        gif:  'image/gif',
        png:  'image/png',
        svg:  'image/svg'
    },
    VIDEO:
    {
        mp4: 'video/mp4',
        mov: 'video/quicktime',
        mpeg: 'video/mpeg',
        ogg: 'video/ogg',
        ogv: 'video/ogg',
        avi: 'video/avi',
        flv: 'video/x-flv'
    },
    AUDIO:
    {
        mp3:  'audio/mpeg',
        mpeg: 'audio/mpeg',
        mp4:  'audio/mp4',
        flac: 'audio/flac',
        ogg:  'audio/ogg',
        wav:  'audio/vnd.wave'
    }
};

/**
 * @constructor
 * Creates a new AssetLoader instance.
 */
function AssetLoader()
{
    EventDispatcher.call(this);

    if (this.debug) log('[AssetLoader]::new()');
} var parent = inherit(AssetLoader, EventDispatcher);

/**
 * @static
 * Different states of AssetLoader.
 * @type {Enum}
 */
AssetLoader.STATE =
{
    IDLE:        0,
    IN_PROGRESS: 1,
    COMPLETED:   2,
    FAILED:      3,
    ABORTED:     4
};

/**
 * @static
 * Different supported asset types of AssetLoader.
 * @type {Object}
 */
AssetLoader.TYPE =
{
    IMAGE: 'image',
    VIDEO: 'video',
    AUDIO: 'audio'
};

/**
 * @property
 * Specifies whether this AssetLoader instance generates debug data.
 * @type {Object}
 */
Object.defineProperty(AssetLoader.prototype, 'debug', { value: false, writable: true });

/**
 * @property
 * Specifies the current state of this AssetLoader instance.
 * @type {Number}
 */
Object.defineProperty(AssetLoader.prototype, 'state',
{
    get: function()
    {
        if (!this._state)
        {
            Object.defineProperty(this, '_state', { value: AssetLoader.STATE.IDLE, writable: true });
        }

        return this._state;
    }
});

/**
 * @property
 * View of this AssetLoader instance.
 * @type {Object}
 */
Object.defineProperty(AssetLoader.prototype, 'queue',
{
    get: function()
    {
        if (!this._queue)
        {
            Object.defineProperty(this, '_queue', { value: [], writable: true });
        }

        return this._queue;
    }
});

/**
 * @property
 * Loaded assets.
 * @type {Object}
 */
Object.defineProperty(AssetLoader.prototype, 'assets',
{
    get: function()
    {
        if (!this._assets)
        {
            Object.defineProperty(this, '_assets', { value: {}, writable: true });
        }

        return this._assets;
    }
});

/**
 * @property
 * Specifies whether the XHR operations run in async.
 * @type {Boolean}
 */
Object.defineProperty(AssetLoader.prototype, 'async',
{
    get: function()
    {
        if (this._async === undefined)
        {
            return true;
        }
        else
        {
            return this._async;
        }
    },
    set: function(value)
    {
        assert(this.state !== AssetLoader.STATE.IN_PROGRESS, 'Cannot change the async mode while it is in progress.');

        if (this.state !== AssetLoader.STATE.IN_PROGRESS)
        {
            Object.defineProperty(this, '_async', { value: value, writable: true });
        }
    }
});

/**
 * @property
 * Specifies the total bytes loaded for all assets in the queue.
 * @type {Number}
 */
Object.defineProperty(AssetLoader.prototype, 'bytesLoaded',
{
    get: function()
    {
        if (!this._bytesLoaded)
        {
            return 0.0;
        }
        else
        {
            var total = 0;
            var arrlen = this._bytesLoaded.length;

            for (var i = 0; i < arrlen; i++)
            {
                total += this._bytesLoaded[i];
            }

            return total;
        }

        return this._bytesLoaded;
    }
});

/**
 * @property
 * Specifies the total bytes for all assets in the queue.
 * @type {Number}
 */
Object.defineProperty(AssetLoader.prototype, 'bytesTotal',
{
    get: function()
    {
        if (!this._bytesTotal)
        {
            return 0.0;
        }
        else
        {
            var total = 0;
            var arrlen = this._bytesTotal.length;

            for (var i = 0; i < arrlen; i++)
            {
                total += this._bytesTotal[i];
            }

            return total;
        }
    }
});

/**
 * Initializes this AssetLoader instance and begins loading assets in the queue.
 */
AssetLoader.prototype.init = function()
{
    if (this.queue.length < 1) return;

    if (this.debug) log('[AssetLoader]::init()');

    var arrlen = this.queue.length;

    this._xhrs = [];
    this._pending = arrlen;

    for (var i = 0; i < arrlen; i++)
    {
        var target = this.queue[i];

        if (this.debug) log('[AssetLoader]::Started loading: ' + target.path);

        var xhr = this.getXHR({ id: i, path: target.path, type: target.type });
        xhr.send();

        this._xhrs.push(xhr);
    }
};

/**
 * Destroys this AssetLoader instance and resets its state to idle for recyclable use.
 */
AssetLoader.prototype.destroy = function()
{
    if (this._xhrs)
    {
        var arrlen = this._xhrs.length;

        for (var i = 0; i < arrlen; i++)
        {
            var xhr = this._xhrs[i];
            xhr.abort();
            this._xhrs[i] = null;
        }

        this._queue = null;
        this._assets = null;
        this._bytesLoaded = null;
        this._bytesTotal = null;
    }

    this._state = AssetLoader.STATE.IDLE;
};

/**
 * Adds target loading assets to the queue. Assumes each parameter is as follows:
 * Object
 * {
 *     path: {PATH_OF_ASSET},
 *     type: {TYPE_OF_ASSET} (can only be 'image', 'video', or 'audio')
 * }
 */
AssetLoader.prototype.enqueue = function()
{
    assert(arguments && arguments.length > 0, 'There are no arguments specified.');
    assert(this.state !== AssetLoader.STATE.IN_PROGRESS, 'Enqueueing is prohibited when the state is in progress.');

    if (!arguments) return;
    if (arguments.length <= 0) return;
    if (this.state === AssetLoader.STATE.IN_PROGRESS) return;

    if (this.debug) log('[AssetLoader]::enqueue(' + arguments + ')');

    var arrlen = arguments.length;

    for (var i = 0; i < arrlen; i++)
    {
        var arg = arguments[i];

        assert(typeof arg === 'string' || typeof arg === 'object', 'Each item to be enqueued must be a string of the target path or an object containing a "path" key and/or a "type" key');
        assert(typeof arg === 'string' || typeof arg.path === 'string', 'Invalid path specified: ' + arg.path + '.');

        var path = (typeof arg === 'string') ? arg : arg.path;
        var type = arg.type;

        if (!type)
        {
            var ext = path.split('.').pop().toLowerCase();

            if (IMAGE_EXTENSIONS.indexOf(ext) > -1)
            {
                type = AssetLoader.TYPE.IMAGE;
            }
            else if (VIDEO_EXTENSIONS.indexOf(ext) > -1)
            {
                type = AssetLoader.TYPE.VIDEO;
            }
            else if (AUDIO_EXTENSIONS.indexOf(ext) > -1)
            {
                type = AssetLoader.TYPE.AUDIO;
            }
            else
            {
                throw '[AssetLoader]::Unsupported asset format: ' + path;
            }
        }

        if (type)
        {
            this.queue.push({ path: path, type: type });

            if (!this._bytesLoaded) this._bytesLoaded = [];
            if (!this._bytesTotal) this._bytesTotal = [];

            this._bytesLoaded.push(0.0);
            this._bytesTotal.push(0.0);
        }
    }
};

/**
 * Removes loading targets from the queue. Each parameter is a path that must match one that
 * is already in the queue.
 */
AssetLoader.prototype.dequeue = function()
{
    assert(arguments && arguments.length > 0, 'There are no arguments specified.');
    assert(this.state !== AssetLoader.STATE.IN_PROGRESS, 'Dequeueing is prohibited when the state is in progress.');

    if (!arguments) return;
    if (arguments.length <= 0) return;
    if (this.state === AssetLoader.STATE.IN_PROGRESS) return;

    var arrlen = arguments.length;

    for (var i = 0; i < arrlen; i++)
    {
        var arg = arguments[i];

        assert(typeof arg === 'string', 'Expecting path to be a string.');

        var n = this.queue.length;

        for (var j = 0; j < n; j++)
        {
            var target = this.queue[j];

            if (target.path === arg)
            {
                this.queue.splice(j, 1);
                this.bytesLoaded.splice(j, 1);
                this.bytesTotal.splice(j, 1);

                break;
            }
        }
    }
};

/**
 * Creates and returns a new XHR instance with prepopulated configurations.
 * @param  {Object} data
 * @return {Object} XHR instance.
 */
AssetLoader.prototype.getXHR = function(data)
{
    var ext = data.path.split('.').pop().toLowerCase();
    var mimeType = MIME_TYPES[data.type.toUpperCase()][ext];

    if (!mimeType)
    {
        throw '[AssetLoader]:: Unsupported asset format: ' + data.path;
    }

    var xhr = new XMLHttpRequest();
    xhr.addEventListener('progress', this._onXHRProgress.bind(this), false);
    xhr.addEventListener('load', this._onXHRLoadComplete.bind(this), false);
    xhr.addEventListener('error', this._onXHRLoadError.bind(this), false);
    xhr.addEventListener('abort', this._onXHRAbort.bind(this), false);

    xhr.open('GET', data.path, this.async);
    xhr.overrideMimeType(mimeType);
    xhr.data = data;

    return xhr;
};

/**
 * @private
 * Handler invoked when an XHR instance is in progress.
 * @param  {Object} event
 */
AssetLoader.prototype._onXHRProgress = function(event)
{
    if (!event.lengthComputable) return;

    var xhr = event.currentTarget;
    var id = xhr.data.id;
    var path = xhr.data.path;
    var type = xhr.data.type;
    var bytesLoaded = event.loaded;
    var bytesTotal = event.total;

    // Hash progress into XHR data.
    xhr.data.bytesLoaded = bytesLoaded;
    xhr.data.bytesTotal = bytesTotal;

    this._bytesLoaded[id] = bytesLoaded;
    this._bytesTotal[id] = bytesTotal;

    if (!this._bytesLoaded) this._bytesLoaded = [];

    if (this.debug) log('[AssetLoader]::_onXHRProgress("'+path+'":'+bytesLoaded+'/'+bytesTotal+')');

    var progressEvent = new CustomEvent(EventType.OBJECT.PROGRESS);
    progressEvent.initCustomEvent(EventType.OBJECT.PROGRESS, true, true, { id: id, path: path, type: type, pending: this._pending, loaded: this.bytesLoaded, total: this.bytesTotal });

    this.dispatchEvent(progressEvent);
};

/**
 * @private
 * Handler invoked when an XHR instance completes its operation.
 * @param  {Object} event
 */
AssetLoader.prototype._onXHRLoadComplete = function(event)
{
    var xhr = event.currentTarget;
    var id = xhr.data.id;
    var path = xhr.data.path;
    var type = xhr.data.type;

    if (this.debug) log('[AssetLoader]::_onXHRLoadComplete("'+path+'"")');

    this._pending--;

    var loadEvent = new CustomEvent(EventType.OBJECT.LOAD);
    loadEvent.initCustomEvent(EventType.OBJECT.LOAD, true, true, { id: id, path: path, type: type, pending: this._pending, loaded: this.bytesLoaded, total: this.bytesTotal });

    this.dispatchEvent(loadEvent);
};

/**
 * @private
 * Handler invoked when an XHR instance fails its operation.
 * @param  {Object} event
 */
AssetLoader.prototype._onXHRLoadError = function(event)
{
    var xhr = event.currentTarget;
    var id = xhr.data.id;
    var path = xhr.data.path;
    var type = xhr.data.type;

    if (this.debug) log('[AssetLoader]::_onXHRLoadError("'+path+'"")');

    this._pending--;

    var errorEvent = new CustomEvent(EventType.OBJECT.ERROR);
    errorEvent.initCustomEvent(EventType.OBJECT.ERROR, true, true, { id: id, path: path, type: type, pending: this._pending, loaded: this.bytesLoaded, total: this.bytesTotal });

    this.dispatchEvent(errorEvent);

    if (this._pending === 0)
    {
        var loadEvent = new CustomEvent(EventType.OBJECT.LOAD);
        loadEvent.initCustomEvent(EventType.OBJECT.LOAD, true, true, { id: id, path: path, type: type, pending: this._pending, loaded: this.bytesLoaded, total: this.bytesTotal });

        this.dispatchEvent(loadEvent);
    }
};

/**
 * @private
 * Handler invoked when an XHR aborts its operation.
 * @param  {Object} event
 */
AssetLoader.prototype._onXHRAbort = function(event)
{
    var xhr = event.currentTarget;
    var id = xhr.data.id;
    var path = xhr.data.path;
    var type = xhr.data.type;

    if (this.debug) log('[AssetLoader]::_onXHRLoadError("'+path+'"")');

    this._pending--;

    var abortEvent = new CustomEvent(EventType.OBJECT.ABORT);
    abortEvent.initCustomEvent(EventType.OBJECT.ABORT, true, true, { id: id, path: path, type: type, pending: this._pending, loaded: this.bytesLoaded, total: this.bytesTotal });

    this.dispatchEvent(abortEvent);

    if (this._pending === 0)
    {
        var loadEvent = new CustomEvent(EventType.OBJECT.LOAD);
        loadEvent.initCustomEvent(EventType.OBJECT.LOAD, true, true, { id: id, path: path, type: type, pending: this._pending, loaded: this.bytesLoaded, total: this.bytesTotal });

        this.dispatchEvent(loadEvent);
    }
};

return AssetLoader; });
