/**
 * VARS
 * (c) Andrew Wei
 *
 * This software is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Module of methods/classes related to UI manipulation and
 * operations.
 *
 * @type {Module}
 */

'use strict';

define('ui', [
  'ui/addClass',
  'ui/changeElementState',
  'ui/getClassIndex',
  'ui/getElementState',
  'ui/getIntersectRect',
  'ui/getRect',
  'ui/getViewportRect',
  'ui/hasClass',
  'ui/hasChild',
  'ui/hitTestElement',
  'ui/hitTestRect',
  'ui/initDOM',
  'ui/removeClass',
  'ui/transform',
  'ui/translate',
  'ui/translate3d',
  'ui/Element',
  'ui/ElementUpdateDelegate',
  'ui/Video'
], function(
  addClass,
  changeElementState,
  getClassIndex,
  getElementState,
  getIntersectRect,
  getRect,
  getViewportRect,
  hasClass,
  hasChild,
  hitTestElement,
  hitTestRect,
  initDOM,
  removeClass,
  transform,
  translate,
  translate3d,
  Element,
  ElementUpdateDelegate,
  Video
) {
  var api = {};

  Object.defineProperty(api, 'addClass', { value: addClass, writable: false, enumerable: true });
  Object.defineProperty(api, 'changeElementState', { value: changeElementState, writable: false, enumerable: true });
  Object.defineProperty(api, 'hasClass', { value: hasClass, writable: false, enumerable: true });
  Object.defineProperty(api, 'hasChild', { value: hasChild, writable: false, enumerable: true });
  Object.defineProperty(api, 'getClassIndex', { value: getClassIndex, writable: false, enumerable: true });
  Object.defineProperty(api, 'getElementState', { value: getElementState, writable: false, enumerable: true });
  Object.defineProperty(api, 'getIntersectRect', { value: getIntersectRect, writable: false, enumerable: true });
  Object.defineProperty(api, 'getRect', { value: getRect, writable: false, enumerable: true });
  Object.defineProperty(api, 'getViewportRect', { value: getViewportRect, writable: false, enumerable: true });
  Object.defineProperty(api, 'hitTestElement', { value: hitTestElement, writable: false, enumerable: true });
  Object.defineProperty(api, 'hitTestRect', { value: hitTestRect, writable: false, enumerable: true });
  Object.defineProperty(api, 'initDOM', { value: initDOM, writable: false, enumerable: true });
  Object.defineProperty(api, 'removeClass', { value: removeClass, writable: false, enumerable: true });
  Object.defineProperty(api, 'translate', { value: translate, writable: false, enumerable: true });
  Object.defineProperty(api, 'translate3d', { value: translate3d, writable: false, enumerable: true });
  Object.defineProperty(api, 'transform', { value: transform, writable: false, enumerable: true });
  Object.defineProperty(api, 'Element', { value: Element, writable: false, enumerable: true });
  Object.defineProperty(api, 'ElementUpdateDelegate', { value: ElementUpdateDelegate, writable: false, enumerable: true });
  Object.defineProperty(api, 'Video', { value: Video, writable: false, enumerable: true });

  return api;
});
