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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Input_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input/input */ \"(app-client)/./app/components/Input/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Form(props) {\n    _s();\n    const { onFormSubmit , data  } = props;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [jokeData, setJoke] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data ? data : {\n        Title: \"\",\n        Author: \"\",\n        Views: 0\n    });\n    const handleInputChange = (e)=>{\n        setJoke({\n            ...jokeData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleFormSubmit = async ()=>{\n        await onFormSubmit(jokeData);\n        window.location.reload();\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"post\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"Title\",\n                label: \"Title\",\n                onChange: handleInputChange,\n                value: jokeData.Title\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"Author\",\n                label: \"Author\",\n                onChange: handleInputChange,\n                value: jokeData.Author\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 32,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"Views\",\n                label: \"Views\",\n                onChange: handleInputChange,\n                value: jokeData.Views\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 33,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleFormSubmit,\n                children: \"Save Joke\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 34,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(Form, \"8NlOTJ+EMhVVKESo+9fO4sFPDpw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDZ0Q7QUFDTTtBQUNwQjtBQUVsQyxTQUFTSSxLQUFLQyxLQUFTOztJQUNuQixNQUFNLEVBQUNDLGFBQVksRUFBRUMsS0FBSSxFQUFDLEdBQUdGO0lBQzdCLE1BQU1HLFNBQVNOLDBEQUFTQTtJQUN4QixNQUFNLENBQUNPLFVBQVNDLFFBQVEsR0FBR1QsK0NBQVFBLENBQy9CTSxPQUFLQSxPQUNMO1FBQUNJLE9BQU87UUFBSUMsUUFBTztRQUFJQyxPQUFPO0lBQUU7SUFHcEMsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3ZCTCxRQUFRO1lBQ04sR0FBR0QsUUFBUTtZQUNYLENBQUNNLEVBQUVDLE9BQU9DLEtBQUssRUFBRUYsRUFBRUMsT0FBT0U7UUFDNUI7SUFDSjtJQUVBLE1BQU1DLG1CQUFtQjtRQUN2QixNQUFNYixhQUFhRztRQUNuQlcsT0FBT0MsU0FBU0M7UUFDaEJkLE9BQU9lLEtBQUs7SUFDZDtJQUlBLHFCQUNJLDhEQUFDQztRQUFLQyxRQUFPOzswQkFDVCw4REFBQ3RCLG9EQUFLQTtnQkFBQ2MsTUFBSztnQkFBUVMsT0FBTTtnQkFBUUMsVUFBVWI7Z0JBQW1CSSxPQUFPVCxTQUFTRTs7Ozs7OzBCQUM5RSw4REFBQ1Isb0RBQUtBO2dCQUFDYyxNQUFLO2dCQUFTUyxPQUFNO2dCQUFTQyxVQUFVYjtnQkFBbUJJLE9BQU9ULFNBQVNHOzs7Ozs7MEJBQ2pGLDhEQUFDVCxvREFBS0E7Z0JBQUNjLE1BQUs7Z0JBQVFTLE9BQU07Z0JBQVFDLFVBQVViO2dCQUFtQkksT0FBT1QsU0FBU0k7Ozs7OzswQkFDL0UsOERBQUNlO2dCQUFPQyxTQUFTVjswQkFBa0I7Ozs7Ozs7Ozs7OztBQUdoRDtHQS9CU2Y7O1FBRVVGLHNEQUFTQTs7O0tBRm5CRTtBQWlDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4P2RiZWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciwgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0lucHV0L2lucHV0J1xuIFxuZnVuY3Rpb24gRm9ybShwcm9wczphbnkpIHtcbiAgICBjb25zdCB7b25Gb3JtU3VibWl0LCBkYXRhfSA9IHByb3BzXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbam9rZURhdGEsc2V0Sm9rZV0gPSB1c2VTdGF0ZShcbiAgICAgICAgZGF0YT9kYXRhOlxuICAgICAgICB7VGl0bGU6ICcnLCBBdXRob3I6XCJcIiwgVmlld3M6IDAgfVxuICAgICAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTphbnkpPT57XG4gICAgICAgIHNldEpva2Uoe1xuICAgICAgICAgIC4uLmpva2VEYXRhLFxuICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jICgpPT57XG4gICAgICBhd2FpdCBvbkZvcm1TdWJtaXQoam9rZURhdGEpXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICB9XG5cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG1ldGhvZD0ncG9zdCc+XG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cIlRpdGxlXCIgbGFiZWw9XCJUaXRsZVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2pva2VEYXRhLlRpdGxlfS8+XG4gICAgICAgICAgICAgPElucHV0IG5hbWU9XCJBdXRob3JcIiBsYWJlbD1cIkF1dGhvclwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2pva2VEYXRhLkF1dGhvcn0vPlxuICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwiVmlld3NcIiBsYWJlbD1cIlZpZXdzXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17am9rZURhdGEuVmlld3N9Lz5cbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZvcm1TdWJtaXR9PlNhdmUgSm9rZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIklucHV0IiwiRm9ybSIsInByb3BzIiwib25Gb3JtU3VibWl0IiwiZGF0YSIsInJvdXRlciIsImpva2VEYXRhIiwic2V0Sm9rZSIsIlRpdGxlIiwiQXV0aG9yIiwiVmlld3MiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVGb3JtU3VibWl0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJwdXNoIiwiZm9ybSIsIm1ldGhvZCIsImxhYmVsIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Form/Form.tsx\n"));

/***/ })

});