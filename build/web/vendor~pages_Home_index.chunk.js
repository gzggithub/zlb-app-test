(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor~pages_Home_index.chunk"],{

/***/ "./node_modules/@aligov/jssdk-mgop/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@aligov/jssdk-mgop/es/index.js ***!
  \*****************************************************/
/*! exports provided: mgop, setDefaultHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mgop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mgop */ "./node_modules/@aligov/jssdk-mgop/es/mgop/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultHeader", function() { return _mgop__WEBPACK_IMPORTED_MODULE_0__["setDefaultHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mgop", function() { return _mgop__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./node_modules/@aligov/jssdk-mgop/es/mgop/env.js":
/*!********************************************************!*\
  !*** ./node_modules/@aligov/jssdk-mgop/es/mgop/env.js ***!
  \********************************************************/
/*! exports provided: ENV, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV", function() { return ENV; });
var ENV = {
  Online: 'https://mapi.zjzwfw.gov.cn',
  Pre: '//pre-mapi.zjzwfw.gov.cn',
  Daily: '//47.96.150.251:8068'
};

var getHostByEnv = function (env, host) {
  /* 格式化host */
  if (host) {
    if (/\/$/.test(host)) {
      host = host.slice(0, -1);
    }

    return host;
  }
  /* daily & pre 仅供调试使用 */


  if ('daily' === env) {
    return ENV.Daily;
  } else if ('pre' === env) {
    return ENV.Pre;
  } else {
    return "//" + window.location.host;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getHostByEnv);

/***/ }),

/***/ "./node_modules/@aligov/jssdk-mgop/es/mgop/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aligov/jssdk-mgop/es/mgop/index.js ***!
  \**********************************************************/
/*! exports provided: setDefaultHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultHeader", function() { return setDefaultHeader; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios_jsonp_pro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios-jsonp-pro */ "./node_modules/axios-jsonp-pro/index.js");
/* harmony import */ var axios_jsonp_pro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios_jsonp_pro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aligov_jssdk_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aligov/jssdk-utils */ "./node_modules/@aligov/jssdk-utils/es/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ "./node_modules/@aligov/jssdk-mgop/es/mgop/env.js");
/* harmony import */ var _responseCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responseCode */ "./node_modules/@aligov/jssdk-mgop/es/mgop/responseCode.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type */ "./node_modules/@aligov/jssdk-mgop/es/mgop/type.js");


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};






var debug = _aligov_jssdk_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].debug,
    warning = _aligov_jssdk_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warning;
var getTokenFromCookie = _aligov_jssdk_utils__WEBPACK_IMPORTED_MODULE_2__["token"].getTokenFromCookie,
    getTimeStamp = _aligov_jssdk_utils__WEBPACK_IMPORTED_MODULE_2__["token"].getTimeStamp;
var CONST_VARIABLE = {
  TOKEN_KEY: '_mgw_tk',
  TOKEN_KEY_ENC: '_mgw_tk_enc',
  APPKEY: 'jl9vupjh+200100201+nytcfro',
  MAX_LONG_TIMEOUT: '3000',
  MAX_RETRY_TIMES: 2,
  ONLY_USE_DATA_SENT_REQUEST: [_type__WEBPACK_IMPORTED_MODULE_5__["IMgopRequestMethod"].POST, _type__WEBPACK_IMPORTED_MODULE_5__["IMgopRequestMethod"].PATCH, _type__WEBPACK_IMPORTED_MODULE_5__["IMgopRequestMethod"].PUT]
};
var _NAME_ = 'mgop';
var RET_MESSAGE = '1000::调用成功';
var defaultHeader = {};

