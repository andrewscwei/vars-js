/**
 * vars
 * (c) VARIANTE (http://variante.io)
 *
 * This software is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @type {Function}
 */
define
(
    [
        'ui/hasClass',
        'ui/toElementArray',
        'utils/assert',
        'utils/sizeOf'
    ],
    function
    (
        hasClass,
        toElementArray,
        assert,
        sizeOf
    )
    {
        /**
         * Adds a class(es) to DOM element(s).
         *
         * @param  {Object/Array} element   HTMLElement, VARS Element, or jQuery object.
         * @param  {String/Array} className
         */
        function addClass(element, className)
        {
            var elements = toElementArray(element);
            var classes = [];
            var n = sizeOf(elements);

            if (!assert((typeof className === 'string') || (className instanceof Array), 'Invalid class name specified. Must be either a string or an array of strings.')) return;

            if (typeof className === 'string')
            {
                classes.push(className);
            }
            else
            {
                classes = className;
            }

            var nClasses = sizeOf(classes);

            for (var i = 0; i < n; i++)
            {
                var e = elements[i];

                for (var j = 0; j < nClasses; j++)
                {
                    var c = classes[j];

                    if (!assert(typeof c === 'string', 'Invalid class detected: ' + c)) continue;
                    if (hasClass(e, c)) continue;

                    e.className = e.className + ((e.className === '') ? '' : ' ') + c;
                }
            }
        }

        return addClass;
    }
);
