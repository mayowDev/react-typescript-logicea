"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/jokes/edit/page",{

/***/ "(app-client)/./app/components/Form/Form.tsx":
/*!**************************************!*\
  !*** ./app/components/Form/Form.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Input_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input/input */ \"(app-client)/./app/components/Input/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Form(props) {\n    _s();\n    const { onFormSubmit  } = props;\n    const [jokeData, setJoke] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        Title: \"\",\n        Author: \"\",\n        Views: 0\n    });\n    const handleInputChange = (e)=>{\n        console.log(\"e\", e);\n        setJoke({\n            ...jokeData,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: onFormSubmit,\n        method: \"post\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Title\",\n                onChange: handleInputChange,\n                value: jokeData.Title\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Author\",\n                onChange: handleInputChange,\n                value: jokeData.Author\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 24,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Views\",\n                onChange: handleInputChange,\n                value: jokeData.Views\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 25,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Form, \"pNjGSWSCEN5yiBLqBPIQkl41ZdU=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2dEO0FBQ2Q7QUFFbEMsU0FBU0csS0FBS0MsS0FBUzs7SUFDbkIsTUFBTSxFQUFDQyxhQUFZLEVBQUMsR0FBR0Q7SUFDdkIsTUFBTSxDQUFDRSxVQUFTQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO1FBQ2hDTyxPQUFPO1FBQUlDLFFBQU87UUFBSUMsT0FBTztJQUNqQztJQUVBLE1BQU1DLG9CQUFvQixDQUFDQztRQUN2QkMsUUFBUUMsSUFBSSxLQUFLRjtRQUNqQkwsUUFBUTtZQUNOLEdBQUdELFFBQVE7WUFDWCxDQUFDTSxFQUFFRyxPQUFPQyxLQUFLLEVBQUVKLEVBQUVHLE9BQU9FO1FBQzVCO0lBQ0o7SUFJQSxxQkFDSSw4REFBQ0M7UUFBS0MsVUFBVWQ7UUFBY2UsUUFBTzs7MEJBQ2pDLDhEQUFDbEIsb0RBQUtBO2dCQUFDbUIsT0FBTTtnQkFBUUMsVUFBVVg7Z0JBQW1CTSxPQUFPWCxTQUFTRTs7Ozs7OzBCQUNqRSw4REFBQ04sb0RBQUtBO2dCQUFDbUIsT0FBTTtnQkFBU0MsVUFBVVg7Z0JBQW1CTSxPQUFPWCxTQUFTRzs7Ozs7OzBCQUNuRSw4REFBQ1Asb0RBQUtBO2dCQUFDbUIsT0FBTTtnQkFBUUMsVUFBVVg7Z0JBQW1CTSxPQUFPWCxTQUFTSTs7Ozs7Ozs7Ozs7O0FBRy9FO0dBdkJTUDtLQUFBQTtBQXlCVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4P2RiZWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9JbnB1dC9pbnB1dCdcbiBcbmZ1bmN0aW9uIEZvcm0ocHJvcHM6YW55KSB7XG4gICAgY29uc3Qge29uRm9ybVN1Ym1pdH0gPSBwcm9wc1xuICAgIGNvbnN0IFtqb2tlRGF0YSxzZXRKb2tlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgVGl0bGU6ICcnLCBBdXRob3I6XCJcIiwgVmlld3M6IDAgXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOmFueSk9PntcbiAgICAgICAgY29uc29sZS5sb2coJ2UnLCBlKVxuICAgICAgICBzZXRKb2tlKHtcbiAgICAgICAgICAuLi5qb2tlRGF0YSxcbiAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0gbWV0aG9kPSdwb3N0Jz5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRpdGxlXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17am9rZURhdGEuVGl0bGV9Lz5cbiAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJBdXRob3JcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtqb2tlRGF0YS5BdXRob3J9Lz5cbiAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJWaWV3c1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2pva2VEYXRhLlZpZXdzfS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXQiLCJGb3JtIiwicHJvcHMiLCJvbkZvcm1TdWJtaXQiLCJqb2tlRGF0YSIsInNldEpva2UiLCJUaXRsZSIsIkF1dGhvciIsIlZpZXdzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImZvcm0iLCJvblN1Ym1pdCIsIm1ldGhvZCIsImxhYmVsIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Form/Form.tsx\n"));

/***/ })

});