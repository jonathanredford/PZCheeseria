"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/calculator",{

/***/ "./pages/calculator.tsx":
/*!******************************!*\
  !*** ./pages/calculator.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.ts\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hooks */ \"./lib/hooks.ts\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Calculator = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_4__.useCheeses)(), cheeses = ref.data;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), selectedCheese = ref1[0], setSelectedCheese = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.WEIGHT_OPTIONS[0].weightInGrams), selectedWeight = ref2[0], setSelectedWeight = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), price = ref3[0], setPrice = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (selectedCheese && selectedWeight) {\n            setPrice(selectedCheese.pricePerKg / 1000 * selectedWeight);\n        }\n    }, [\n        cheeses,\n        selectedCheese,\n        selectedWeight\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-lg mx-auto px-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"bg-gray-100 p-8 mt-8 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-xl font-semibold text-gray-900\",\n                            children: \"Cheese Price Calculator\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"location\",\n                                    className: \"block text-sm font-medium text-gray-900\",\n                                    children: \"Select cheese\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    id: \"location\",\n                                    name: \"location\",\n                                    className: \"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md\",\n                                    defaultValue: \"\",\n                                    onChange: function(e) {\n                                        return setSelectedCheese(cheeses[e.target.value]);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            disabled: true,\n                                            children: \"Choose an option\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 8\n                                        }, _this),\n                                        (cheeses === null || cheeses === void 0 ? void 0 : cheeses.length) && cheeses.map(function(cheese, index) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: index,\n                                                children: [\n                                                    cheese.name,\n                                                    \" (\",\n                                                    (cheese.pricePerKg / 100).toLocaleString(\"en-AU\", {\n                                                        style: \"currency\",\n                                                        currency: \"AUD\"\n                                                    }),\n                                                    \"/per kg)\"\n                                                ]\n                                            }, cheese.id, true, {\n                                                fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 10\n                                            }, _this1);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-sm font-medium text-gray-900\",\n                                children: \"Select weight\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 7\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.RadioGroup, {\n                            value: selectedWeight,\n                            onChange: setSelectedWeight,\n                            className: \"mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.RadioGroup.Label, {\n                                    className: \"sr-only\",\n                                    children: \"Choose a size\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-3 gap-3 sm:grid-cols-6\",\n                                    children: _lib_constants__WEBPACK_IMPORTED_MODULE_3__.WEIGHT_OPTIONS.map(function(weightOption) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.RadioGroup.Option, {\n                                            value: weightOption.weightInGrams,\n                                            className: function(param) {\n                                                var active = param.active, checked = param.checked;\n                                                return (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(active ? \"ring-2 ring-offset-2 ring-indigo-500\" : \"\", checked ? \"bg-amber-400 border-transparent text-white\" : \"bg-white border-gray-200 text-gray-900 hover:bg-gray-50\", \"cursor-pointer focus:outline-none border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1\");\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.RadioGroup.Label, {\n                                                as: \"span\",\n                                                children: weightOption.label\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 10\n                                            }, _this1)\n                                        }, weightOption.weightInGrams, false, {\n                                            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 9\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"location\",\n                            className: \"block font-medium text-gray-900\",\n                            children: \"Total price\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: price && (price / 100).toLocaleString(\"en-AU\", {\n                                style: \"currency\",\n                                currency: \"AUD\"\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n            lineNumber: 23,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jonathanredford/Work/Clients/Patient Zero/PZ Cheeseria/front_end/pages/calculator.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, _this);\n};\n_s(Calculator, \"PQRH37+sLjhtZQXQ+iEeawAylSM=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_4__.useCheeses\n    ];\n});\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\nvar _c;\n$RefreshReg$(_c, \"Calculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQ3VCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7Z0NBQ3JDQyxLQUFLLEVBQUUsVUFBVTtnQ0FDakJDLFFBQVEsRUFBRSxLQUFLOzZCQUNmLENBQUM7Ozs7O2lDQUNBOzs7Ozs7eUJBQ0M7Ozs7OztpQkFDQTs7Ozs7YUFDRixDQUNMO0NBQ0Y7R0F6R0tqQyxVQUFVOztRQUNXRCxrREFBVTs7O0FBRC9CQyxLQUFBQSxVQUFVO0FBMkdoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbGN1bGF0b3IudHN4PzAyYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFkaW9Hcm91cCB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdFSUdIVF9PUFRJT05TIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VDaGVlc2VzIH0gZnJvbSAnLi4vbGliL2hvb2tzJztcblxuY29uc3QgQ2FsY3VsYXRvciA9ICgpID0+IHtcblx0Y29uc3QgeyBkYXRhOiBjaGVlc2VzIH0gPSB1c2VDaGVlc2VzKCk7XG5cdGNvbnN0IFtzZWxlY3RlZENoZWVzZSwgc2V0U2VsZWN0ZWRDaGVlc2VdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtzZWxlY3RlZFdlaWdodCwgc2V0U2VsZWN0ZWRXZWlnaHRdID0gdXNlU3RhdGUoXG5cdFx0V0VJR0hUX09QVElPTlNbMF0ud2VpZ2h0SW5HcmFtc1xuXHQpO1xuXHRjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHNlbGVjdGVkQ2hlZXNlICYmIHNlbGVjdGVkV2VpZ2h0KSB7XG5cdFx0XHRzZXRQcmljZSgoc2VsZWN0ZWRDaGVlc2UucHJpY2VQZXJLZyAvIDEwMDApICogc2VsZWN0ZWRXZWlnaHQpO1xuXHRcdH1cblx0fSwgW2NoZWVzZXMsIHNlbGVjdGVkQ2hlZXNlLCBzZWxlY3RlZFdlaWdodF0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvIHB4LTRcIj5cblx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHAtOCBtdC04IFwiPlxuXHRcdFx0XHR7LyogV2VpZ2h0IHBpY2tlciAqL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cblx0XHRcdFx0XHRcdENoZWVzZSBQcmljZSBDYWxjdWxhdG9yXG5cdFx0XHRcdFx0PC9oMj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsXG5cdFx0XHRcdFx0XHRcdGh0bWxGb3I9XCJsb2NhdGlvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFNlbGVjdCBjaGVlc2Vcblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0XHRcdGlkPVwibG9jYXRpb25cIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwibG9jYXRpb25cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBwbC0zIHByLTEwIHB5LTIgdGV4dC1iYXNlIGJvcmRlci1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHNtOnRleHQtc20gcm91bmRlZC1tZFwiXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT1cIlwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRDaGVlc2UoY2hlZXNlc1tlLnRhcmdldC52YWx1ZV0pfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+XG5cdFx0XHRcdFx0XHRcdFx0Q2hvb3NlIGFuIG9wdGlvblxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0e2NoZWVzZXM/Lmxlbmd0aCAmJlxuXHRcdFx0XHRcdFx0XHRcdGNoZWVzZXMubWFwKChjaGVlc2UsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17Y2hlZXNlLmlkfSB2YWx1ZT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2hlZXNlLm5hbWV9IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyhjaGVlc2UucHJpY2VQZXJLZyAvIDEwMCkudG9Mb2NhbGVTdHJpbmcoJ2VuLUFVJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAnY3VycmVuY3knLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbmN5OiAnQVVEJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC9wZXIga2cpXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5TZWxlY3Qgd2VpZ2h0PC9oMj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxSYWRpb0dyb3VwXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWRXZWlnaHR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17c2V0U2VsZWN0ZWRXZWlnaHR9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtdC0yXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UmFkaW9Hcm91cC5MYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG5cdFx0XHRcdFx0XHRcdENob29zZSBhIHNpemVcblx0XHRcdFx0XHRcdDwvUmFkaW9Hcm91cC5MYWJlbD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMyBzbTpncmlkLWNvbHMtNlwiPlxuXHRcdFx0XHRcdFx0XHR7V0VJR0hUX09QVElPTlMubWFwKCh3ZWlnaHRPcHRpb24pID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8UmFkaW9Hcm91cC5PcHRpb25cblx0XHRcdFx0XHRcdFx0XHRcdGtleT17d2VpZ2h0T3B0aW9uLndlaWdodEluR3JhbXN9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17d2VpZ2h0T3B0aW9uLndlaWdodEluR3JhbXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyh7IGFjdGl2ZSwgY2hlY2tlZCB9KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbHN4KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZSA/ICdyaW5nLTIgcmluZy1vZmZzZXQtMiByaW5nLWluZGlnby01MDAnIDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnYmctYW1iZXItNDAwIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS05MDAgaG92ZXI6YmctZ3JheS01MCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2N1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgcm91bmRlZC1tZCBweS0zIHB4LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB1cHBlcmNhc2Ugc206ZmxleC0xJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJhZGlvR3JvdXAuTGFiZWwgYXM9XCJzcGFuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt3ZWlnaHRPcHRpb24ubGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1JhZGlvR3JvdXAuTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9SYWRpb0dyb3VwLk9wdGlvbj5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L1JhZGlvR3JvdXA+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTZcIj5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImxvY2F0aW9uXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuXHRcdFx0XHRcdFx0VG90YWwgcHJpY2Vcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0e3ByaWNlICYmXG5cdFx0XHRcdFx0XHRcdChwcmljZSAvIDEwMCkudG9Mb2NhbGVTdHJpbmcoJ2VuLUFVJywge1xuXHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAnY3VycmVuY3knLFxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbmN5OiAnQVVEJyxcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7XG4iXSwibmFtZXMiOlsiUmFkaW9Hcm91cCIsImNsc3giLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldFSUdIVF9PUFRJT05TIiwidXNlQ2hlZXNlcyIsIkNhbGN1bGF0b3IiLCJkYXRhIiwiY2hlZXNlcyIsInNlbGVjdGVkQ2hlZXNlIiwic2V0U2VsZWN0ZWRDaGVlc2UiLCJ3ZWlnaHRJbkdyYW1zIiwic2VsZWN0ZWRXZWlnaHQiLCJzZXRTZWxlY3RlZFdlaWdodCIsInByaWNlIiwic2V0UHJpY2UiLCJwcmljZVBlcktnIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImgyIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb24iLCJkaXNhYmxlZCIsImxlbmd0aCIsIm1hcCIsImNoZWVzZSIsImluZGV4IiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5IiwiTGFiZWwiLCJ3ZWlnaHRPcHRpb24iLCJPcHRpb24iLCJhY3RpdmUiLCJjaGVja2VkIiwiYXMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/calculator.tsx\n"));

/***/ })

});