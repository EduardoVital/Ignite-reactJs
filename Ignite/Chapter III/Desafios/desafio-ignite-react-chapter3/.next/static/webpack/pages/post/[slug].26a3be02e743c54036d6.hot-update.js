webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/components/Comments/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Comments/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Comments; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/eduardo/Desktop/WorkSpace Ubuntu/Web/Web Developer/RocketSeat/Desafios/desafio-ignite-react-chapter3/src/components/Comments/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/* eslint-disable @typescript-eslint/explicit-function-return-type */\n\n/* eslint-disable @typescript-eslint/explicit-module-boundary-types */\n\n\nvar Comments = /*#__PURE__*/function (_Component) {\n  Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Comments, _Component);\n\n  var _super = _createSuper(Comments);\n\n  function Comments() {\n    Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Comments);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_home_eduardo_Desktop_WorkSpace_Ubuntu_Web_Web_Developer_RocketSeat_Desafios_desafio_ignite_react_chapter3_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Comments, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var script = document.createElement('script');\n      var anchor = document.getElementById('inject-comments-for-uterances');\n      script.setAttribute('src', 'https://utteranc.es/client.js');\n      script.setAttribute('crossorigin', 'anonymous');\n      script.setAttribute('async', 'true');\n      script.setAttribute('repo', '[ENTER REPO HERE]');\n      script.setAttribute('issue-term', 'pathname');\n      script.setAttribute('theme', 'github-light');\n      anchor.appendChild(script);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"inject-comments-for-uterances\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 12\n      }, this);\n    }\n  }]);\n\n  return Comments;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tbWVudHMvaW5kZXgudHN4PzdjYzIiXSwibmFtZXMiOlsiQ29tbWVudHMiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhbmNob3IiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7O3dDQUNDO0FBQ2xCLFVBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxVQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QiwrQkFBeEIsQ0FBZjtBQUNBSixZQUFNLENBQUNLLFlBQVAsQ0FBb0IsS0FBcEIsRUFBMkIsK0JBQTNCO0FBQ0FMLFlBQU0sQ0FBQ0ssWUFBUCxDQUFvQixhQUFwQixFQUFtQyxXQUFuQztBQUNBTCxZQUFNLENBQUNLLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsTUFBN0I7QUFDQUwsWUFBTSxDQUFDSyxZQUFQLENBQW9CLE1BQXBCLEVBQTRCLG1CQUE1QjtBQUNBTCxZQUFNLENBQUNLLFlBQVAsQ0FBb0IsWUFBcEIsRUFBa0MsVUFBbEM7QUFDQUwsWUFBTSxDQUFDSyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLGNBQTdCO0FBQ0FGLFlBQU0sQ0FBQ0csV0FBUCxDQUFtQk4sTUFBbkI7QUFDRDs7OzZCQUVRO0FBQ1AsMEJBQU87QUFBSyxVQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRDs7OztFQWZtQ08sK0MiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21tZW50cy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luamVjdC1jb21tZW50cy1mb3ItdXRlcmFuY2VzJyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vdXR0ZXJhbmMuZXMvY2xpZW50LmpzJyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnYXN5bmMnLCAndHJ1ZScpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3JlcG8nLCAnW0VOVEVSIFJFUE8gSEVSRV0nKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdpc3N1ZS10ZXJtJywgJ3BhdGhuYW1lJyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndGhlbWUnLCAnZ2l0aHViLWxpZ2h0Jyk7XG4gICAgYW5jaG9yLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJpbmplY3QtY29tbWVudHMtZm9yLXV0ZXJhbmNlc1wiIC8+O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Comments/index.tsx\n");

/***/ })

})