var Mgop = /*#__PURE__*/function () {
  function Mgop(props) {
    this.times = 0;
    this.config = Object.assign({}, {
      env: 'online',
      header: {}
    }, props);
    debug(_NAME_, 'Mgop init with params', this.config);
  }

  var _proto = Mgop.prototype;

  _proto.isJupiterJSBridge = function () {
    var _window = window,
        JupiterJSBridge = _window.JupiterJSBridge; // TODO: 浙里办应用还不支持egop，后续需要适配

    if (JupiterJSBridge && _aligov_jssdk_utils__WEBPACK_IMPORTED_MODULE_2__["webViewEnv"].isJCSS()) {
      return true;
    } else {
      return false;
    }
  };

  _proto.isAlipayMiniApp = function () {
    var sUserAgent = window.navigator.userAgent.toLowerCase();
    var bIsAlipayMini = sUserAgent.indexOf('miniprogram') > -1 && sUserAgent.indexOf('alipay') > -1;

    if (bIsAlipayMini) {
      return true;
    } else {
      return false;
    }
  };

  _proto.createParam = function (data, ret) {
    if (data === void 0) {
      data = {};
    }

    var _this$config$api = this.config.api,
        api = _this$config$api === void 0 ? '' : _this$config$api;
    return {
      api: api,
      data: data,
      ret: typeof ret === 'string' ? [ret] : ret
    };
  };

  _proto.createSuccessCb = function (data) {
    return this.createParam(data, RET_MESSAGE);
  };

  _proto.createFailCb = function (ret) {
    return this.createParam({}, ret);
  }
  /**
   * 签名处理
   * @param timestamp
   */
  ;

  _proto.processToken = function (timestamp, data) {
    /* 网关会在第一次http请求时set-cookie，所以第一次请求肯定是失败的 */
    var token = getTokenFromCookie(CONST_VARIABLE.TOKEN_KEY);
    var appkey = this.config.appKey || CONST_VARIABLE.APPKEY;
    var api = this.config.api || '';
    var stringifyParams = Object(_aligov_jssdk_utils__WEBPACK_IMPORTED_MODULE_2__["stringifyQS"])({
      token: token || '',
      ak: appkey,
      api: api,
      ts: timestamp,
      data: data
    }, false);
    debug(_NAME_, 'processToken params', stringifyParams);
    return Object(_aligov_jssdk_utils__WEBPACK_IMPORTED_MODULE_2__["md5"])(stringifyParams);
  };

  _proto.processRequestUrl = function () {
    /* 获取需要被加签的data */

    /* 获取官网的 host */
    var host = Object(_env__WEBPACK_IMPORTED_MODULE_3__["default"])(this.config.env, this.config.host);
    var timestamp = getTimeStamp();

    var data = function (config) {
      var method = config.type || _type__WEBPACK_IMPORTED_MODULE_5__["IMgopRequestMethod"].GET;
      var data = config.data;
      /* POST 请求的数据放在body里，不加签 */

      if (method === _type__WEBPACK_IMPORTED_MODULE_5__["IMgopRequestMethod"].POST) {
        return '';
      } else {
        return JSON.stringify(data) || '';
      }
    }(this.config);

    var sign = this.processToken(timestamp, data);
    var param = {
      ak: this.config.appKey || CONST_VARIABLE.APPKEY,
      api: this.config.api,
      ts: timestamp,
      data: data,
      sign: sign
    };
    return host + "/h5/mgop?" + Object(_aligov_jssdk_utils__WEBPACK_IMPORTED_MODULE_2__["stringifyQS"])(param);
  }
  /**
   * 判断是成功还是失败
   * 成功，调用createSuccessCb
   * 失败，调用createFailCb
   */
  ;

  _proto.processResponseResult = function (response) {
    if (response === void 0) {
      response = {};
    }

    var formatCode = Number(response.rs);

    switch (formatCode) {
      case _responseCode__WEBPACK_IMPORTED_MODULE_4__["default"].ResultSuccess:
        return this.createSuccessCb(response.data || {});

      case _responseCode__WEBPACK_IMPORTED_MODULE_4__["default"].FAIL_SYS_TOKEN_EMPTY:
        debug(_NAME_, _responseCode__WEBPACK_IMPORTED_MODULE_4__["default"].FAIL_SYS_TOKEN_EMPTY, '令牌为空，重试');

        if (this.times < CONST_VARIABLE.MAX_RETRY_TIMES) {
          this.times++;
          return this.doSequence();
        }

        debug(_NAME_, _responseCode__WEBPACK_IMPORTED_MODULE_4__["default"].FAIL_SYS_TOKEN_EMPTY, '令牌为空，且超过最大重试次数');
        return '';

      default:
        warning(_NAME_, 'response fail', formatCode);
        throw this.createFailCb(response.ret);
    }
  };

  _proto.processRequest = function () {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var dataType, method, url, headers, response, resp, _resp;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              dataType = this.config.dataType || _type__WEBPACK_IMPORTED_MODULE_5__["IMgopRequestDataType"].JSONP;
              method = this.config.type || _type__WEBPACK_IMPORTED_MODULE_5__["IMgopRequestMethod"].GET;
              url = this.processRequestUrl();
              /* 合并 defaultHeader 和 传入的header */

              headers = defaultHeader;
              Object.assign(headers, this.config.header);
              /* 网关返回数据 */

              response = null;

              if (!(dataType === _type__WEBPACK_IMPORTED_MODULE_5__["IMgopRequestDataType"].JSON)) {
                _context.next = 27;
                break;
              }

              if (!this.isAlipayMiniApp()) {
                _context.next = 12;
                break;
              }

              debug(_NAME_, method, '小程序 CORS 跨域请求');
              _context.next = 25;
              break;

            case 12:
              debug(_NAME_, method, 'H5 CORS 跨域请求');

              if (!(method === _type__WEBPACK_IMPORTED_MODULE_5__["IMgopRequestMethod"].GET)) {
                _context.next = 20;
                break;
              }

              _context.next = 16;
              return axios_jsonp_pro__WEBPACK_IMPORTED_MODULE_1___default.a.get(url, {
                headers: headers,
                withCredentials: true
              });

            case 16:
              resp = _context.sent;
              response = resp ? resp.data : null;
              _context.next = 25;
              break;

            case 20:
              if (!(method === _type__WEBPACK_IMPORTED_MODULE_5__["IMgopRequestMethod"].POST)) {
                _context.next = 25;
                break;
              }

              _context.next = 23;
              return axios_jsonp_pro__WEBPACK_IMPORTED_MODULE_1___default.a.post(url, this.config.data || {}, {
                headers: headers,
                withCredentials: true
              });

            case 23:
              _resp = _context.sent;
              response = _resp ? _resp.data : null;

            case 25:
              _context.next = 31;
              break;

            case 27:
              debug(_NAME_, 'JSONP 请求');
              _context.next = 30;
              return axios_jsonp_pro__WEBPACK_IMPORTED_MODULE_1___default.a.jsonp(url, {
                headers: headers
              });

            case 30:
              response = _context.sent;

            case 31:
              if (response) {
                _context.next = 33;
                break;
              }

              throw new Error('返回为空');

            case 33:
              debug(_NAME_, 'response', response);
              return _context.abrupt("return", this.processResponseResult(response));

            case 37:
              _context.prev = 37;
              _context.t0 = _context["catch"](0);
              warning(_NAME_, JSON.stringify(_context.t0 || ''), 'processRequest error');
              throw _context.t0;

            case 41:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 37]]);
    }));
  };

  _proto.doSequence = function () {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.processRequest();

            case 3:
              data = _context2.sent;
              return _context2.abrupt("return", data);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    }));
  }
  /**
   * 在浏览器中，会通过Ajax方式发起请求（H5）。在浙里办客户端中，会通过客户端原生接口发起请求（MgopPlugin）。
   * @method request
   * @return {Promise}  Promise实例
   * @memberOf Mgop
   * @instance
   */
  ;

  _proto.request = function (options) {
    if (options === void 0) {
      options = {};
    }

    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return this.doSequence();

            case 3:
              data = _context3.sent;

              if (options.successCallback) {
                options.successCallback(data);
              }

              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);

              if (options.failureCallback) {
                options.failureCallback(_context3.t0);
              }

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 7]]);
    }));
  };

  _proto.egop = function (options) {
    if (options === void 0) {
      options = {};
    }

    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var _window2, JupiterJSBridge, _ref, api, data, type, appKey, _ref$onSuccess, onSuccess, _ref$onFail, onFail, _ref$header, header;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _window2 = window, JupiterJSBridge = _window2.JupiterJSBridge;
              _ref = options || {}, api = _ref.api, data = _ref.data, type = _ref.type, appKey = _ref.appKey, _ref$onSuccess = _ref.onSuccess, onSuccess = _ref$onSuccess === void 0 ? function (res) {
                console.log('egop on default success result:', res);
              } : _ref$onSuccess, _ref$onFail = _ref.onFail, onFail = _ref$onFail === void 0 ? function (res) {
                console.log('egop on default fail result:', res);
              } : _ref$onFail, _ref$header = _ref.header, header = _ref$header === void 0 ? {} : _ref$header;
              debug(_NAME_, 'call jupiter with param', api);
              JupiterJSBridge.call('eGovernmentApi', {
                apiName: 'egop',
                params: {
                  method: type,
                  param: data,
                  api: api,
                  header: Object.assign({
                    'extra-ak': appKey
                  }, header)
                }
              }, function (result) {
                console.log('egop get result:', result); // TODO: 确认 H5 和 端内 返回的数据格式是否相同

                if (typeof result === 'string') {
                  result = JSON.parse(result);
                }

                var errorCode = result['errorCode'];

                if (errorCode === '0' || errorCode === 0) {
                  onSuccess({
                    api: api,
                    data: result.data || result.result || {},
                    ret: [RET_MESSAGE]
                  });
                } else {
                  onFail(result);
                }
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
  };

  return Mgop;
}();

function setDefaultHeader(header) {
  console.log(header);
  defaultHeader = header;
}
/* harmony default export */ __webpack_exports__["default"] = (function (params) {
  if (params === void 0) {
    params = {};
  }

  debug(_NAME_, 'call mgop with param', params);

  var _mgop = new Mgop(params);
  /* APP无线网关发送流程，APP端内 */


  if (_mgop.isJupiterJSBridge()) {
    return _mgop.egop(params);
  }
  /* H5无线网关发送流程，H5和小程序内 */


  var options = {
    successCallback: params.onSuccess,
    failureCallback: params.onFail
  };
  debug(_NAME_, '_mgop request options', options);
  return _mgop.request(options);
});

/***/ }),

