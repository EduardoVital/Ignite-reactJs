webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/components/Comments/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Comments/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Comments; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/eduardo/Desktop/WorkSpace Ubuntu/Web/Web Developer/RocketSeat/Desafios/desafio-ignite-react-chapter3/src/components/Comments/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable @typescript-eslint/explicit-function-return-type */\n\n/* eslint-disable @typescript-eslint/explicit-module-boundary-types */\n\n\nvar Comments = /*#__PURE__*/function (_Component) {\n  Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Comments, _Component);\n\n  var _super = _createSuper(Comments);\n\n  function Comments() {\n    Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Comments);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Comments, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var script = document.createElement('script');\n      var anchor = document.getElementById('inject-comments-for-uterances');\n      script.setAttribute('src', 'https://utteranc.es/client.js');\n      script.setAttribute('crossorigin', 'anonymous');\n      script.setAttribute('async', 'true');\n      script.setAttribute('repo', 'EduardoVital/desafio-ignite-react-chapter3');\n      script.setAttribute('issue-term', 'pathname');\n      script.setAttribute('theme', 'github-dark');\n      anchor.appendChild(script);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"inject-comments-for-uterances\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 12\n      }, this);\n    }\n  }]);\n\n  return Comments;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tbWVudHMvaW5kZXgudHN4PzdjYzIiXSwibmFtZXMiOlsiQ29tbWVudHMiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhbmNob3IiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0E7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7O3dDQUNDO0FBQ2xCLFVBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxVQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QiwrQkFBeEIsQ0FBZjtBQUNBSixZQUFNLENBQUNLLFlBQVAsQ0FBb0IsS0FBcEIsRUFBMkIsK0JBQTNCO0FBQ0FMLFlBQU0sQ0FBQ0ssWUFBUCxDQUFvQixhQUFwQixFQUFtQyxXQUFuQztBQUNBTCxZQUFNLENBQUNLLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsTUFBN0I7QUFDQUwsWUFBTSxDQUFDSyxZQUFQLENBQW9CLE1BQXBCLEVBQTRCLDRDQUE1QjtBQUNBTCxZQUFNLENBQUNLLFlBQVAsQ0FBb0IsWUFBcEIsRUFBa0MsVUFBbEM7QUFDQUwsWUFBTSxDQUFDSyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLGFBQTdCO0FBQ0FGLFlBQU0sQ0FBQ0csV0FBUCxDQUFtQk4sTUFBbkI7QUFDRDs7OzZCQUVRO0FBQ1AsMEJBQU87QUFBSyxVQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRDs7OztFQWZtQ08sK0MiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21tZW50cy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmplY3QtY29tbWVudHMtZm9yLXV0ZXJhbmNlcycpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL3V0dGVyYW5jLmVzL2NsaWVudC5qcycpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJywgJ2Fub255bW91cycpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2FzeW5jJywgJ3RydWUnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdyZXBvJywgJ0VkdWFyZG9WaXRhbC9kZXNhZmlvLWlnbml0ZS1yZWFjdC1jaGFwdGVyMycpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2lzc3VlLXRlcm0nLCAncGF0aG5hbWUnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCd0aGVtZScsICdnaXRodWItZGFyaycpO1xuICAgIGFuY2hvci5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGlkPVwiaW5qZWN0LWNvbW1lbnRzLWZvci11dGVyYW5jZXNcIiAvPjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Comments/index.tsx\n");

/***/ })

})