(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor~pages_Home_index.chunk~pages_JSBridge_index.chunk"],{

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var classNames = function () {
    // don't inherit from Object so we can skip hasOwnProperty check later
    // http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
    function StorageObject() {}

    StorageObject.prototype = Object.create(null);

    function _parseArray(resultSet, array) {
      var length = array.length;

      for (var i = 0; i < length; ++i) {
        _parse(resultSet, array[i]);
      }
    }

    var hasOwn = {}.hasOwnProperty;

    function _parseNumber(resultSet, num) {
      resultSet[num] = true;
    }

    function _parseObject(resultSet, object) {
      for (var k in object) {
        if (hasOwn.call(object, k)) {
          // set value to false instead of deleting it to avoid changing object structure
          // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
          resultSet[k] = !!object[k];
        }
      }
    }

    var SPACE = /\s+/;

    function _parseString(resultSet, str) {
      var array = str.split(SPACE);
      var length = array.length;

      for (var i = 0; i < length; ++i) {
        resultSet[array[i]] = true;
      }
    }

    function _parse(resultSet, arg) {
      if (!arg) return;
      var argType = typeof arg; // 'foo bar'

      if (argType === 'string') {
        _parseString(resultSet, arg); // ['foo', 'bar', ...]

      } else if (Array.isArray(arg)) {
        _parseArray(resultSet, arg); // { 'foo': true, ... }

      } else if (argType === 'object') {
        _parseObject(resultSet, arg); // '130'

      } else if (argType === 'number') {
        _parseNumber(resultSet, arg);
      }
    }

    return function () {
      // don't leak arguments
      // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
      var len = arguments.length;
      var args = Array(len);

      for (var i = 0; i < len; i++) {
        args[i] = arguments[i];
      }

      var classSet = new StorageObject();

      _parseArray(classSet, args);

      var list = [];

      for (var k in classSet) {
        if (classSet[k]) {
          list.push(k);
        }
      }

      return list.join(' ');
    };
  }();

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-env browser */

/*
  eslint-disable
  no-console,
  func-names
*/

var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");

var srcByModuleId = Object.create(null);
var noDocument = typeof document === 'undefined';
var forEach = Array.prototype.forEach;

function debounce(fn, time) {
  var timeout = 0;
  return function () {
    var self = this; // eslint-disable-next-line prefer-rest-params

    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return fn.apply(self, args);
    }, time);
  };
}

function noop() {}

function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];

  if (!src) {
    if (document.currentScript) {
      src = document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName('script');
      var lastScriptTag = scripts[scripts.length - 1];

      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }

    srcByModuleId[moduleId] = src;
  }

  return function (fileMap) {
    if (!src) {
      return null;
    }

    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];

    if (!filename) {
      return [src.replace('.js', '.css')];
    }

    if (!fileMap) {
      return [src.replace('.js', '.css')];
    }

    return fileMap.split(',').map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), 'g');
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    } // eslint-disable-next-line


    url = el.href.split('?')[0];
  }

  if (!isUrlRequest(url)) {
    return;
  }

  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }

  if (!url || !(url.indexOf('.css') > -1)) {
    return;
  } // eslint-disable-next-line no-param-reassign


  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener('load', function () {
    if (newEl.isLoaded) {
      return;
    }

    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener('error', function () {
    if (newEl.isLoaded) {
      return;
    }

    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());

  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

function getReloadUrl(href, src) {
  var ret; // eslint-disable-next-line no-param-reassign

  href = normalizeUrl(href, {
    stripWWW: false
  }); // eslint-disable-next-line array-callback-return

  src.some(function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

function reloadStyle(src) {
  if (!src) {
    return false;
  }

  var elements = document.querySelectorAll('link');
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }

    var url = getReloadUrl(el.href, src);

    if (!isUrlRequest(url)) {
      return;
    }

    if (el.visited === true) {
      return;
    }

    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}

function reloadAll() {
  var elements = document.querySelectorAll('link');
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }

    updateCss(el);
  });
}

function isUrlRequest(url) {
  // An URL is not an request if
  // It is not http or https
  if (!/^https?:/i.test(url)) {
    return false;
  }

  return true;
}

module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log('no window.document found, will not HMR CSS');
    return noop;
  }

  var getScriptSrc = getCurrentScriptUrl(moduleId);
  return debounce(function () {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);

    if (options.locals) {
      console.log('[HMR] Detected local css modules. Reload all css');
      reloadAll();
      return;
    }

    if (reloaded) {
      console.log('[HMR] css reload %s', src.join(' '));
    } else {
      console.log('[HMR] Reload all css');
      reloadAll();
    }
  }, 50);
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable */

function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case '..':
        accumulator.pop();
        break;

      case '.':
        break;

      default:
        accumulator.push(item);
    }

    return accumulator;
  }, []).join('/');
}

module.exports = function (urlString) {
  urlString = urlString.trim();

  if (/^data:/i.test(urlString)) {
    return urlString;
  }

  var protocol = urlString.indexOf('//') !== -1 ? urlString.split('//')[0] + '//' : '';
  var components = urlString.replace(new RegExp(protocol, 'i'), '').split('/');
  var host = components[0].toLowerCase().replace(/\.$/, '');
  components[0] = '';
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ "./node_modules/rax-view/lib/index.css":
/*!*********************************************!*\
  !*** ./node_modules/rax-view/lib/index.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1617757208156
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./node_modules/rax-view/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/rax-view/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _rax = __webpack_require__(/*! rax */ "./node_modules/rax/index.js");

var _dedupe = _interopRequireDefault(__webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js"));

var _universalEnv = {
  isWeex: false,
  isWeb: true,
  isKraken: false,
  isNode: false,
  isMiniApp: false,
  isWeChatMiniProgram: false,
  isWeChatMiniprogram: false
};

var _index = _interopRequireDefault(__webpack_require__(/*! ./index.css */ "./node_modules/rax-view/lib/index.css"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var _styleSheet = _index.default;

function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();

      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }

  return className.join(' ').trim();
}

function _getStyle(classNameExpression) {
  var cache = _styleSheet.__cache || (_styleSheet.__cache = {});

  var className = _getClassName(classNameExpression);

  var classNameArr = className.split(/\s+/);
  var style = cache[className];

  if (!style) {
    style = {};

    if (classNameArr.length === 1) {
      style = _styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        var value = _styleSheet[cls.trim()];

        if (typeof value === 'object') {
          style = Object.assign(style, _styleSheet[cls.trim()]);
        }
      });
    }

    cache[className] = style;
  }

  return style;
}

var View = (0, _rax.forwardRef)(function (props, ref) {
  var selfRef = (0, _rax.useRef)(null);

  var className = props.className,
      style = props.style,
      onFirstAppear = props.onFirstAppear,
      onAppear = props.onAppear,
      rest = __rest(props, ["className", "style", "onFirstAppear", "onAppear"]);

  var handleAppear = onAppear;

  if (onFirstAppear) {
    handleAppear = function (event) {
      onAppear && onAppear(event);

      if (!selfRef.triggeredAppear) {
        onFirstAppear && onFirstAppear(event);
      } else {
        selfRef.triggeredAppear = true;
      }
    };
  }

  return (0, _rax.createElement)("div", _extends({}, rest, {
    onAppear: handleAppear,
    ref: ref,
    className: (0, _dedupe.default)('rax-view-v2', className),
    style: Object.assign({}, _getStyle((0, _dedupe.default)('rax-view-v2', className)), style)
  }));
});
View.displayName = 'View';
var _default = View;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=vendor~pages_Home_index.chunk~pages_JSBridge_index.chunk.js.map