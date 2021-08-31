webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/pages/post/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/post/[slug].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-dom */ \"./node_modules/prismic-dom/dist/prismic-dom.min.js\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/common.module.scss */ \"./src/styles/common.module.scss\");\n/* harmony import */ var _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_common_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/post/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Comments */ \"./src/components/Comments/index.tsx\");\n\n\n\nvar _jsxFileName = \"/home/eduardo/Desktop/WorkSpace Ubuntu/Web/Web Developer/RocketSeat/Desafios/desafio-ignite-react-chapter3/src/pages/post/[slug].tsx\",\n    _s = $RefreshSig$();\n\n/* eslint-disable no-return-assign */\n\n/* eslint-disable no-param-reassign */\n\n/* eslint-disable react/no-danger */\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  _s();\n\n  var _this = this;\n\n  var post = _ref.post,\n      navigation = _ref.navigation,\n      preview = _ref.preview;\n  var totalWords = post.data.content.reduce(function (total, contentItem) {\n    total += contentItem.heading.split(' ').length;\n    var words = contentItem.body.map(function (item) {\n      return item.text.split(' ').length;\n    });\n    words.map(function (word) {\n      return total += word;\n    });\n    return total;\n  }, 0);\n  var readTime = Math.ceil(totalWords / 200);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  if (router.isFallback) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Carregando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 12\n    }, this);\n  }\n\n  var formatedDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(new Date(post.first_publication_date), 'dd MMM yyyy', {\n    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_3__[\"ptBR\"]\n  });\n  var isPostEdited = post.first_publication_date !== post.last_publication_date;\n  var postEdited;\n\n  if (isPostEdited) {\n    postEdited = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(new Date(post.last_publication_date), \"'* editado em' dd MMM yyyy', às' H':'m\", {\n      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_3__[\"ptBR\"]\n    });\n  }\n\n  console.log(navigation.prevPost);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"\".concat(post.data.title, \" | spacetraveling\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: post.data.banner.url,\n      alt: \"banner\",\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.banner\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.content,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n          className: _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.posts,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: post.data.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.infos,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__[\"FiCalendar\"], {\n                size: 20\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: formatedDate\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 115,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__[\"FiUser\"], {\n                size: 20\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: post.data.author\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__[\"FiClock\"], {\n                size: 20\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 122,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: \"\".concat(readTime, \" min\")\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 123,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _post_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.postEdited,\n            children: isPostEdited && postEdited\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n          className: _post_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.content,\n          children: post.data.content.map(function (content) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n              className: _post_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.headerContent,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                children: content.heading\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 132,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                dangerouslySetInnerHTML: {\n                  __html: prismic_dom__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].asHtml(content.body)\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 133,\n                columnNumber: 17\n              }, _this)]\n            }, content.heading, true, {\n              fileName: _jsxFileName,\n              lineNumber: 131,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"\".concat(_post_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.navigation, \" \").concat(_styles_common_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container),\n        children: [(navigation === null || navigation === void 0 ? void 0 : navigation.prevPost.length) > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: navigation.prevPost[0].data.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 146,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: \"/post/\".concat(navigation.prevPost[0].uid),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              children: \"Post anterior\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 148,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 13\n        }, this), (navigation === null || navigation === void 0 ? void 0 : navigation.nextPost.length) > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: navigation.nextPost[0].data.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: \"/post/\".concat(navigation.nextPost[0].uid),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              children: \"Pr\\xF3ximo post\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 157,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 156,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Comments__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 9\n      }, this), preview && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/api/exit-preview\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.preview,\n            children: \"Sair do modo Preview\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 168,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD80NjczIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwibmF2aWdhdGlvbiIsInByZXZpZXciLCJ0b3RhbFdvcmRzIiwiZGF0YSIsImNvbnRlbnQiLCJyZWR1Y2UiLCJ0b3RhbCIsImNvbnRlbnRJdGVtIiwiaGVhZGluZyIsInNwbGl0IiwibGVuZ3RoIiwid29yZHMiLCJib2R5IiwibWFwIiwiaXRlbSIsInRleHQiLCJ3b3JkIiwicmVhZFRpbWUiLCJNYXRoIiwiY2VpbCIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJmb3JtYXRlZERhdGUiLCJmb3JtYXQiLCJEYXRlIiwiZmlyc3RfcHVibGljYXRpb25fZGF0ZSIsImxvY2FsZSIsInB0QlIiLCJpc1Bvc3RFZGl0ZWQiLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJwb3N0RWRpdGVkIiwiY29uc29sZSIsImxvZyIsInByZXZQb3N0IiwidGl0bGUiLCJiYW5uZXIiLCJ1cmwiLCJzdHlsZXMiLCJjb21tb25TdHlsZXMiLCJjb250YWluZXIiLCJwb3N0cyIsImluZm9zIiwiYXV0aG9yIiwiaGVhZGVyQ29udGVudCIsIl9faHRtbCIsIlJpY2hUZXh0IiwiYXNIdG1sIiwidWlkIiwibmV4dFBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBdUNlLFNBQVNBLElBQVQsT0FJWTtBQUFBOztBQUFBOztBQUFBLE1BSHpCQyxJQUd5QixRQUh6QkEsSUFHeUI7QUFBQSxNQUZ6QkMsVUFFeUIsUUFGekJBLFVBRXlCO0FBQUEsTUFEekJDLE9BQ3lCLFFBRHpCQSxPQUN5QjtBQUN6QixNQUFNQyxVQUFVLEdBQUdILElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxPQUFWLENBQWtCQyxN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QyxPQUFPLGlCQUNOO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsbUJBQVg7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUVzQyxpRUFBWSxDQUFDdEMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBLGtCQURGO0FBMEVEOztHQXRIdUJILEk7VUFjUHVCLHFEOzs7S0FkT3ZCLEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdC9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gJ3ByaXNtaWMtZG9tJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IHB0QlIgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuXG5pbXBvcnQgeyBGaUNhbGVuZGFyLCBGaVVzZXIsIEZpQ2xvY2sgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5pbXBvcnQgUHJpc21pYyBmcm9tICdAcHJpc21pY2lvL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcmlzbWljJztcblxuaW1wb3J0IGNvbW1vblN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvY29tbW9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3N0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBDb21tZW50cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnRzJztcblxuaW50ZXJmYWNlIFBvc3Qge1xuICBmaXJzdF9wdWJsaWNhdGlvbl9kYXRlOiBzdHJpbmcgfCBudWxsO1xuICBsYXN0X3B1YmxpY2F0aW9uX2RhdGU6IHN0cmluZyB8IG51bGw7XG4gIGRhdGE6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGJhbm5lcjoge1xuICAgICAgdXJsOiBzdHJpbmc7XG4gICAgfTtcbiAgICBhdXRob3I6IHN0cmluZztcbiAgICBjb250ZW50OiB7XG4gICAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgICBib2R5OiB7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIH1bXTtcbiAgICB9W107XG4gIH07XG59XG5cbmludGVyZmFjZSBQb3N0UHJvcHMge1xuICBwb3N0OiBQb3N0O1xuICBuYXZpZ2F0aW9uOiB7XG4gICAgcHJldlBvc3Q6IHtcbiAgICAgIHVpZDogc3RyaW5nO1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9W107XG4gICAgbmV4dFBvc3Q6IHtcbiAgICAgIHVpZDogc3RyaW5nO1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9W107XG4gIH07XG4gIHByZXZpZXc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe1xuICBwb3N0LFxuICBuYXZpZ2F0aW9uLFxuICBwcmV2aWV3LFxufTogUG9zdFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB0b3RhbFdvcmRzID0gcG9zdC5kYXRhLmNvbnRlbnQucmVkdWNlKCh0b3RhbCwgY29udGVudEl0ZW0pID0+IHtcbiAgICB0b3RhbCArPSBjb250ZW50SXRlbS5oZWFkaW5nLnNwbGl0KCcgJykubGVuZ3RoO1xuXG4gICAgY29uc3Qgd29yZHMgPSBjb250ZW50SXRlbS5ib2R5Lm1hcChpdGVtID0+IGl0ZW0udGV4dC5zcGxpdCgnICcpLmxlbmd0aCk7XG4gICAgd29yZHMubWFwKHdvcmQgPT4gKHRvdGFsICs9IHdvcmQpKTtcbiAgICByZXR1cm4gdG90YWw7XG4gIH0sIDApO1xuICBjb25zdCByZWFkVGltZSA9IE1hdGguY2VpbCh0b3RhbFdvcmRzIC8gMjAwKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcbiAgICByZXR1cm4gPGgxPkNhcnJlZ2FuZG8uLi48L2gxPjtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdGVkRGF0ZSA9IGZvcm1hdChcbiAgICBuZXcgRGF0ZShwb3N0LmZpcnN0X3B1YmxpY2F0aW9uX2RhdGUpLFxuICAgICdkZCBNTU0geXl5eScsXG4gICAge1xuICAgICAgbG9jYWxlOiBwdEJSLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBpc1Bvc3RFZGl0ZWQgPVxuICAgIHBvc3QuZmlyc3RfcHVibGljYXRpb25fZGF0ZSAhPT0gcG9zdC5sYXN0X3B1YmxpY2F0aW9uX2RhdGU7XG5cbiAgbGV0IHBvc3RFZGl0ZWQ7XG4gIGlmIChpc1Bvc3RFZGl0ZWQpIHtcbiAgICBwb3N0RWRpdGVkID0gZm9ybWF0KFxuICAgICAgbmV3IERhdGUocG9zdC5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLFxuICAgICAgXCInKiBlZGl0YWRvIGVtJyBkZCBNTU0geXl5eScsIMOgcycgSCc6J21cIixcbiAgICAgIHtcbiAgICAgICAgbG9jYWxlOiBwdEJSLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhuYXZpZ2F0aW9uLnByZXZQb3N0KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgJHtwb3N0LmRhdGEudGl0bGV9IHwgc3BhY2V0cmF2ZWxpbmdgfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxpbWcgc3JjPXtwb3N0LmRhdGEuYmFubmVyLnVybH0gYWx0PVwiYmFubmVyXCIgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vblN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjb21tb25TdHlsZXMucG9zdHN9PlxuICAgICAgICAgICAgPGgxPntwb3N0LmRhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21tb25TdHlsZXMuaW5mb3N9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGaUNhbGVuZGFyIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICAgIDxwPntmb3JtYXRlZERhdGV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RmlVc2VyIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICAgIDxwPntwb3N0LmRhdGEuYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEZpQ2xvY2sgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgICAgPHA+e2Ake3JlYWRUaW1lfSBtaW5gfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RFZGl0ZWR9Pntpc1Bvc3RFZGl0ZWQgJiYgcG9zdEVkaXRlZH08L3A+XG4gICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIHtwb3N0LmRhdGEuY29udGVudC5tYXAoY29udGVudCA9PiAoXG4gICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17Y29udGVudC5oZWFkaW5nfSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250ZW50fT5cbiAgICAgICAgICAgICAgICA8aDI+e2NvbnRlbnQuaGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgIF9faHRtbDogUmljaFRleHQuYXNIdG1sKGNvbnRlbnQuYm9keSksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2aWdhdGlvbn0gJHtjb21tb25TdHlsZXMuY29udGFpbmVyfWB9PlxuICAgICAgICAgIHtuYXZpZ2F0aW9uPy5wcmV2UG9zdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMz57bmF2aWdhdGlvbi5wcmV2UG9zdFswXS5kYXRhLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke25hdmlnYXRpb24ucHJldlBvc3RbMF0udWlkfWB9PlxuICAgICAgICAgICAgICAgIDxhPlBvc3QgYW50ZXJpb3I8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7bmF2aWdhdGlvbj8ubmV4dFBvc3QubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+e25hdmlnYXRpb24ubmV4dFBvc3RbMF0uZGF0YS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtuYXZpZ2F0aW9uLm5leHRQb3N0WzBdLnVpZH1gfT5cbiAgICAgICAgICAgICAgICA8YT5QcsOzeGltbyBwb3N0PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPENvbW1lbnRzIC8+XG5cbiAgICAgICAge3ByZXZpZXcgJiYgKFxuICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXBpL2V4aXQtcHJldmlld1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NvbW1vblN0eWxlcy5wcmV2aWV3fT5TYWlyIGRvIG1vZG8gUHJldmlldzwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KCk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcHJpc21pYy5xdWVyeShbXG4gICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ3Bvc3RzJyksXG4gIF0pO1xuXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMucmVzdWx0cy5tYXAocG9zdCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBwb3N0LnVpZCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe1xuICBwYXJhbXMsXG4gIHByZXZpZXcgPSBmYWxzZSxcbiAgcHJldmlld0RhdGEsXG59KSA9PiB7XG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KCk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByaXNtaWMuZ2V0QnlVSUQoJ3Bvc3RzJywgU3RyaW5nKHNsdWcpLCB7XG4gICAgcmVmOiBwcmV2aWV3RGF0YT8ucmVmIHx8IG51bGwsXG4gIH0pO1xuXG4gIGNvbnN0IHByZXZQb3N0ID0gYXdhaXQgcHJpc21pYy5xdWVyeShcbiAgICBbUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ3Bvc3RzJyldLFxuICAgIHtcbiAgICAgIHBhZ2VTaXplOiAxLFxuICAgICAgYWZ0ZXI6IHJlc3BvbnNlLmlkLFxuICAgICAgb3JkZXJpbmdzOiAnW2RvY3VtZW50LmZpcnN0X3B1YmxpY2F0aW9uX2RhdGVdJyxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgbmV4dFBvc3QgPSBhd2FpdCBwcmlzbWljLnF1ZXJ5KFxuICAgIFtQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAncG9zdHMnKV0sXG4gICAge1xuICAgICAgcGFnZVNpemU6IDEsXG4gICAgICBhZnRlcjogcmVzcG9uc2UuaWQsXG4gICAgICBvcmRlcmluZ3M6ICdbZG9jdW1lbnQubGFzdF9wdWJsaWNhdGlvbl9kYXRlIGRlc2NdJyxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgcG9zdCA9IHtcbiAgICB1aWQ6IHJlc3BvbnNlLnVpZCxcbiAgICBmaXJzdF9wdWJsaWNhdGlvbl9kYXRlOiByZXNwb25zZS5maXJzdF9wdWJsaWNhdGlvbl9kYXRlLFxuICAgIGxhc3RfcHVibGljYXRpb25fZGF0ZTogcmVzcG9uc2UubGFzdF9wdWJsaWNhdGlvbl9kYXRlLFxuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgc3VidGl0bGU6IHJlc3BvbnNlLmRhdGEuc3VidGl0bGUsXG4gICAgICBhdXRob3I6IHJlc3BvbnNlLmRhdGEuYXV0aG9yLFxuICAgICAgYmFubmVyOiB7XG4gICAgICAgIHVybDogcmVzcG9uc2UuZGF0YS5iYW5uZXIudXJsLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmRhdGEuY29udGVudC5tYXAoY29udGVudCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGluZzogY29udGVudC5oZWFkaW5nLFxuICAgICAgICAgIGJvZHk6IFsuLi5jb250ZW50LmJvZHldLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBwcmV2UG9zdDogcHJldlBvc3Q/LnJlc3VsdHMsXG4gICAgICAgIG5leHRQb3N0OiBuZXh0UG9zdD8ucmVzdWx0cyxcbiAgICAgIH0sXG4gICAgICBwcmV2aWV3LFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/post/[slug].tsx\n");

/***/ })

})