/***/ "./node_modules/@aligov/jssdk-mgop/es/mgop/responseCode.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aligov/jssdk-mgop/es/mgop/responseCode.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var HTTP_RESPONSE_CODE_MAP = {
  /** success */
  ResultSuccess: 1000,
  // 1001-1999 permission error

  /** reject invoke */
  PermissionDeny: 1001,

  /** invoke exceed limit */
  InvokeExceedLimit: 1002,

  /** 缺少操作类型或者此操作类型不支持 */
  OperationTypeMissed: 3000,

  /** 请求数据为空 */
  RequestDataMissed: 3001,

  /** 数据格式有误 */
  ValueInvalid: 3002,

  /** 请求数据为空 */
  RequestParamMissed: 3004,

  /** App不存在 */
  AppNotExist: 3005,

  /** 订阅关系不存在 */
  SubscribeNotExist: 3006,

  /** 服务请求超时 */
  RequestTimeOut: 4001,

  /** 远程调用业务系统异常 */
  RemoteAccessException: 4002,
  CallHsfTimeout: 4005,

  /** 未知错误 */
  UnknowError: 5000,

  /** cors：跨域预检请求 */
  CorsOptions: 8002,

  /** 空令牌 */
  FAIL_SYS_TOKEN_EMPTY: 9001,

  /** 非法令牌：令牌被篡改，或格式错误 */
  FAIL_SYS_TOKEN_ILLEGAL: 9002,

  /** 令牌过期 */
  FAIL_SYS_TOKEN_EXOIRED: 9003
};
/* harmony default export */ __webpack_exports__["default"] = (HTTP_RESPONSE_CODE_MAP);

