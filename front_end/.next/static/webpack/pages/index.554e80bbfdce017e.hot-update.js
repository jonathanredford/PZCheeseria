"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard.tsx\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hooks */ \"./lib/hooks.ts\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_4__.useCheeses)(), cheeses = ref.data, isValidating = ref.isValidating, error = ref.error;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"PZ Cheeseria\"\n                }, void 0, false, {\n                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-lg mx-auto px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-16 grid grid-cols-2 md:grid-cols-3 gap-8\",\n                    children: (cheeses === null || cheeses === void 0 ? void 0 : cheeses.length) ? cheeses.map(function(cheese) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            id: cheese.id,\n                            name: cheese.name,\n                            href: \"/cheeses/\".concat(cheese.id),\n                            description: cheese.color,\n                            price: (cheese.pricePerKg / 100).toLocaleString(\"en-AU\", {\n                                style: \"currency\",\n                                currency: \"AUD\"\n                            }),\n                            image: cheese.imageUrls[0]\n                        }, cheese.id, false, {\n                            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 8\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-3xl text-gray-900 font-semibold\",\n                            children: isValidating ? \"Loading...\" : \"No cheese found!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 8\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, this);\n};\n_s(Home, \"mMnjGjkoFCJsdI0fqBPJVaut7lQ=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_4__.useCheeses\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDSTtBQUNtQjtBQUNWOztBQUUzQixTQUFTSSxJQUFJLEdBQUc7OztJQUM5QixJQUErQ0QsR0FBWSxHQUFaQSxzREFBVSxFQUFFLEVBQW5ERSxPQUFhLEdBQTBCRixHQUFZLENBQW5ERSxJQUFJLEVBQVdFLFlBQVksR0FBWUosR0FBWSxDQUFwQ0ksWUFBWSxFQUFFQyxLQUFLLEdBQUtMLEdBQVksQ0FBdEJLLEtBQUs7SUFFMUMscUJBQ0MsOERBQUNQLDJDQUFROzswQkFDUiw4REFBQ0Qsa0RBQUk7MEJBQ0osNEVBQUNTLE9BQUs7OEJBQUMsY0FBWTs7Ozs7d0JBQVE7Ozs7O29CQUNyQjswQkFDUCw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDhCQUE4QjswQkFDNUMsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyw2Q0FBNkM7OEJBQzFETCxDQUFBQSxPQUFPLGFBQVBBLE9BQU8sV0FBUSxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLE9BQU8sQ0FBRU0sTUFBTSxJQUNmTixPQUFPLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxNQUFNOzZDQUNsQiw4REFBQ1osK0RBQVc7NEJBRVhhLEVBQUUsRUFBRUQsTUFBTSxDQUFDQyxFQUFFOzRCQUNiQyxJQUFJLEVBQUVGLE1BQU0sQ0FBQ0UsSUFBSTs0QkFDakJDLElBQUksRUFBRSxXQUFVLENBQVksT0FBVkgsTUFBTSxDQUFDQyxFQUFFLENBQUU7NEJBQzdCRyxXQUFXLEVBQUVKLE1BQU0sQ0FBQ0ssS0FBSzs0QkFDekJDLEtBQUssRUFBRSxDQUFDTixNQUFNLENBQUNPLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sRUFBRTtnQ0FDeERDLEtBQUssRUFBRSxVQUFVO2dDQUNqQkMsUUFBUSxFQUFFLEtBQUs7NkJBQ2YsQ0FBQzs0QkFDRkMsS0FBSyxFQUFFWCxNQUFNLENBQUNZLFNBQVMsQ0FBQyxDQUFDLENBQUM7MkJBVHJCWixNQUFNLENBQUNDLEVBQUU7Ozs7aUNBVWI7cUJBQ0YsQ0FBQyxpQkFFRiw4REFBQ0wsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFlBQVk7a0NBQzFCLDRFQUFDZ0IsR0FBQzs0QkFBQ2hCLFNBQVMsRUFBQyxrREFBa0Q7c0NBQzdESixZQUFZLEdBQUcsWUFBWSxHQUFHLGtCQUFrQjs7Ozs7Z0NBQzlDOzs7Ozs0QkFDQzs7Ozs7d0JBRUY7Ozs7O29CQUNEOzs7Ozs7WUFDSSxDQUNWO0NBQ0Y7R0FwQ3VCSCxJQUFJOztRQUNvQkQsa0RBQVU7OztBQURsQ0MsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgeyB1c2VDaGVlc2VzIH0gZnJvbSAnLi4vbGliL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0Y29uc3QgeyBkYXRhOiBjaGVlc2VzLCBpc1ZhbGlkYXRpbmcsIGVycm9yIH0gPSB1c2VDaGVlc2VzKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPlBaIENoZWVzZXJpYTwvdGl0bGU+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyBteC1hdXRvIHB4LTRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtdC0xNiBncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC04XCI+XG5cdFx0XHRcdFx0e2NoZWVzZXM/Lmxlbmd0aCA/IChcblx0XHRcdFx0XHRcdGNoZWVzZXMubWFwKChjaGVlc2UpID0+IChcblx0XHRcdFx0XHRcdFx0PFByb2R1Y3RDYXJkXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtjaGVlc2UuaWR9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2NoZWVzZS5pZH1cblx0XHRcdFx0XHRcdFx0XHRuYW1lPXtjaGVlc2UubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2NoZWVzZXMvJHtjaGVlc2UuaWR9YH1cblx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj17Y2hlZXNlLmNvbG9yfVxuXHRcdFx0XHRcdFx0XHRcdHByaWNlPXsoY2hlZXNlLnByaWNlUGVyS2cgLyAxMDApLnRvTG9jYWxlU3RyaW5nKCdlbi1BVScsIHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAnY3VycmVuY3knLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVuY3k6ICdBVUQnLFxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdGltYWdlPXtjaGVlc2UuaW1hZ2VVcmxzWzBdfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zXCI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdHtpc1ZhbGlkYXRpbmcgPyAnTG9hZGluZy4uLicgOiAnTm8gY2hlZXNlIGZvdW5kISd9XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiRnJhZ21lbnQiLCJQcm9kdWN0Q2FyZCIsInVzZUNoZWVzZXMiLCJIb21lIiwiZGF0YSIsImNoZWVzZXMiLCJpc1ZhbGlkYXRpbmciLCJlcnJvciIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwibWFwIiwiY2hlZXNlIiwiaWQiLCJuYW1lIiwiaHJlZiIsImRlc2NyaXB0aW9uIiwiY29sb3IiLCJwcmljZSIsInByaWNlUGVyS2ciLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwiY3VycmVuY3kiLCJpbWFnZSIsImltYWdlVXJscyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});