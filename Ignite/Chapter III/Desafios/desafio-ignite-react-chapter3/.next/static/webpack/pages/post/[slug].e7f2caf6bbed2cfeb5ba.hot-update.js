webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/components/Comments/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Comments/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Comments; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/eduardo/Desktop/WorkSpace Ubuntu/Web/Web Developer/RocketSeat/Desafios/desafio-ignite-react-chapter3/src/components/Comments/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Comments = /*#__PURE__*/function (_Component) {\n  Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Comments, _Component);\n\n  var _super = _createSuper(Comments);\n\n  function Comments() {\n    Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Comments);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Comments, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var script = document.createElement('script');\n      var anchor = document.getElementById('inject-comments-for-uterances');\n      script.setAttribute('src', 'https://utteranc.es/client.js');\n      script.setAttribute('crossorigin', 'anonymous');\n      script.setAttribute('async', true);\n      script.setAttribute('repo', '[ENTER REPO HERE]');\n      script.setAttribute('issue-term', 'pathname');\n      script.setAttribute('theme', 'github-light');\n      anchor.appendChild(script);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"inject-comments-for-uterances\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 12\n      }, this);\n    }\n  }]);\n\n  return Comments;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tbWVudHMvaW5kZXgudHN4PzdjYzIiXSwibmFtZXMiOlsiQ29tbWVudHMiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhbmNob3IiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozt3Q0FDQztBQUNsQixVQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsVUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsK0JBQXhCLENBQWY7QUFDQUosWUFBTSxDQUFDSyxZQUFQLENBQW9CLEtBQXBCLEVBQTJCLCtCQUEzQjtBQUNBTCxZQUFNLENBQUNLLFlBQVAsQ0FBb0IsYUFBcEIsRUFBbUMsV0FBbkM7QUFDQUwsWUFBTSxDQUFDSyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLElBQTdCO0FBQ0FMLFlBQU0sQ0FBQ0ssWUFBUCxDQUFvQixNQUFwQixFQUE0QixtQkFBNUI7QUFDQUwsWUFBTSxDQUFDSyxZQUFQLENBQW9CLFlBQXBCLEVBQWtDLFVBQWxDO0FBQ0FMLFlBQU0sQ0FBQ0ssWUFBUCxDQUFvQixPQUFwQixFQUE2QixjQUE3QjtBQUNBRixZQUFNLENBQUNHLFdBQVAsQ0FBbUJOLE1BQW5CO0FBQ0Q7Ozs2QkFFUTtBQUNQLDBCQUFPO0FBQUssVUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0Q7Ozs7RUFmbUNPLCtDIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ29tbWVudHMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5qZWN0LWNvbW1lbnRzLWZvci11dGVyYW5jZXMnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly91dHRlcmFuYy5lcy9jbGllbnQuanMnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdhc3luYycsIHRydWUpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3JlcG8nLCAnW0VOVEVSIFJFUE8gSEVSRV0nKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdpc3N1ZS10ZXJtJywgJ3BhdGhuYW1lJyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndGhlbWUnLCAnZ2l0aHViLWxpZ2h0Jyk7XG4gICAgYW5jaG9yLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJpbmplY3QtY29tbWVudHMtZm9yLXV0ZXJhbmNlc1wiIC8+O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Comments/index.tsx\n");

/***/ })

})