/***/ }),

/***/ "./node_modules/@aligov/jssdk-mgop/es/mgop/type.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aligov/jssdk-mgop/es/mgop/type.js ***!
  \*********************************************************/
/*! exports provided: IMgopRequestMethod, IMgopRequestType, IMgopRequestDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMgopRequestMethod", function() { return IMgopRequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMgopRequestType", function() { return IMgopRequestType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMgopRequestDataType", function() { return IMgopRequestDataType; });
var IMgopRequestMethod;

(function (IMgopRequestMethod) {
  IMgopRequestMethod["GET"] = "GET";
  IMgopRequestMethod["POST"] = "POST";
  IMgopRequestMethod["DELETE"] = "DELETE";
  IMgopRequestMethod["Options"] = "Options";
  IMgopRequestMethod["PUT"] = "PUT";
  IMgopRequestMethod["PATCH"] = "PATCH";
})(IMgopRequestMethod || (IMgopRequestMethod = {}));

var IMgopRequestType;

(function (IMgopRequestType) {
  IMgopRequestType["H5"] = "H5";
  IMgopRequestType["Native"] = "Native";
})(IMgopRequestType || (IMgopRequestType = {}));

var IMgopRequestDataType;

(function (IMgopRequestDataType) {
  IMgopRequestDataType["JSON"] = "JSON";
  IMgopRequestDataType["JSONP"] = "JSONP";
})(IMgopRequestDataType || (IMgopRequestDataType = {}));

/***/ }),

/***/ "./node_modules/@aligov/jssdk-utils/es/env.js":
/*!****************************************************!*\
  !*** ./node_modules/@aligov/jssdk-utils/es/env.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./node_modules/@aligov/jssdk-utils/es/logger.js");

var log = _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log;

function containerType() {
  var sUserAgent = window.navigator.userAgent.toLowerCase();
  var bIsDtDreamApp = sUserAgent.indexOf('dtdreamweb') > -1;
  var bIsHanApp = sUserAgent.indexOf('hanweb') > -1 && !bIsDtDreamApp;
  var bIsWechat = sUserAgent.indexOf('micromessenger') > -1;
  var bIsAlipay = sUserAgent.indexOf('alipayclient') > -1;
  var bIsAlipayMini = sUserAgent.indexOf('miniprogram') > -1;
  var bIsEshiminApp = sUserAgent.indexOf('eshiminapp') > -1;
  var bIsIflytek = sUserAgent.indexOf('iflytek_mmp') > -1;
  var bIsDingtalkMini = sUserAgent.indexOf('miniprogram') > -1 && sUserAgent.indexOf('dingtalk') > -1;
  var bIsDingtalk = sUserAgent.indexOf('dingtalk') > -1;
  var bIsJCSS = sUserAgent.indexOf('000001@jcss') > -1;
  var bIsReactNative = window.ReactNativeWebView;

  if (bIsDtDreamApp) {
    /* 数梦的UA中有 hanweb 所以要放在首位 */
    return 'dtdream';
  } else if (bIsHanApp) {
    return 'hanweb';
  } else if (bIsEshiminApp) {
    return 'eshimin';
  } else if (bIsIflytek) {
    return 'iflytek';
  } else if (bIsWechat) {
    return 'wetchat';
  } else if (bIsDingtalkMini) {
    /* 钉钉小程序 webview */
    return 'dingtalkMini';
  } else if (bIsDingtalk) {
    /* 钉钉小程序 webview */
    return 'dingtalk';
  } else if (bIsAlipayMini) {
    /* 支付宝小程序 webview */
    return 'alipayMini';
  } else if (bIsAlipay) {
    /* 支付宝 webview */
    return 'alipay';
  } else if (bIsReactNative) {
    return 'reactNative';
  } else if (bIsJCSS) {
    return 'JCSS';
  } else {
    return 'other';
  }
}

