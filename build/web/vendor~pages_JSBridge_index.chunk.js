(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor~pages_JSBridge_index.chunk"],{

/***/ "./node_modules/rax-text/lib/index.css":
/*!*********************************************!*\
  !*** ./node_modules/rax-text/lib/index.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1617757208150
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./node_modules/rax-text/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/rax-text/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _rax = __webpack_require__(/*! rax */ "./node_modules/rax/index.js");

var _universalEnv = {
  isWeex: false,
  isWeb: true,
  isKraken: false,
  isNode: false,
  isMiniApp: false,
  isWeChatMiniProgram: false,
  isWeChatMiniprogram: false
};

var _index = _interopRequireDefault(__webpack_require__(/*! ./index.css */ "./node_modules/rax-text/lib/index.css"));

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

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
} // add vesion in style to avoid conflict with older version


var prefixCls = 'rax-text-v2';
var Text = (0, _rax.forwardRef)(function (props, ref) {
  var className = props.className,
      style = props.style,
      numberOfLines = props.numberOfLines,
      children = props.children,
      onPress = props.onPress,
      onClick = props.onClick,
      rest = _objectWithoutPropertiesLoose(props, ["className", "style", "numberOfLines", "children", "onPress", "onClick"]);

  var lines = typeof numberOfLines === 'string' ? parseInt(numberOfLines, 10) : numberOfLines;
  var textString = '';

  if (children != null) {
    textString = Array.isArray(children) ? children.join('') : children.toString();
  }

  var classNames = [prefixCls, className];

  if (lines) {
    classNames.push(prefixCls + "--overflow-hidden");

    if (lines === 1) {
      classNames.push(prefixCls + "--singleline");
    } else {
      classNames.push(prefixCls + "--multiline");
    }
  }

  var lineClamp = lines > 1 ? lines : undefined;
  return (0, _rax.createElement)("span", _extends({}, rest, {
    ref: ref,
    className: classNames.join(' ') // Vendor prefixes should begin with a capital letter.
    ,
    style: Object.assign({}, _getStyle(classNames.join(' ')), _extends({}, style, {
      // Currently only -webkit-line-clamp is supported in browsers
      // https://www.w3.org/TR/css-overflow-3/#webkit-line-clamp
      WebkitLineClamp: lineClamp,
      // Add line-clamp for standard compatibility and engines which
      // has already support it such as Kraken
      lineClamp: lineClamp
    })),
    onClick: onClick || onPress
  }), textString);
});
Text.displayName = 'Text';
var _default = Text;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=vendor~pages_JSBridge_index.chunk.js.map