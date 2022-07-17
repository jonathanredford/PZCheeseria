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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard.tsx\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/hooks */ \"./lib/hooks.ts\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useCheeses)(), cheeses = ref.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-screen-lg mx-auto px-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-16 grid grid-cols-3 gap-8\",\n            children: (cheeses === null || cheeses === void 0 ? void 0 : cheeses.length) ? cheeses.map(function(cheese) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    id: cheese.id,\n                    name: cheese.name,\n                    href: \"/cheeses/\".concat(cheese.id),\n                    description: cheese.color,\n                    price: (cheese.pricePerKg / 100).toLocaleString(\"en-AU\", {\n                        style: \"currency\",\n                        currency: \"AUD\"\n                    }),\n                    image: cheese.imageUrls[0]\n                }, cheese.id, false, {\n                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center text-3xl text-gray-900 font-semibold\",\n                    children: \"No cheeses found!\"\n                }, void 0, false, {\n                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 6\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n            lineNumber: 9,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, this);\n};\n_s(Home, \"RwwzZqyIjwm52v/2PpN6lsQK99o=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useCheeses\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFvRDtBQUNWOztBQUUzQixTQUFTRSxJQUFJLEdBQUc7OztJQUM5QixJQUEwQkQsR0FBWSxHQUFaQSxzREFBVSxFQUFFLEVBQTlCRSxPQUFhLEdBQUtGLEdBQVksQ0FBOUJFLElBQUk7SUFFWixxQkFDQyw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUMsOEJBQThCO2tCQUM1Qyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsOEJBQThCO3NCQUMzQ0YsQ0FBQUEsT0FBTyxhQUFQQSxPQUFPLFdBQVEsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxPQUFPLENBQUVHLE1BQU0sSUFDZkgsT0FBTyxDQUFDSSxHQUFHLENBQUMsU0FBQ0MsTUFBTTtxQ0FDbEIsOERBQUNULCtEQUFXO29CQUVYVSxFQUFFLEVBQUVELE1BQU0sQ0FBQ0MsRUFBRTtvQkFDYkMsSUFBSSxFQUFFRixNQUFNLENBQUNFLElBQUk7b0JBQ2pCQyxJQUFJLEVBQUUsV0FBVSxDQUFZLE9BQVZILE1BQU0sQ0FBQ0MsRUFBRSxDQUFFO29CQUM3QkcsV0FBVyxFQUFFSixNQUFNLENBQUNLLEtBQUs7b0JBQ3pCQyxLQUFLLEVBQUUsQ0FBQ04sTUFBTSxDQUFDTyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUNDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3hEQyxLQUFLLEVBQUUsVUFBVTt3QkFDakJDLFFBQVEsRUFBRSxLQUFLO3FCQUNmLENBQUM7b0JBQ0ZDLEtBQUssRUFBRVgsTUFBTSxDQUFDWSxTQUFTLENBQUMsQ0FBQyxDQUFDO21CQVRyQlosTUFBTSxDQUFDQyxFQUFFOzs7O3lCQVViO2FBQ0YsQ0FBQyxpQkFFRiw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7MEJBQzFCLDRFQUFDZ0IsR0FBQztvQkFBQ2hCLFNBQVMsRUFBQyxrREFBa0Q7OEJBQUMsbUJBRWhFOzs7Ozt3QkFBSTs7Ozs7b0JBQ0M7Ozs7O2dCQUVGOzs7OztZQUNELENBQ0w7Q0FDRjtHQS9CdUJKLElBQUk7O1FBQ0RELGtEQUFVOzs7QUFEYkMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgeyB1c2VDaGVlc2VzIH0gZnJvbSAnLi4vbGliL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0Y29uc3QgeyBkYXRhOiBjaGVlc2VzIH0gPSB1c2VDaGVlc2VzKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyBteC1hdXRvIHB4LTRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtMTYgZ3JpZCBncmlkLWNvbHMtMyBnYXAtOFwiPlxuXHRcdFx0XHR7Y2hlZXNlcz8ubGVuZ3RoID8gKFxuXHRcdFx0XHRcdGNoZWVzZXMubWFwKChjaGVlc2UpID0+IChcblx0XHRcdFx0XHRcdDxQcm9kdWN0Q2FyZFxuXHRcdFx0XHRcdFx0XHRrZXk9e2NoZWVzZS5pZH1cblx0XHRcdFx0XHRcdFx0aWQ9e2NoZWVzZS5pZH1cblx0XHRcdFx0XHRcdFx0bmFtZT17Y2hlZXNlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdGhyZWY9e2AvY2hlZXNlcy8ke2NoZWVzZS5pZH1gfVxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj17Y2hlZXNlLmNvbG9yfVxuXHRcdFx0XHRcdFx0XHRwcmljZT17KGNoZWVzZS5wcmljZVBlcktnIC8gMTAwKS50b0xvY2FsZVN0cmluZygnZW4tQVUnLCB7XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU6ICdjdXJyZW5jeScsXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVuY3k6ICdBVUQnLFxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0aW1hZ2U9e2NoZWVzZS5pbWFnZVVybHNbMF19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkpXG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGRcIj5cblx0XHRcdFx0XHRcdFx0Tm8gY2hlZXNlcyBmb3VuZCFcblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkIiwidXNlQ2hlZXNlcyIsIkhvbWUiLCJkYXRhIiwiY2hlZXNlcyIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsImNoZWVzZSIsImlkIiwibmFtZSIsImhyZWYiLCJkZXNjcmlwdGlvbiIsImNvbG9yIiwicHJpY2UiLCJwcmljZVBlcktnIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5IiwiaW1hZ2UiLCJpbWFnZVVybHMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});