function isJCSS() {
  var type = containerType();
  return type === 'JCSS';
}

function isAlipay() {
  var type = containerType();
  return type === 'alipay';
}

function isAlipayMini() {
  var type = containerType();
  return type === 'alipayMini';
}

function isDtdreamApp() {
  var type = containerType();
  return type === 'dtdream';
}

function isHanApp() {
  var type = containerType();
  return type === 'hanweb';
}

function isEshiminApp() {
  var type = containerType();
  return type === 'eshimin';
}

function isIflytek() {
  var type = containerType();
  return type === 'iflytek';
}

function isDingtalkMini() {
  var type = containerType();
  return type === 'dingtalkMini';
}

function isDingtalk() {
  var type = containerType();
  return type === 'dingtalk';
}

function isReactNative() {
  var type = containerType();
  log('current env', 'react native');
  return type === 'reactNative';
}

/* harmony default export */ __webpack_exports__["default"] = ({
  isJCSS: isJCSS,
  isAlipay: isAlipay,
  isAlipayMini: isAlipayMini,
  isDtdreamApp: isDtdreamApp,
  isHanApp: isHanApp,
  isEshiminApp: isEshiminApp,
  isIflytek: isIflytek,
  isDingtalkMini: isDingtalkMini,
  isDingtalk: isDingtalk,
  isReactNative: isReactNative
});

/***/ }),

/***/ "./node_modules/@aligov/jssdk-utils/es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@aligov/jssdk-utils/es/index.js ***!
  \******************************************************/
/*! exports provided: md5, token, stringifyQS, logger, webViewEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md5 */ "./node_modules/@aligov/jssdk-utils/es/md5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "md5", function() { return _md5__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ "./node_modules/@aligov/jssdk-utils/es/token.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "token", function() { return _token__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "./node_modules/@aligov/jssdk-utils/es/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyQS", function() { return _query__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./node_modules/@aligov/jssdk-utils/es/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env */ "./node_modules/@aligov/jssdk-utils/es/env.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webViewEnv", function() { return _env__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./node_modules/@aligov/jssdk-utils/es/logger.js":
/*!*******************************************************!*\
  !*** ./node_modules/@aligov/jssdk-utils/es/logger.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function output(_LEVEL_, _MODULE_) {
  var _console;

  for (var _len = arguments.length, arg = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    arg[_key - 2] = arguments[_key];
  }

  (_console = console).log.apply(_console, ["[" + _MODULE_ + " " + _LEVEL_ + "]: "].concat(arg));
}

function noput() {}

window.localStorage.setItem('jssdk_log_level', 'debug');
var levelArr = ['error', 'warning', 'log', 'debug'];

function level() {
  var l = window.localStorage.getItem('jssdk_log_level') || 'error';
  return levelArr.indexOf(l);
} // eslint-disable-next-line import/no-mutable-exports


var debug = noput; // eslint-disable-next-line import/no-mutable-exports

var error = noput; // eslint-disable-next-line import/no-mutable-exports

var log = noput; // eslint-disable-next-line import/no-mutable-exports

var warning = noput;

if (level() >= 3) {
  debug = function (_MODULE_) {
    for (var _len2 = arguments.length, arg = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      arg[_key2 - 1] = arguments[_key2];
    }

    output.apply(void 0, ['DEBUG', _MODULE_].concat(arg));
  };
}

if (level() >= 2) {
  log = function (_MODULE_) {
    for (var _len3 = arguments.length, arg = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      arg[_key3 - 1] = arguments[_key3];
    }

    output.apply(void 0, ['LOG', _MODULE_].concat(arg));
  };
}

if (level() >= 1) {
  warning = function (_MODULE_) {
    for (var _len4 = arguments.length, arg = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      arg[_key4 - 1] = arguments[_key4];
    }

    output.apply(void 0, ['WARNING', _MODULE_].concat(arg));
  };
}

if (level() >= 0) {
  error = function (_MODULE_) {
    for (var _len5 = arguments.length, arg = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      arg[_key5 - 1] = arguments[_key5];
    }

    output.apply(void 0, ['ERROR', _MODULE_].concat(arg));
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  debug: debug,
  log: log,
  warning: warning,
  error: error
});

/***/ }),

/***/ "./node_modules/@aligov/jssdk-utils/es/md5.js":
/*!****************************************************!*\
  !*** ./node_modules/@aligov/jssdk-utils/es/md5.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return md5; });
function md5(string) {
  function rotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  }

  function addUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);

    if (lX4 & lY4) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }

    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }

  function f(x, y, z) {
    return x & y | ~x & z;
  }

  function g(x, y, z) {
    return x & z | y & ~z;
  }

  function h(x, y, z) {
    return x ^ y ^ z;
  }

  function i(x, y, z) {
    return y ^ (x | ~z);
  }

  function FF(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(f(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }

  function GG(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(g(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }

  function HH(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(h(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }

  function II(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(i(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }

  function convertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords = ((lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64 + 1) * 16;
    var lWordArray = new Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;

    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }

    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }

  function wordToHex(lValue) {
    var WordToHexValue = '',
        WordToHexValue_temp = '',
        lByte,
        lCount;

    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValue_temp = '0' + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }

    return WordToHexValue;
  }

  function utf8Encode(string) {
    string = string.replace(/\r\n/g, '\n');
    var utftext = '';

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  }

  var x = [],
      k,
      AA,
      BB,
      CC,
      DD,
      a,
      b,
      c,
      d,
      S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22,
      S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20,
      S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23,
      S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
  string = utf8Encode(string);
  x = convertToWordArray(string);
  a = 0x67452301;
  b = 0xefcdab89;
  c = 0x98badcfe;
  d = 0x10325476;

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
    b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
    a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
    c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
    c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
    a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
    a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
    a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
    a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
    c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
    c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
    b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
    c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
    d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
    c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
    a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
    d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
    b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
    a = addUnsigned(a, AA);
    b = addUnsigned(b, BB);
    c = addUnsigned(c, CC);
    d = addUnsigned(d, DD);
  }

  var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
  return temp.toLowerCase();
}

/***/ }),

