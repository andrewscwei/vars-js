!function(e,t){var i=t;"undefined"!=typeof module&&module.exports?module.exports=i:(i.utils.namespace("io").variante=i,e.vars=i)}("undefined"!=typeof window?window:this,function(){var e,t,i;return function(n){function r(e,t){return E.call(e,t)}function o(e,t){var i,n,r,o,s,a,u,l,d,p,h,c=t&&t.split("/"),f=b.map,m=f&&f["*"]||{};if(e&&"."===e.charAt(0))if(t){for(c=c.slice(0,c.length-1),e=e.split("/"),s=e.length-1,b.nodeIdCompat&&O.test(e[s])&&(e[s]=e[s].replace(O,"")),e=c.concat(e),d=0;d<e.length;d+=1)if(h=e[d],"."===h)e.splice(d,1),d-=1;else if(".."===h){if(1===d&&(".."===e[2]||".."===e[0]))break;d>0&&(e.splice(d-1,2),d-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((c||m)&&f){for(i=e.split("/"),d=i.length;d>0;d-=1){if(n=i.slice(0,d).join("/"),c)for(p=c.length;p>0;p-=1)if(r=f[c.slice(0,p).join("/")],r&&(r=r[n])){o=r,a=d;break}if(o)break;!u&&m&&m[n]&&(u=m[n],l=d)}!o&&u&&(o=u,a=l),o&&(i.splice(0,a,o),e=i.join("/"))}return e}function s(e,t){return function(){var i=w.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),c.apply(n,i.concat([e,t]))}}function a(e){return function(t){return o(t,e)}}function u(e){return function(t){g[e]=t}}function l(e){if(r(y,e)){var t=y[e];delete y[e],v[e]=!0,h.apply(n,t)}if(!r(g,e)&&!r(v,e))throw new Error("No "+e);return g[e]}function d(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function p(e){return function(){return b&&b.config&&b.config[e]||{}}}var h,c,f,m,g={},y={},b={},v={},E=Object.prototype.hasOwnProperty,w=[].slice,O=/\.js$/;f=function(e,t){var i,n=d(e),r=n[0];return e=n[1],r&&(r=o(r,t),i=l(r)),r?e=i&&i.normalize?i.normalize(e,a(t)):o(e,t):(e=o(e,t),n=d(e),r=n[0],e=n[1],r&&(i=l(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:i}},m={require:function(e){return s(e)},exports:function(e){var t=g[e];return"undefined"!=typeof t?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:p(e)}}},h=function(e,t,i,o){var a,d,p,h,c,b,E=[],w=typeof i;if(o=o||e,"undefined"===w||"function"===w){for(t=!t.length&&i.length?["require","exports","module"]:t,c=0;c<t.length;c+=1)if(h=f(t[c],o),d=h.f,"require"===d)E[c]=m.require(e);else if("exports"===d)E[c]=m.exports(e),b=!0;else if("module"===d)a=E[c]=m.module(e);else if(r(g,d)||r(y,d)||r(v,d))E[c]=l(d);else{if(!h.p)throw new Error(e+" missing "+d);h.p.load(h.n,s(o,!0),u(d),{}),E[c]=g[d]}p=i?i.apply(g[e],E):void 0,e&&(a&&a.exports!==n&&a.exports!==g[e]?g[e]=a.exports:p===n&&b||(g[e]=p))}else e&&(g[e]=i)},e=t=c=function(e,t,i,r,o){if("string"==typeof e)return m[e]?m[e](t):l(f(e,t).f);if(!e.splice){if(b=e,b.deps&&c(b.deps,b.callback),!t)return;t.splice?(e=t,t=i,i=null):e=n}return t=t||function(){},"function"==typeof i&&(i=r,r=o),r?h(n,e,t,i):setTimeout(function(){h(n,e,t,i)},4),c},c.config=function(e){return c(e)},e._defined=g,i=function(e,t,i){t.splice||(i=t,t=[]),r(g,e)||r(y,e)||(y[e]=[e,t,i])},i.amd={jQuery:!0}}(),i("almond",function(){}),i("enums/DirtyType",{NONE:0,POSITION:1,SIZE:2,LAYOUT:4,STATE:8,DATA:16,LOCALE:32,DEPTH:64,CONFIG:128,STYLE:256,CUSTOM:512,ALL:4294967295}),i("enums",["enums/DirtyType"],function(e){var t=function(e){return e};return Object.defineProperty(t,"DirtyType",{value:e,writable:!1,enumerable:!0}),t}),i("utils/assert",[],function(){function e(e,t){if(!e&&window&&window.vars&&window.vars.debug)throw t||"[vars]: Assertion failed.";return e}return e}),i("utils/log",[],function(){function e(){window&&window.vars&&window.vars.debug&&window.console&&console.log&&Function.apply.call(console.log,console,arguments)}return e}),i("events/EventDispatcher",["utils/assert","utils/log"],function(e,t){function i(e){this.debug&&t("[EventDispatcher]::new(",e,")")}return Object.defineProperty(i.prototype,"debug",{get:function(){return this._debug},set:function(e){Object.defineProperty(this,"_debug",{value:e,writable:!0}),this.updateDelegate.debug=e}}),i.prototype.addEventListener=function(i,n){e(i,"Event type must be specified."),e(n,"Listener must be specified."),i&&n&&(this.debug&&t("[EventDispatcher]::addEventListener("+i+")"),this._listenerMap||Object.defineProperty(this,"_listenerMap",{value:{},writable:!0}),this._listenerMap[i]||(this._listenerMap[i]=[]),this._listenerMap[i].push(n))},i.prototype.removeEventListener=function(i,n){if(e(i,"Event type must be specified."),e(this._listenerMap,"Listener map is null."),e(this._listenerMap[i],"There are no listeners registered for event type: "+i),i&&this._listenerMap&&this._listenerMap[i])if(this.debug&&t("[EventDispatcher]::removeEventListener("+i+")"),n){var r=this._listenerMap[i].indexOf(n);r>-1&&this._listenerMap[i].splice(r,1)}else delete this._listenerMap[i]},i.prototype.hasEventListener=function(t,i){if(e(t,"Event type must be specified."),e(this._listenerMap,"Listener map is null."),e(this._listenerMap[t],"There are no listeners registered for event type: "+t),!t)return!1;if(!this._listenerMap)return!1;if(!this._listenerMap[t])return!1;if(i){var n=this._listenerMap[t].indexOf(i);return n>-1}return!0},i.prototype.dispatchEvent=function(i){if(e(i,"Event must be specified."),e(this._listenerMap,"Listener map is null."),i){if(!this._listenerMap)return!1;if(!this._listenerMap[i.type])return!1;this.debug&&t("[EventDispatcher]::dispatchEvent("+i.type+")"),i.target=this,i.currentTarget=this,i.customTarget=this;for(var n=this._listenerMap[i.type].length,r=0;n>r;r++){var o=this._listenerMap[i.type][r];o.call(this,i)}}},i}),i("events/EventType",{MOUSE:{CLICK:"click",CONTEXT_MENU:"contextmenu",DOUBLE_CLICK:"dblclick",MOUSE_DOWN:"mousedown",MOUSE_ENTER:"mouseenter",MOUSE_LEAVE:"mouseleave",MOUSE_MOVE:"mousemove",MOUSE_OVER:"mouseover",MOUSE_OUT:"mouseout",MOUSE_UP:"mouseup"},KEYBOARD:{KEY_DOWN:"keydown",KEY_PRESS:"keypress",KEY_UP:"keyup"},OBJECT:{ABORT:"abort",BEFORE_UNLOAD:"beforeunload",ERROR:"error",HASH_CHANGE:"hashchange",LOAD:"load",PAGE_SHOW:"pageshow",PAGE_HIDE:"pagehide",RESIZE:"resize",SCROLL:"scroll",UNLOAD:"unload",PROGRESS:"progress"},FORM:{BLUR:"blur",CHANGE:"change",FOCUS:"focus",FOCUS_IN:"focusin",FOCUS_OUT:"focusout",INPUT:"input",INVALID:"invalid",RESET:"reset",SEARCH:"search",SELECT:"select",SUBMIT:"submit"},DRAG:{DRAG:"drag",DRAG_END:"dragend",DRAG_ENTER:"dragenter",DRAG_LEAVE:"dragleave",DRAG_OVER:"dragover",DRAG_START:"dragstart",DROP:"drop"},CLIPBOARD:{COPY:"copy",CUT:"cut",PASTE:"paste"},PRINT:{AFTER_PRINT:"afterprint",BEFORE_PRINT:"beforeprint"},MEDIA:{ABORT:"abort",CAN_PLAY:"canplay",CAN_PLAY_THROUGH:"canplaythrough",DURATION_CHANGE:"durationchange",EMPTIED:"emptied",ENDED:"ended",ERROR:"error",LOADED_DATA:"loadeddata",LOADED_METADATA:"loadedmetadata",LOAD_START:"loadstart",PAUSE:"pause",PLAY:"play",PLAYING:"playing",PROGRESS:"progress",RATE_CHANGE:"ratechange",SEEKED:"seeked",SEEKING:"seeking",STALLED:"stalled",SUSPEND:"suspend",TIME_UPDATE:"timeupdate",VOLUME_CHANGE:"volumechange",WAITING:"waiting"},ANIMATION:{ANIMATION_END:"animationend",ANIMATION_ITERATION:"animationiteration",ANIMATION_START:"animationstart"},TRANSITION:{TRANSITION_END:"transitionend"},SERVER_SENT:{ERROR:"error",MESSAGE:"message",OPEN:"open"},MISC:{MESSAGE:"message",ONLINE:"online",OFFLINE:"offline",POP_STATE:"popstate",SHOW:"show",STORAGE:"storage",TOGGLE:"toggle",WHEEL:"wheel"},TOUCH:{TOUCH_CANCEL:"touchcancel",TOUCH_END:"touchend",TOUCH_MOVE:"touchmove",TOUCH_START:"touchstart"}}),i("events",["events/EventDispatcher","events/EventType"],function(e,t){var i=function(e){return e};return Object.defineProperty(i,"EventDispatcher",{value:e,writable:!1,enumerable:!0}),Object.defineProperty(i,"EventType",{value:t,writable:!1,enumerable:!0}),i}),i("math/clamp",[],function(){function e(e,t,i){if("number"!=typeof e||"number"!=typeof t||"number"!=typeof i)return 0/0;var n=e;return n=Math.min(n,i),n=Math.max(n,t)}return e}),i("math",["math/clamp"],function(e){var t=function(e){return e};return Object.defineProperty(t,"clamp",{value:e,writable:!1,enumerable:!0}),t}),i("ui/translate",["utils/assert"],function(e){function t(t,i,n){if(i){if(!e(!i.top||!isNaN(i.top),"Top property must be a number."))return null;if(!e(!i.right||!isNaN(i.right),"Right property must be a number."))return null;if(!e(!i.bottom||!isNaN(i.bottom),"Bottom property must be a number."))return null;if(!e(!i.left||!isNaN(i.left),"Left property must be a number."))return null;var r=i.units||"px";if(n){if(!e(!n.top||!isNaN(n.top),"Top constraint must be a number."))return null;if(!e(!n.right||!isNaN(n.right),"Right constraint must be a number."))return null;if(!e(!n.bottom||!isNaN(n.bottom),"Bottom constraint must be a number."))return null;if(!e(!n.left||!isNaN(n.left),"Left constraint must be a number."))return null}var o=n&&n.top?Math.min(i.top,n.top):i.top,s=n&&n.right?Math.min(i.right,n.right):i.right,a=n&&n.bottom?Math.min(i.bottom,n.bottom):i.bottom,u=n&&n.left?Math.min(i.left,n.left):i.left;return t&&(t.style?(t.style.top=String(o)+r,t.style.right=String(s)+r,t.style.bottom=String(a)+r,t.style.left=String(u)+r):t.css&&(t.css({top:String(o)+r}),t.css({right:String(s)+r}),t.css({bottom:String(a)+r}),t.css({left:String(u)+r}))),{top:o,right:s,bottom:a,left:u}}return t&&(t.style?(t.style.top="initial",t.style.right="initial",t.style.bottom="initial",t.style.left="initial"):t.css&&(t.css({top:"initial"}),t.css({right:"initial"}),t.css({bottom:"initial"}),t.css({left:"initial"}))),{top:"initial",right:"initial",bottom:"initial",left:"initial"}}return t}),i("ui/translate3d",["utils/assert"],function(e){function t(t,i,n){if(i){if(!e(!i.x||!isNaN(i.x),"X property must be a number."))return null;if(!e(!i.y||!isNaN(i.y),"Y property must be a number."))return null;if(!e(!i.z||!isNaN(i.z),"Z property must be a number."))return null;var r=i.units||"px";if(n){if(!e(!n.x||!isNaN(n.x),"X constraint must be a number."))return null;if(!e(!n.y||!isNaN(n.y),"Y constraint must be a number."))return null;if(!e(!n.z||!isNaN(n.z),"Z constraint must be a number."))return null}var o=n&&n.x?Math.min(i.x,n.x):i.x,s=n&&n.y?Math.min(i.y,n.y):i.y,a=n&&n.z?Math.min(i.z,n.z):i.z;if(t){var u=i.x?"translateX("+o+r+")":null,l=i.y?"translateY("+s+r+")":null,d=i.z?"translateZ("+a+r+")":null,p="";u&&(p+=""===p?u:" "+u),l&&(p+=""===p?l:" "+l),d&&(p+=""===p?d:" "+d),t.style?t.style.transform=p:t.css&&t.css("transform",p)}return{x:o,y:s,z:a}}return t&&(t.style?t.style.transform="translateX(0) translateY(0) translateZ(0)":t.css&&t.css({transform:"translateX(0) translateY(0) translateZ(0)"})),{x:0,y:0,z:0}}return t}),i("ui/transform",["utils/assert"],function(e){function t(t,i,n){if(i){if(!e(!i.width||!isNaN(i.width),"Width property must be a number."))return null;if(!e(!i.height||!isNaN(i.height),"Height property must be a number."))return null;if(!e(!i.aspectRatio||!isNaN(i.aspectRatio),"Aspect ratio property must be a number."))return null;var r=i.units||"px",o=i.aspectRatio?Number(i.aspectRatio):i.width/i.height,s=i.width,a=i.height,u=i.width,l=i.height,d=i.type||"default";n&&"default"!==d&&(e(!n.width||!isNaN(n.width),"Width constraint must be a number."),e(!n.height||!isNaN(n.height),"Height constraint must be a number."),d&&"cover"===d?(n.width&&(u=Math.min(n.width,u)),n.width&&(l=Math.min(n.height,l))):(n.width&&(s=Math.min(n.width,s)),n.height&&(a=Math.min(n.height,a))));var p,h;return"contain"===d?(p=s>a?a*o:s,h=s>a?a:s/o,p>s?(p=s,h=p/o):h>a&&(h=a,p=h*o)):"cover"==d?(p=u>l?l*o:u,h=u>l?l:u/o,u>p?(p=u,h=p/o):l>h&&(h=l,p=h*o)):(p=s,h=a),t&&(t.style?(i.width&&(t.style.width=String(p)+r),i.height&&(t.style.height=String(h)+r)):t.css&&(i.width&&t.css({width:String(p)+r}),i.height&&t.css({height:String(h)+r}))),{width:p,height:h}}return t&&(t.style?(t.style.width="initial",t.style.height="initial"):t.css&&(t.css({width:"initial"}),t.css({height:"initial"}))),{width:"initial",height:"initial"}}return t}),i("ui/getViewportRect",["utils/assert"],function(e){function t(){if(!e(window&&document,"Window or document undefined."))return null;var t={};return t.width=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t.height=Math.max(document.documentElement.clientHeight,window.innerHeight||0),t.top=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,t.left=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t.bottom=t.top+t.height,t.right=t.left+t.width,t}return t}),i("ui/getRect",["utils/assert","ui/getViewportRect"],function(e,t){function i(i){if(!e(i,"Invalid element specified."))return null;if(!e(window&&document,"Window or document undefined."))return null;if(i===window)return t();var n=t(),r={};return r.width=i.outerWidth?i.outerWidth():i.getBoundingClientRect().width,r.height=i.outerHeight?i.outerHeight():i.getBoundingClientRect().height,r.top=i.offset?i.offset().top:i.getBoundingClientRect().top+n.top,r.left=i.offset?i.offset().left:i.getBoundingClientRect().left+n.left,r.bottom=r.top+r.height,r.right=r.left+r.width,r}return i}),i("ui/getIntersectRect",["utils/assert","ui/getRect"],function(e,t){function i(i,n){if(!e(i||n,"Invalid elements specified."))return null;if(!e(window&&document,"Window or document undefined."))return null;var r=t(i||window),o=t(n||window);if(!r||!o)return null;var s={};return s.width=Math.max(0,Math.min(r.right,o.right)-Math.max(r.left,o.left)),s.height=Math.max(0,Math.min(r.bottom,o.bottom)-Math.max(r.top,o.top)),s.top=Math.max(r.top,o.top),s.left=Math.max(r.left,o.left),s.bottom=s.top+s.height,s.right=s.left+s.width,s.width*s.height===0&&(s.width=0,s.height=0,s.top=0,s.left=0,s.bottom=0,s.right=0),s}return i}),i("utils/keyOfValue",[],function(){function e(e,t){if(!e||!t)return null;if("object"!=typeof e)return null;for(var i in e)if(e.hasOwnProperty(i)&&e[i]===t)return i;return null}return e}),i("utils/debounce",[],function(){function e(e,t,i){var n;return function(){var r=this,o=arguments,s=function(){n=null,i||e.apply(r,o)},a=i&&!n;clearTimeout(n),n=setTimeout(s,t),a&&e.apply(r,o)}}return e}),i("ui/ElementUpdateDelegate",["utils/assert","utils/debounce","utils/log","enums/DirtyType"],function(e,t,i,n){function r(e){this.debug&&i("[ElementUpdateDelegate]::new(",e,")");var r=0,o=null,s=null;this.delegate=e,this.setDirty=function(e,t){if(this.debug&&i("[ElementUpdateDelegate]::setDirty(",e,t,")"),this.transmissive!==n.NONE&&this.delegate.virtualChildren)for(var o in this.delegate.virtualChildren){var s=this.delegate.virtualChildren[o];if(s.updateDelegate&&s.updateDelegate.setDirty){var u=e&s.updateDelegate.receptive;u!==n.NONE&&s.updateDelegate.setDirty(u,t)}}if(!this.isDirty(e)||t){switch(e){case n.NONE:case n.ALL:r=e;break;default:r|=e}t?this.update():this._pendingAnimationFrame||(this._pendingAnimationFrame=a(this.update.bind(this)))}},this.isDirty=function(e){switch(this.debug&&i("[ElementUpdateDelegate]::isDirty(",e,r,")"),e){case n.NONE:case n.ALL:return r==e;default:return 0!==(e&r)}},this.init=function(){this.debug&&i("[ElementUpdateDelegate]::init()");var e=this.respondsTo||window;window&&e&&e.addEventListener&&this.responsive&&(0===this.refreshRate?(o=l.bind(this),s=d.bind(this)):(o=t(l.bind(this),this.refreshRate),s=t(d.bind(this),this.refreshRate)),window.addEventListener("resize",o),window.addEventListener("orientationchange",o),e.addEventListener("scroll",s)),this.setDirty(n.ALL)},this.destroy=function(){this.debug&&i("[ElementUpdateDelegate]::destroy()"),u();var e=this.respondsTo||window;window&&e&&e.removeEventListener&&this.responsive&&(window.removeEventListener("resize",o),window.removeEventListener("orientationchange",o),e.removeEventListener("scroll",s)),o=null,s=null},this.update=function(){this.debug&&i("[ElementUpdateDelegate]::update()"),u(this._pendingAnimationFrame),this.delegate&&this.delegate.update&&this.delegate.update.call(this.delegate,r),this.setDirty(0),this._pendingAnimationFrame=null};var a=function(e){var t=window&&(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame)||null;return t||(t=function(e){return window?window.setTimeout(e,10):null}),t(e)},u=function(){var e=window&&(window.requestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame)||null;return e||(e=function(e){return window?window.clearTimeout(e):null}),e},l=function(){this.setDirty(n.SIZE)},d=function(){this.setDirty(n.POSITION)}}var o=0;return Object.defineProperty(r.prototype,"debug",{value:!1,writable:!0}),Object.defineProperty(r.prototype,"delegate",{value:null,writable:!0}),Object.defineProperty(r.prototype,"responsive",{value:!1,writable:!0}),Object.defineProperty(r.prototype,"refreshRate",{value:o,writable:!0}),Object.defineProperty(r.prototype,"transmissive",{value:n.NONE,writable:!0}),Object.defineProperty(r.prototype,"receptive",{value:n.NONE,writable:!0}),r.prototype.toString=function(){return"[ElementUpdateDelegate{"+(this.delegate&&this.delegate.name||"undefined")+"}]"},r}),i("ui/Element",["utils/assert","utils/log","utils/keyOfValue","enums/DirtyType","ui/ElementUpdateDelegate"],function(e,t,i,n,r){function o(e){if(t(this.toString()+":new(",e,")"),e)if(e instanceof HTMLElement)this.element=e;else if(e instanceof o)this.element=e.element;else if("object"==typeof e)for(var i in e)this.hasProperty(i)&&(this[i]=e[i]);this.init()}return Object.defineProperty(o.prototype,"element",{get:function(){return this._element||Object.defineProperty(this,"_element",{value:this.factory(),writable:!0}),this._element},set:function(e){this.__set_element(e)}}),Object.defineProperty(o.prototype,"id",{get:function(){return this.element.id},set:function(e){this.element.setAttribute("id",e)}}),Object.defineProperty(o.prototype,"name",{value:null,writable:!0}),Object.defineProperty(o.prototype,"class",{get:function(){return this.element.className},set:function(e){this.element.className=e}}),Object.defineProperty(o.prototype,"classList",{get:function(){return this.element.classList},set:function(e){this.element.classList=e}}),Object.defineProperty(o.prototype,"respondsTo",{get:function(){return this.updateDelegate.respondsTo},set:function(e){this.updateDelegate.respondsTo=e}}),Object.defineProperty(o.prototype,"virtualChildren",{value:{},writable:!1}),Object.defineProperty(o.prototype,"debug",{get:function(){return this._debug},set:function(e){Object.defineProperty(this,"_debug",{value:e,writable:!0}),this.updateDelegate.debug=e}}),Object.defineProperty(o.prototype,"data",{get:function(){return this._data},set:function(e){Object.defineProperty(this,"_data",{value:e,writable:!0}),this.updateDelegate.setDirty(n.DATA)}}),Object.defineProperty(o.prototype,"updateDelegate",{get:function(){return this._updateDelegate||Object.defineProperty(this,"_updateDelegate",{value:new r(this),writable:!1}),this._updateDelegate}}),Object.defineProperty(o.prototype,"responsive",{get:function(){return this.updateDelegate.responsive},set:function(e){this.updateDelegate.responsive=e}}),Object.defineProperty(o.prototype,"isDirty",{get:function(){return this.updateDelegate.isDirty}}),o.prototype.init=function(){t(this.toString()+"::init()"),this.updateDelegate.init()},o.prototype.destroy=function(){t(this.toString()+"::destroy()"),this.updateDelegate.destroy()},o.prototype.update=function(){t(this.toString()+"::update()")},o.prototype.addVirtualChild=function(t,i){return e(t instanceof o,"Child must conform to VARS Element.")?(i=i||t.name,e(i||t.name,"Child name must be provided.")&&e(!this.virtualChildren[i],"Child name is already taken.")?(this.virtualChildren[i]=t,t.name=i,t):null):null},o.prototype.removeVirtualChild=function(t){if(!e(t,"Child is null."))return null;if(!e(t instanceof o,"Child must conform to VARS Element."))return null;var n=i(this.virtualChildren,t);return n&&delete this.virtualChildren[n],t},o.prototype.removeVirtualChildByName=function(t){if(!e(t,"Name is null."))return null;var i=this.virtualChildren[t];return i&&delete this.virtualChildren[t],i},o.prototype.factory=function(){return document.createElement("div")},o.prototype.toString=function(){return"[Element{"+this.name+"}]"},o.prototype.__set_element=function(t){e(!this._element,"Element cannot be overwritten."),e(t instanceof HTMLElement||t instanceof o,"Invalid element type specified. Must be an instance of HTMLElement or Element."),t instanceof o?Object.defineProperty(this,"_element",{value:t.element,writable:!0}):Object.defineProperty(this,"_element",{value:t,writable:!0})},o}),i("utils/inherit",[],function(){function e(e,t){return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Object.defineProperty(e.prototype,"hasProperty",{value:function(i){return e.prototype.hasOwnProperty(i)||t.prototype.hasProperty&&t.prototype.hasProperty(i)||t.prototype.hasOwnProperty(i)},writable:!1}),t}return e}),i("ui/Video",["utils/assert","utils/log","utils/inherit","enums/DirtyType","ui/Element"],function(e,t,i,n,r){function o(e){r.call(this,e)}var s=i(o,r);return o.PRELOAD={AUTO:"auto",METADATA:"metada",NONE:"none"},Object.defineProperty(o.prototype,"autoplay",{get:function(){return this.element.autoplay},set:function(e){this.element.autoplay=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(o.prototype,"controls",{get:function(){return this.element.controls},set:function(e){this.element.controls=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(o.prototype,"loop",{get:function(){return this.element.loop},set:function(e){this.element.loop=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(o.prototype,"muted",{get:function(){return this.element.muted},set:function(e){this.element.muted=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(o.prototype,"poster",{get:function(){return this.element.poster},set:function(e){this.element.poster=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(o.prototype,"preload",{get:function(){return this.element.preload},set:function(e){this.element.preload=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(o.prototype,"source",{get:function(){return this._source},set:function(e){Object.defineProperty(this,"_source",{value:e,writable:!0}),this.updateDelegate.setDirty(n.DATA)}}),o.prototype.update=function(e){this.isDirty(n.DATA)&&this._updateSource(),this.isDirty(n.CUSTOM),s.prototype.update.call(this,e)},o.prototype.factory=function(){return document.createElement("video")},o.prototype._updateSource=function(){var e,t,i=this.element.getElementsByTagName("source");for(t=i.length,e=0;t>e;e++){var n=i[e];this.element.removeChild(n)}if(this.source)for(t=this.source.length,e=0;t>e;e++){var r=document.createElement("source"),o=this.source[e].src,s=this.source[e].type,a=o.split(".").pop();r.setAttribute("src",o),r.setAttribute("type",s||"video/"+a),this.element.appendChild(r)}},o.prototype.toString=function(){return"[Video{"+this.name+"}]"},o.prototype.__set_element=function(t){e(t instanceof HTMLVideoElement,"Invalid element type specified. Must be an instance of HTMLVideoElement."),s.prototype.__set_element.call(this,t)},o}),i("ui",["ui/translate","ui/translate3d","ui/transform","ui/getViewportRect","ui/getRect","ui/getIntersectRect","ui/Element","ui/Video","ui/ElementUpdateDelegate"],function(e,t,i,n,r,o,s,a,u){var l=function(e){return e};return Object.defineProperty(l,"translate",{value:e,writable:!1,enumerable:!0}),Object.defineProperty(l,"translate3d",{value:t,writable:!1,enumerable:!0}),Object.defineProperty(l,"transform",{value:i,writable:!1,enumerable:!0}),Object.defineProperty(l,"getViewportRect",{value:n,writable:!1,enumerable:!0}),Object.defineProperty(l,"getRect",{value:r,writable:!1,enumerable:!0}),Object.defineProperty(l,"getIntersectRect",{value:o,writable:!1,enumerable:!0}),Object.defineProperty(l,"Element",{value:s,writable:!1,enumerable:!0}),Object.defineProperty(l,"Video",{value:a,writable:!1,enumerable:!0}),Object.defineProperty(l,"ElementUpdateDelegate",{value:u,writable:!1,enumerable:!0}),l}),i("utils/namespace",["utils/assert"],function(e){function t(t,i){if(!e("string"==typeof t,"Invalid identifiers specified."))return null;if(!e("undefined"==typeof i||"object"==typeof i,"Invalid scope specified."))return null;for(var n=t.split("."),r=void 0===i||null===i?window:i,o=0;o<n.length;o++)r=r[n[o]]||(r[n[o]]={});return r}return t}),i("utils/sizeOf",[],function(){function e(e){if(void 0!==e.length)return e.length;var t=0;switch(typeof e){case"object":if(null!==e&&void 0!==e)for(var i in e)t++;break;case"number":t=(""+e).length;break;default:t=0}return t}return e}),i("utils/module",[],function(){function e(e,t){if(document){var i=function(){document.addEventListener?(document.removeEventListener("DOMContentLoaded",i,!1),window.removeEventListener("load",i,!1)):document.attachEvent&&(document.detachEvent("onreadystatechange",i),window.detachEvent("onload",i)),setTimeout(n,1)},n=function(){var i=new e(t);window&&!window.module&&(window.module=i)};return"complete"===document.readyState?setTimeout(n,1):void(document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",i),window.attachEvent("onload",i)))}}return e}),i("utils/isNull",[],function(){function e(e){return void 0===e||null===e?!0:!1}return e}),i("utils/AssetLoader",["utils/assert","utils/log","utils/inherit","events/EventType","events/EventDispatcher"],function(e,t,i,n,r){function o(){r.call(this),this.debug&&t("[AssetLoader]::new()")}{var s=["jpg","png","svg","jpeg","gif"],a=["mp4","mpeg","ogg","ogv","mov","avi","flv"],u=["mp3","mp4","mpeg","flac","wav","ogg"],l={IMAGE:{jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",png:"image/png",svg:"image/svg"},VIDEO:{mp4:"video/mp4",mov:"video/quicktime",mpeg:"video/mpeg",ogg:"video/ogg",ogv:"video/ogg",avi:"video/avi",flv:"video/x-flv"},AUDIO:{mp3:"audio/mpeg",mpeg:"audio/mpeg",mp4:"audio/mp4",flac:"audio/flac",ogg:"audio/ogg",wav:"audio/vnd.wave"}};i(o,r)}return o.STATE={IDLE:0,IN_PROGRESS:1,COMPLETED:2,FAILED:3,ABORTED:4},o.TYPE={IMAGE:"image",VIDEO:"video",AUDIO:"audio"},Object.defineProperty(o.prototype,"debug",{value:!1,writable:!0}),Object.defineProperty(o.prototype,"state",{get:function(){return this._state||Object.defineProperty(this,"_state",{value:o.STATE.IDLE,writable:!0}),this._state}}),Object.defineProperty(o.prototype,"queue",{get:function(){return this._queue||Object.defineProperty(this,"_queue",{value:[],writable:!0}),this._queue}}),Object.defineProperty(o.prototype,"assets",{get:function(){return this._assets||Object.defineProperty(this,"_assets",{value:{},writable:!0}),this._assets}}),Object.defineProperty(o.prototype,"async",{get:function(){return void 0===this._async?!0:this._async},set:function(t){e(this.state!==o.STATE.IN_PROGRESS,"Cannot change the async mode while it is in progress."),this.state!==o.STATE.IN_PROGRESS&&Object.defineProperty(this,"_async",{value:t,writable:!0})}}),Object.defineProperty(o.prototype,"bytesLoaded",{get:function(){if(this._bytesLoaded){for(var e=0,t=this._bytesLoaded.length,i=0;t>i;i++)e+=this._bytesLoaded[i];return e}return 0}}),Object.defineProperty(o.prototype,"bytesTotal",{get:function(){if(this._bytesTotal){for(var e=0,t=this._bytesTotal.length,i=0;t>i;i++)e+=this._bytesTotal[i];return e}return 0}}),Object.defineProperty(o.prototype,"progress",{get:function(){if(!this._bytesTotal||!this._bytesLoaded)return 0;if(this._bytesTotal.length!==this._bytesLoaded.length)return 0;for(var e=this._bytesTotal.length,t=0,i=0;e>i;i++){var n=this._bytesLoaded[i],r=this._bytesTotal[i];r>0&&(t+=n/r)}return t/e}}),o.prototype.init=function(){if(!(this.queue.length<1)){this.debug&&t("[AssetLoader]::init()");var e=this.queue.length;this._xhrs=[],this._pending=e;for(var i=0;e>i;i++){var n=this.queue[i];this.debug&&t("[AssetLoader]::Started loading: "+n.path);var r=this.getXHR({id:i,path:n.path,type:n.type});r.send(),this._xhrs.push(r)}}},o.prototype.destroy=function(){if(this._xhrs){for(var e=this._xhrs.length,t=0;e>t;t++){var i=this._xhrs[t];i.abort(),this._xhrs[t]=null}this._queue=null,this._assets=null,this._bytesLoaded=null,this._bytesTotal=null}this._state=o.STATE.IDLE},o.prototype.enqueue=function(){if(e(arguments&&arguments.length>0,"There are no arguments specified."),e(this.state!==o.STATE.IN_PROGRESS,"Enqueueing is prohibited when the state is in progress."),arguments&&!(arguments.length<=0)&&this.state!==o.STATE.IN_PROGRESS){this.debug&&t("[AssetLoader]::enqueue("+arguments+")");for(var i=arguments.length,n=0;i>n;n++){var r=arguments[n];e("string"==typeof r||"object"==typeof r,'Each item to be enqueued must be a string of the target path or an object containing a "path" key and/or a "type" key'),e("string"==typeof r||"string"==typeof r.path,"Invalid path specified: "+r.path+".");var l="string"==typeof r?r:r.path,d=r.type;if(!d){var p=l.split(".").pop().toLowerCase();if(s.indexOf(p)>-1)d=o.TYPE.IMAGE;else if(a.indexOf(p)>-1)d=o.TYPE.VIDEO;else{if(!(u.indexOf(p)>-1))throw"[AssetLoader]::Unsupported asset format: "+l;d=o.TYPE.AUDIO}}d&&(this.queue.push({path:l,type:d}),this._bytesLoaded||(this._bytesLoaded=[]),this._bytesTotal||(this._bytesTotal=[]),this._bytesLoaded.push(0),this._bytesTotal.push(0))}}},o.prototype.dequeue=function(){if(e(arguments&&arguments.length>0,"There are no arguments specified."),e(this.state!==o.STATE.IN_PROGRESS,"Dequeueing is prohibited when the state is in progress."),arguments&&!(arguments.length<=0)&&this.state!==o.STATE.IN_PROGRESS)for(var t=arguments.length,i=0;t>i;i++){var n=arguments[i];e("string"==typeof n,"Expecting path to be a string.");for(var r=this.queue.length,s=0;r>s;s++){var a=this.queue[s];if(a.path===n){this.queue.splice(s,1),this.bytesLoaded.splice(s,1),this.bytesTotal.splice(s,1);break}}}},o.prototype.getXHR=function(e){var t=e.path.split(".").pop().toLowerCase(),i=l[e.type.toUpperCase()][t];if(!i)throw"[AssetLoader]:: Unsupported asset format: "+e.path;var n=new XMLHttpRequest;return n.addEventListener("progress",this._onXHRProgress.bind(this),!1),n.addEventListener("load",this._onXHRLoadComplete.bind(this),!1),n.addEventListener("error",this._onXHRLoadError.bind(this),!1),n.addEventListener("abort",this._onXHRAbort.bind(this),!1),n.open("GET",e.path,this.async),n.overrideMimeType(i),n.data=e,n},o.prototype._onXHRProgress=function(e){if(e.lengthComputable){var i=e.currentTarget,r=i.data.id,o=i.data.path,s=i.data.type,a=e.loaded,u=e.total;i.data.bytesLoaded=a,i.data.bytesTotal=u,this._bytesLoaded[r]=a,this._bytesTotal[r]=u,this._bytesLoaded||(this._bytesLoaded=[]),this.debug&&t('[AssetLoader]::_onXHRProgress("'+o+'":'+a+"/"+u+")");var l=document.createEvent("CustomEvent");l.initCustomEvent(n.OBJECT.PROGRESS,!0,!0,{id:r,path:o,type:s,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(l)}},o.prototype._onXHRLoadComplete=function(e){var i=e.currentTarget,r=i.data.id,o=i.data.path,s=i.data.type;this.debug&&t('[AssetLoader]::_onXHRLoadComplete("'+o+'"")'),this._pending--;var a=document.createEvent("CustomEvent");a.initCustomEvent(n.OBJECT.LOAD,!0,!0,{id:r,path:o,type:s,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(a)},o.prototype._onXHRLoadError=function(e){var i=e.currentTarget,r=i.data.id,o=i.data.path,s=i.data.type;this.debug&&t('[AssetLoader]::_onXHRLoadError("'+o+'"")'),this._pending--;var a=document.createEvent("CustomEvent");if(a.initCustomEvent(n.OBJECT.ERROR,!0,!0,{id:r,path:o,type:s,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(a),0===this._pending){var u=document.createEvent("CustomEvent");u.initCustomEvent(n.OBJECT.LOAD,!0,!0,{id:r,path:o,type:s,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(u)}},o.prototype._onXHRAbort=function(e){var i=e.currentTarget,r=i.data.id,o=i.data.path,s=i.data.type;this.debug&&t('[AssetLoader]::_onXHRLoadError("'+o+'"")'),this._pending--;
var a=document.createEvent("CustomEvent");if(a.initCustomEvent(n.OBJECT.ABORT,!0,!0,{id:r,path:o,type:s,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(a),0===this._pending){var u=document.createEvent("CustomEvent");u.initCustomEvent(n.OBJECT.LOAD,!0,!0,{id:r,path:o,type:s,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(u)}},o}),i("utils",["utils/assert","utils/debounce","utils/log","utils/namespace","utils/inherit","utils/sizeOf","utils/module","utils/keyOfValue","utils/isNull","utils/AssetLoader"],function(e,t,i,n,r,o,s,a,u,l){var d=function(e){return e};return Object.defineProperty(d,"assert",{value:e,writable:!1,enumerable:!0}),Object.defineProperty(d,"debounce",{value:t,writable:!1,enumerable:!0}),Object.defineProperty(d,"log",{value:i,writable:!1,enumerable:!0}),Object.defineProperty(d,"namespace",{value:n,writable:!1,enumerable:!0}),Object.defineProperty(d,"inherit",{value:r,writable:!1,enumerable:!0}),Object.defineProperty(d,"sizeOf",{value:o,writable:!1,enumerable:!0}),Object.defineProperty(d,"module",{value:s,writable:!1,enumerable:!0}),Object.defineProperty(d,"keyOfValue",{value:a,writable:!1,enumerable:!0}),Object.defineProperty(d,"isNull",{value:u,writable:!1,enumerable:!0}),Object.defineProperty(d,"AssetLoader",{value:l,writable:!1,enumerable:!0}),d}),i("vars",["enums","events","math","ui","utils"],function(e,t,i,n,r){function o(e,t){Object.defineProperty(s,e,{value:t,writable:!1});for(var i in t)t.hasOwnProperty(i)&&Object.defineProperty(s,i,{value:t[i],writable:!1})}var s=function(e){return e};return Object.defineProperty(s,"version",{value:"0.5.2",writable:!1}),Object.defineProperty(s,"debug",{value:!1,writable:!0}),o("enums",e),o("events",t),o("math",i),o("ui",n),o("utils",r),s}),t("vars")}());