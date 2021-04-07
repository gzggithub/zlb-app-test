webpackHotUpdate("pages_Home_index.chunk",{

/***/ "./src/pages/Home/index.css":
/*!**********************************!*\
  !*** ./src/pages/Home/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1617757207909
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "./node_modules/rax/index.js");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aligov_jssdk_mgop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aligov/jssdk-mgop */ "./node_modules/@aligov/jssdk-mgop/es/index.js");
/* harmony import */ var rax_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rax-view */ "./node_modules/rax-view/lib/index.js");
/* harmony import */ var rax_view__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rax_view__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rax_embed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rax-embed */ "./node_modules/rax-embed/es/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/pages/Home/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);





function Home() {
  console.log(window.location.href);
  console.log(window.innerHeight); // const src = 'https://taobao.com'
  // const src = 'https://www.yrwcc.cn/ajspx'
  // const src = 'https://www.baidu.com/'
  // const src = 'http://192.168.0.248:8895/'
  // 通过iframe获取子页面的title 同步H5的标题
  // componentDidMount() {
  //   var mainFrame= document.getElementById('main-frame');
  //   console.log(mainFrame, 'ggg')
  //   console.log(document.title, 'document.title')
  //   // document.title = mainFrame.contentWindow.document.title; // iframe中子页面的title
  //   document.title = 'test RAX app'; // iframe中子页面的title
  // }

  var env = window.navigator.userAgent.toLowerCase();
  console.log(env); // 支付宝入口
  // 登陆地址：https://puser.zjzwfw.gov.cn/sso/alipay.do?action=ssoLogin&servicecode=【接入代码】&goto=【附带跳转地址，以sp参数返回】

  var src = 'https://gkt.kingyi.net/xihuszgk/login.jspx'; // APP入口
  // 登录地址：https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=【接入代码】&goto=【附带跳转地址，以sp参数返回】

  // APP入口
  src = "https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=&goto=https://www.yrwcc.cn/ajspx"; // 如何判断是否是支付宝入口还是浙里办app入口

  return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_view__WEBPACK_IMPORTED_MODULE_2___default.a, null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_embed__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "main-frame",
    urlParam: {
      paramOne: 123,
      paramTwo: 456
    },
    src: src,
    useIframeInWeb: true,
    style: {
      height: window.innerHeight + 'px',
      width: '100%'
    }
  }));
}

/***/ }),

/***/ "?1001":
false

})
//# sourceMappingURL=pages_Home_index.chunk.1a8d244308f23a12ff44.hot-update.js.map