/***/ "./node_modules/@aligov/jssdk-utils/es/query.js":
/*!******************************************************!*\
  !*** ./node_modules/@aligov/jssdk-utils/es/query.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stringifyQS; });
function stringifyQS(qs, isEncode) {
  if (isEncode === void 0) {
    isEncode = true;
  }

  var str = [];

  for (var key in qs) {
    if (isEncode) {
      str.push(key + '=' + encodeURIComponent(qs[key]));
    } else {
      console.log(key, qs[key]);
      str.push(key + '=' + qs[key]);
    }
  }

  return str.join('&');
}

/***/ }),

/***/ "./node_modules/@aligov/jssdk-utils/es/token.js":
/*!******************************************************!*\
  !*** ./node_modules/@aligov/jssdk-utils/es/token.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);


function getTokenFromCookie(name) {
  var temp = '';
  var tokenKey = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(name) || '';

  if (tokenKey) {
    temp = tokenKey.split('_')[0] || '';
  }

  return temp;
}

function getTimeStamp() {
  return new Date().getTime();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getTokenFromCookie: getTokenFromCookie,
  getTimeStamp: getTimeStamp
});

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/index.js":
/*!***********************************************!*\
  !*** ./node_modules/axios-jsonp-pro/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios-jsonp-pro/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/adapters/xhr.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/adapters/xhr.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios-jsonp-pro/lib/core/settle.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios-jsonp-pro/lib/helpers/buildURL.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios-jsonp-pro/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios-jsonp-pro/lib/helpers/isURLSameOrigin.js");

var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios-jsonp-pro/lib/core/createError.js");

var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios-jsonp-pro/lib/helpers/btoa.js");

module.exports = function (config) {
  return new Promise(function (resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false; // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.

    if ( true && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;

      request.onprogress = function () {};

      request.ontimeout = function () {};
    } // HTTP basic authentication


    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request[loadEvent] = function () {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function () {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function () {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios-jsonp-pro/lib/helpers/cookies.js"); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function (val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (config.withCredentials) {
      request.withCredentials = true;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function (cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/axios.js":
/*!***************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/axios.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios-jsonp-pro/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios-jsonp-pro/lib/core/Axios.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios-jsonp-pro/lib/defaults.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function (instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios-jsonp-pro/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios-jsonp-pro/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios-jsonp-pro/lib/cancel/isCancel.js"); // Expose all/spread

axios.all = function (promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios-jsonp-pro/lib/helpers/spread.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports.default = axios;

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/cancel/Cancel.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/cancel/Cancel.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function () {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/cancel/CancelToken.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/cancel/CancelToken.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios-jsonp-pro/lib/cancel/Cancel.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function (resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function (message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function () {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function () {
  var cancel;
  var token = new CancelToken(function (c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/cancel/isCancel.js":
/*!*************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/cancel/isCancel.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/core/Axios.js":
/*!********************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/core/Axios.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios-jsonp-pro/lib/defaults.js");

var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios-jsonp-pro/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios-jsonp-pro/lib/core/dispatchRequest.js");
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function (config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, {
    method: 'get'
  }, config);
  config.method = config.method.toLowerCase(); // Hook up interceptors middleware

  var chain = [undefined]; //   var chain = [dispatchRequest, undefined];

  var promise = Promise.resolve(config);
  chain.unshift(dispatchRequest);
  this.interceptors.request.forEach(function (interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function (interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options', 'jsonp'], function (method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function (method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
}); // add jsonp
// Axios.prototype.jsonp = jsonp;

module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/core/InterceptorManager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/core/InterceptorManager.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function (fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function (id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function (fn) {
  utils.forEach(this.handlers, function (h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/core/createError.js":
/*!**************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/core/createError.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios-jsonp-pro/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function (message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/core/dispatchRequest.js":
/*!******************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/core/dispatchRequest.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios-jsonp-pro/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios-jsonp-pro/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios-jsonp-pro/lib/defaults.js");

var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios-jsonp-pro/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios-jsonp-pro/lib/helpers/combineURLs.js");

var jsonp = __webpack_require__(/*! ./jsonp */ "./node_modules/axios-jsonp-pro/lib/core/jsonp.js");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function (config) {
  throwIfCancellationRequested(config); // Support baseURL config

  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  } // Ensure headers exist


  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;

  if (config.method === 'jsonp') {
    return jsonp(config);
  }

  return adapter(config).then(function (response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function (reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/core/enhanceError.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/core/enhanceError.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function (error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  return error;
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/core/jsonp.js":
/*!********************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/core/jsonp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios-jsonp-pro/lib/helpers/buildURL.js");
/**
 * Callback index.
 */


var count = 0;
/**
 * Noop function.
 */

function noop() {}
/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 */


function jsonp(opts) {
  var prefix = opts.prefix || "__jp";
  var callbackName = opts.callback || "callback"; // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.

  var id = opts.name || prefix + count++;
  var timeout = opts.timeout || 60000;
  var cacheFlag = opts.cache || false;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName("script")[0] || document.head;
  var script;
  var timer;

  function cleanup() {
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  if (!opts.url) {
    throw new TypeError("url is null or not defined");
  }

  return new Promise(function (resolve, reject) {
    try {
      if (timeout) {
        timer = setTimeout(function () {
          cleanup();
          reject(new Error("Request timed out"));
        }, timeout);
      }

      window[id] = function (data) {
        cleanup(); //Throws a `Cancel` if cancellation has been requested.

        if (opts.cancelToken) {
          opts.cancelToken.throwIfRequested();
        }

        resolve(data);
      }; // add params


      opts.url = buildURL(opts.url, opts.params, opts.paramsSerializer); // add callback

      opts.url += (opts.url.indexOf("?") === -1 ? "?" : "&") + callbackName + "=" + enc(id); // cache

      !cacheFlag && (opts.url += "&_=" + new Date().getTime()); // create script

      script = document.createElement("script");
      script.src = opts.url;
      target.parentNode.insertBefore(script, target);
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = jsonp;

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/core/settle.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/core/settle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios-jsonp-pro/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function (resolve, reject, response) {
  var validateStatus = response.config.validateStatus; // Note: status is not exposed by XDomainRequest

  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/core/transformData.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/core/transformData.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function (data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function (fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/defaults.js":
/*!******************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/defaults.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios-jsonp-pro/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios-jsonp-pro/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios-jsonp-pro/lib/adapters/xhr.js");
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function (data, headers) {
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function (data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function (method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function (method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/helpers/bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/helpers/bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn, thisArg) {
  return function () {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/helpers/btoa.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/helpers/btoa.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}

E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';

  for ( // initialize result and counter
  var block, charCode, idx = 0, map = chars; // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1); // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);

    if (charCode > 0xFF) {
      throw new E();
    }

    block = block << 8 | charCode;
  }

  return output;
}

module.exports = btoa;

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/helpers/buildURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/helpers/buildURL.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function (url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function (val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function (v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/helpers/combineURLs.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/helpers/combineURLs.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function (baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/helpers/cookies.js":
/*!*************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/helpers/cookies.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function () {
  return {
    write: function (name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function (name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function (name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function () {
  return {
    write: function () {},
    read: function () {
      return null;
    },
    remove: function () {}
  };
}();

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/helpers/isAbsoluteURL.js":
/*!*******************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/helpers/isAbsoluteURL.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function (url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/helpers/isURLSameOrigin.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/helpers/isURLSameOrigin.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function () {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function (requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function () {
  return function () {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/helpers/normalizeHeaderName.js":
/*!*************************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/helpers/normalizeHeaderName.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios-jsonp-pro/lib/utils.js");

module.exports = function (headers, normalizedName) {
  utils.forEach(headers, function (value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/helpers/parseHeaders.js":
/*!******************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/helpers/parseHeaders.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios-jsonp-pro/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function (headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function (line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/helpers/spread.js":
/*!************************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/helpers/spread.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function (callback) {
  return function (arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios-jsonp-pro/lib/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/axios-jsonp-pro/lib/utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios-jsonp-pro/lib/helpers/bind.js");

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function (val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
} // For Node v0.10 support. Remove this eventually.


function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
  var registeredInModuleLoader;

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    registeredInModuleLoader = true;
  }

  if (true) {
    module.exports = factory();
    registeredInModuleLoader = true;
  }

  if (!registeredInModuleLoader) {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();

    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
})(function () {
  function extend() {
    var i = 0;
    var result = {};

    for (; i < arguments.length; i++) {
      var attributes = arguments[i];

      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }

    return result;
  }

  function decode(s) {
    return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }

  function init(converter) {
    function api() {}

    function set(key, value, attributes) {
      if (typeof document === 'undefined') {
        return;
      }

      attributes = extend({
        path: '/'
      }, api.defaults, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
      } // We're using "expires" because "max-age" is not supported by IE


      attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

      try {
        var result = JSON.stringify(value);

        if (/^[\{\[]/.test(result)) {
          value = result;
        }
      } catch (e) {}

      value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
      key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
      var stringifiedAttributes = '';

      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue;
        } // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...


        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return document.cookie = key + '=' + value + stringifiedAttributes;
    }

    function get(key, json) {
      if (typeof document === 'undefined') {
        return;
      }

      var jar = {}; // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.

      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var i = 0;

      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');

        if (!json && cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          var name = decode(parts[0]);
          cookie = (converter.read || converter)(cookie, name) || decode(cookie);

          if (json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }

          jar[name] = cookie;

          if (key === name) {
            break;
          }
        } catch (e) {}
      }

      return key ? jar[key] : jar;
    }

    api.set = set;

    api.get = function (key) {
      return get(key, false
      /* read as raw */
      );
    };

    api.getJSON = function (key) {
      return get(key, true
      /* read as json */
      );
    };

    api.remove = function (key, attributes) {
      set(key, '', extend(attributes, {
        expires: -1
      }));
    };

    api.defaults = {};
    api.withConverter = init;
    return api;
  }

  return init(function () {});
});

/***/ }),

/***/ "./node_modules/rax-embed/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rax-embed/es/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "./node_modules/rax/index.js");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
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


var isWeChatMiniProgram = false;
var isMiniApp = false;
var isWeb = true;
var isWeex = false;

function isWeexUrl(url) {
  return /(_wx_tpl=[^\s&]|wh_weex=true)/.test(url);
}

function genFixedUrl(props) {
  // handle android ios
  var fixedUrl = props.src;
  var prefix = fixedUrl.indexOf('?') >= 0 ? '&' : '?';

  if (typeof props.urlParam == 'string') {
    fixedUrl += prefix + props.urlParam;
  } else {
    var paramsStrArr = [];
    var assignUrlParam = Object.assign({}, props.urlParam, props.defaultUrlParam);

    for (var k in assignUrlParam) {
      paramsStrArr.push(k + '=' + assignUrlParam[k]);
    }

    fixedUrl += prefix + paramsStrArr.join('&');
  }

  return fixedUrl;
}

var defaultProps = {
  defaultUrlParam: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    _page_inside_embed_: 'true',
    // eslint-disable-next-line @typescript-eslint/camelcase
    _page_home_isweex_: isWeex,
    useIframeInWeb: false
  },
  urlParam: {},
  src: ''
};

var Embed = function (props) {
  props = _extends({}, defaultProps, props);
  var _props = props,
      useIframeInWeb = _props.useIframeInWeb;
  var url = genFixedUrl(props);

  if (useIframeInWeb && isWeb) {
    return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("iframe", _extends({}, props, {
      type: '',
      itemId: 1,
      src: url,
      style: _extends({}, {
        borderWidth: 0
      }, props.style, {
        visibility: 'visible'
      })
    }));
  }

  return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("embed", _extends({}, props, {
    type: '',
    itemId: 1,
    src: url,
    style: _extends({}, props.style, {
      visibility: 'visible'
    })
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Embed);

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function (method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : "suspendedYield";

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ })

}]);
//# sourceMappingURL=vendor~pages_Home_index.chunk.js.map