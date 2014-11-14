!function(t,e){var i=e;"undefined"!=typeof module&&module.exports?module.exports=i:(i.utils.namespace("io").variante=i,t.vars=i)}("undefined"!=typeof window?window:this,function(){var t,e,i;return function(n){function r(t,e){return v.call(t,e)}function o(t,e){var i,n,r,o,s,u,a,l,c,f,h,p=e&&e.split("/"),d=y.map,b=d&&d["*"]||{};if(t&&"."===t.charAt(0))if(e){for(p=p.slice(0,p.length-1),t=t.split("/"),s=t.length-1,y.nodeIdCompat&&O.test(t[s])&&(t[s]=t[s].replace(O,"")),t=p.concat(t),c=0;c<t.length;c+=1)if(h=t[c],"."===h)t.splice(c,1),c-=1;else if(".."===h){if(1===c&&(".."===t[2]||".."===t[0]))break;c>0&&(t.splice(c-1,2),c-=2)}t=t.join("/")}else 0===t.indexOf("./")&&(t=t.substring(2));if((p||b)&&d){for(i=t.split("/"),c=i.length;c>0;c-=1){if(n=i.slice(0,c).join("/"),p)for(f=p.length;f>0;f-=1)if(r=d[p.slice(0,f).join("/")],r&&(r=r[n])){o=r,u=c;break}if(o)break;!a&&b&&b[n]&&(a=b[n],l=c)}!o&&a&&(o=a,u=l),o&&(i.splice(0,u,o),t=i.join("/"))}return t}function s(t,e){return function(){var i=N.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),p.apply(n,i.concat([t,e]))}}function u(t){return function(e){return o(e,t)}}function a(t){return function(e){g[t]=e}}function l(t){if(r(m,t)){var e=m[t];delete m[t],w[t]=!0,h.apply(n,e)}if(!r(g,t)&&!r(w,t))throw new Error("No "+t);return g[t]}function c(t){var e,i=t?t.indexOf("!"):-1;return i>-1&&(e=t.substring(0,i),t=t.substring(i+1,t.length)),[e,t]}function f(t){return function(){return y&&y.config&&y.config[t]||{}}}var h,p,d,b,g={},m={},y={},w={},v=Object.prototype.hasOwnProperty,N=[].slice,O=/\.js$/;d=function(t,e){var i,n=c(t),r=n[0];return t=n[1],r&&(r=o(r,e),i=l(r)),r?t=i&&i.normalize?i.normalize(t,u(e)):o(t,e):(t=o(t,e),n=c(t),r=n[0],t=n[1],r&&(i=l(r))),{f:r?r+"!"+t:t,n:t,pr:r,p:i}},b={require:function(t){return s(t)},exports:function(t){var e=g[t];return"undefined"!=typeof e?e:g[t]={}},module:function(t){return{id:t,uri:"",exports:g[t],config:f(t)}}},h=function(t,e,i,o){var u,c,f,h,p,y,v=[],N=typeof i;if(o=o||t,"undefined"===N||"function"===N){for(e=!e.length&&i.length?["require","exports","module"]:e,p=0;p<e.length;p+=1)if(h=d(e[p],o),c=h.f,"require"===c)v[p]=b.require(t);else if("exports"===c)v[p]=b.exports(t),y=!0;else if("module"===c)u=v[p]=b.module(t);else if(r(g,c)||r(m,c)||r(w,c))v[p]=l(c);else{if(!h.p)throw new Error(t+" missing "+c);h.p.load(h.n,s(o,!0),a(c),{}),v[p]=g[c]}f=i?i.apply(g[t],v):void 0,t&&(u&&u.exports!==n&&u.exports!==g[t]?g[t]=u.exports:f===n&&y||(g[t]=f))}else t&&(g[t]=i)},t=e=p=function(t,e,i,r,o){if("string"==typeof t)return b[t]?b[t](e):l(d(t,e).f);if(!t.splice){if(y=t,y.deps&&p(y.deps,y.callback),!e)return;e.splice?(t=e,e=i,i=null):t=n}return e=e||function(){},"function"==typeof i&&(i=r,r=o),r?h(n,t,e,i):setTimeout(function(){h(n,t,e,i)},4),p},p.config=function(t){return p(t)},t._defined=g,i=function(t,e,i){e.splice||(i=e,e=[]),r(g,t)||r(m,t)||(m[t]=[t,e,i])},i.amd={jQuery:!0}}(),i("almond",function(){}),i("enums/dirtytype",{NONE:0,POSITION:1,SIZE:2,LAYOUT:4,STATE:8,DATA:16,LOCALE:32,DEPTH:64,CONFIG:128,STYLE:256,CUSTOM:512,ALL:4294967295}),i("enums",["enums/dirtytype"],function(t){var e=function(t){return t};return e.DirtyType=t,e}),i("utils",[],function(){function t(t,e){if(!t&&this.debug)throw e||"[vars]: Assertion failed."}function e(){this.debug&&window.console&&console.log&&Function.apply.call(console.log,console,arguments)}function i(e,i){t("string"==typeof e,"Invalid identifiers specified."),t("undefined"==typeof i||"object"==typeof i,"Invalid scope specified.");for(var n=e.split("."),r=void 0===i||null===i?window:i,o=0;o<n.length;o++)r=r[n[o]]||(r[n[o]]={});return r}function n(t,e){return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,e}function r(t){if(void 0!==t.length)return t.length;var e=0;switch(typeof t){case"object":if(null!==t&&void 0!==t)for(var i in t)e++;break;case"number":e=(""+t).length;break;default:e=0}return e}function o(t){return void 0===t||null===t?!0:!1}function s(){return"ontouchstart"in window.document.documentElement}var u={};return u.assert=t,u.log=e,u.namespace=i,u.inherit=n,u.sizeOf=r,u.isNull=o,u.isTouchEnabled=s,u}),i("ui/viewcontroller",["../enums/dirtytype"],function(t){function e(e){function i(){this.responsive&&this.setDirty(t.SIZE)}function n(){this.responsive&&this.setDirty(t.POSITION)}var r,o=0;Object.defineProperty(this,"name",{value:"",writable:!0}),Object.defineProperty(this,"view",{value:e||null,writable:!1}),Object.defineProperty(this,"responsive",{value:!1,writable:!0}),Object.defineProperty(this,"data",{get:function(){return r}.bind(this),set:function(e){r=e,this.setDirty(t.DATA)}.bind(this)}),this.setDirty=function(e,i){if(!this.isDirty(e)||i){switch(e){case t.NONE:case t.ALL:o=e;break;default:o|=e}i?this.update():requestAnimationFrame(this.update.bind(this))}},this.isDirty=function(e){switch(e){case t.NONE:case t.ALL:return o==e;default:return 0!==(e&o)}},window&&(window.addEventListener("resize",i.bind(this)),window.addEventListener("orientationchange",i.bind(this)),window.addEventListener("scroll",n.bind(this))),this.init()}return e.prototype.init=function(){this.setDirty(t.ALL)},e.prototype.destroy=function(){},e.prototype.update=function(){this.setDirty(0)},e.prototype.toString=function(){return"[ViewController{"+this.name+"}]"},e}),i("ui",["utils","ui/viewcontroller"],function(t,e){function i(e,i,n){if(i){t.assert(!i.top||!isNaN(i.top),"Top property must be a number."),t.assert(!i.right||!isNaN(i.right),"Right property must be a number."),t.assert(!i.bottom||!isNaN(i.bottom),"Bottom property must be a number."),t.assert(!i.left||!isNaN(i.left),"Left property must be a number.");var r=i.units||"px";n&&(t.assert(!n.top||!isNaN(n.top),"Top constraint must be a number."),t.assert(!n.right||!isNaN(n.right),"Right constraint must be a number."),t.assert(!n.bottom||!isNaN(n.bottom),"Bottom constraint must be a number."),t.assert(!n.left||!isNaN(n.left),"Left constraint must be a number."));var o=n&&n.top?Math.min(i.top,n.top):i.top,s=n&&n.right?Math.min(i.right,n.right):i.right,u=n&&n.bottom?Math.min(i.bottom,n.bottom):i.bottom,a=n&&n.left?Math.min(i.left,n.left):i.left;return e&&(e.style?(e.style.top=String(o)+r,e.style.right=String(s)+r,e.style.bottom=String(u)+r,e.style.left=String(a)+r):e.css&&(e.css({top:String(o)+r}),e.css({right:String(s)+r}),e.css({bottom:String(u)+r}),e.css({left:String(a)+r}))),{top:o,right:s,bottom:u,left:a}}return e&&(e.style?(e.style.top="initial",e.style.right="initial",e.style.bottom="initial",e.style.left="initial"):e.css&&(e.css({top:"initial"}),e.css({right:"initial"}),e.css({bottom:"initial"}),e.css({left:"initial"}))),{top:"initial",right:"initial",bottom:"initial",left:"initial"}}function n(e,i,n){if(i){t.assert(!i.width||!isNaN(i.width),"Width property must be a number."),t.assert(!i.height||!isNaN(i.height),"Height property must be a number."),t.assert(!i.aspectRatio||!isNaN(i.aspectRatio),"Aspect ratio property must be a number.");var r=i.units||"px",o=i.aspectRatio?Number(i.aspectRatio):i.width/i.height,s=i.width,u=i.height;n&&(t.assert(n.width||!isNaN(n.width),"Width constraint must be a number."),t.assert(n.height||!isNaN(n.height),"Height constraint must be a number."),n.width&&(s=Math.min(n.width,s)),n.height&&(u=Math.min(n.height,u)));var a=s>u?u*o:s,l=s>u?u:s/o;return a>s?(a=s,l=a/o):l>u&&(l=u,a=l*o),e&&(e.style?(i.width&&(e.style.width=String(a)+r),i.height&&(e.style.height=String(l)+r)):e.css&&(i.width&&e.css({width:String(a)+r}),i.height&&e.css({height:String(l)+r}))),{width:a,height:l}}return e&&(e.style?(e.style.width="initial",e.style.height="initial"):e.css&&(e.css({width:"initial"}),e.css({height:"initial"}))),{width:"initial",height:"initial"}}var r=function(t){return t};return r.ViewController=e,r.translate2D=i,r.transform2D=n,r}),i("vars",["enums","ui","utils"],function(t,e,i){var n=function(t){return t};return Object.defineProperty(n,"enums",{value:t,writable:!1}),Object.defineProperty(n,"ui",{value:e,writable:!1}),Object.defineProperty(n,"utils",{value:i,writable:!1}),Object.defineProperty(n,"version",{value:"0.1.0",writable:!1}),Object.defineProperty(n,"debug",{get:function(){return n.utils.debug}.bind(this),set:function(t){n.utils.debug=t}.bind(this)}),n}),e("vars")}());