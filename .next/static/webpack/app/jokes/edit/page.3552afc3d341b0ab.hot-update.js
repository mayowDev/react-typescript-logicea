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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Input_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input/input */ \"(app-client)/./app/components/Input/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Form(props) {\n    _s();\n    const { onFormSubmit , data  } = props;\n    console.log(\"formData\", data);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [jokeData, setJoke] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data ? data : {\n        Title: \"\",\n        Author: \"\",\n        Views: 0\n    });\n    const handleInputChange = (e)=>{\n        setJoke({\n            ...jokeData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleFormSubmit = ()=>{\n        onFormSubmit(jokeData);\n        router.push(\"/\");\n    //console.log('newJoke Promise', newJoke)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"post\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"Title\",\n                label: \"Title\",\n                onChange: handleInputChange,\n                value: jokeData.Title\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"Author\",\n                label: \"Author\",\n                onChange: handleInputChange,\n                value: jokeData.Author\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 33,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"Views\",\n                label: \"Views\",\n                onChange: handleInputChange,\n                value: jokeData.Views\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 34,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleFormSubmit,\n                children: \"Save Joke\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n                lineNumber: 35,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Form/Form.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(Form, \"8NlOTJ+EMhVVKESo+9fO4sFPDpw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDZ0Q7QUFDSjtBQUNWO0FBRWxDLFNBQVNJLEtBQUtDLEtBQVM7O0lBQ25CLE1BQU0sRUFBQ0MsYUFBWSxFQUFFQyxLQUFJLEVBQUMsR0FBR0Y7SUFDN0JHLFFBQVFDLElBQUksWUFBWUY7SUFDeEIsTUFBTUcsU0FBU1IsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1MsVUFBU0MsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FDL0JNLE9BQUtBLE9BQ0w7UUFBQ00sT0FBTztRQUFJQyxRQUFPO1FBQUlDLE9BQU87SUFBRTtJQUdwQyxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDdkJMLFFBQVE7WUFDTixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ00sRUFBRUMsT0FBT0MsS0FBSyxFQUFFRixFQUFFQyxPQUFPRTtRQUM1QjtJQUNKO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3ZCZixhQUFhSztRQUNiRCxPQUFPWSxLQUFLO0lBQ2QseUNBQXlDO0lBQ3pDO0lBSUEscUJBQ0ksOERBQUNDO1FBQUtDLFFBQU87OzBCQUNULDhEQUFDckIsb0RBQUtBO2dCQUFDZ0IsTUFBSztnQkFBUU0sT0FBTTtnQkFBUUMsVUFBVVY7Z0JBQW1CSSxPQUFPVCxTQUFTRTs7Ozs7OzBCQUM5RSw4REFBQ1Ysb0RBQUtBO2dCQUFDZ0IsTUFBSztnQkFBU00sT0FBTTtnQkFBU0MsVUFBVVY7Z0JBQW1CSSxPQUFPVCxTQUFTRzs7Ozs7OzBCQUNqRiw4REFBQ1gsb0RBQUtBO2dCQUFDZ0IsTUFBSztnQkFBUU0sT0FBTTtnQkFBUUMsVUFBVVY7Z0JBQW1CSSxPQUFPVCxTQUFTSTs7Ozs7OzBCQUMvRSw4REFBQ1k7Z0JBQU9DLFNBQVNQOzBCQUFrQjs7Ozs7Ozs7Ozs7O0FBR2hEO0dBaENTakI7O1FBR1VGLHNEQUFTQTs7O0tBSG5CRTtBQWtDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4P2RiZWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQvaW5wdXQnXG4gXG5mdW5jdGlvbiBGb3JtKHByb3BzOmFueSkge1xuICAgIGNvbnN0IHtvbkZvcm1TdWJtaXQsIGRhdGF9ID0gcHJvcHNcbiAgICBjb25zb2xlLmxvZygnZm9ybURhdGEnLCBkYXRhKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW2pva2VEYXRhLHNldEpva2VdID0gdXNlU3RhdGUoXG4gICAgICAgIGRhdGE/ZGF0YTpcbiAgICAgICAge1RpdGxlOiAnJywgQXV0aG9yOlwiXCIsIFZpZXdzOiAwIH1cbiAgICAgICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6YW55KT0+e1xuICAgICAgICBzZXRKb2tlKHtcbiAgICAgICAgICAuLi5qb2tlRGF0YSxcbiAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoKT0+e1xuICAgICAgb25Gb3JtU3VibWl0KGpva2VEYXRhKVxuICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIC8vY29uc29sZS5sb2coJ25ld0pva2UgUHJvbWlzZScsIG5ld0pva2UpXG4gICAgfVxuXG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBtZXRob2Q9J3Bvc3QnPlxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJUaXRsZVwiIGxhYmVsPVwiVGl0bGVcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtqb2tlRGF0YS5UaXRsZX0vPlxuICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwiQXV0aG9yXCIgbGFiZWw9XCJBdXRob3JcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtqb2tlRGF0YS5BdXRob3J9Lz5cbiAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cIlZpZXdzXCIgbGFiZWw9XCJWaWV3c1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2pva2VEYXRhLlZpZXdzfS8+XG4gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGb3JtU3VibWl0fT5TYXZlIEpva2U8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJJbnB1dCIsIkZvcm0iLCJwcm9wcyIsIm9uRm9ybVN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiam9rZURhdGEiLCJzZXRKb2tlIiwiVGl0bGUiLCJBdXRob3IiLCJWaWV3cyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJwdXNoIiwiZm9ybSIsIm1ldGhvZCIsImxhYmVsIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Form/Form.tsx\n"));

/***/ })

});