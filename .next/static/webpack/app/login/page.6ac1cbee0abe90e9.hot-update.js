"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-client)/./app/login/page.tsx":
/*!****************************!*\
  !*** ./app/login/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"(app-client)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button/Button */ \"(app-client)/./app/components/Button/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogin = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"token\", \"true\");\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"form-title\",\n                children: \"Login to acces\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/login/page.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"button-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onClick: handleLogin,\n                    text: \"Login\",\n                    className: \"save-button\"\n                }, void 0, false, {\n                    fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/login/page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/login/page.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(page, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2xvZ2luL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDSztBQUNhO0FBRUs7QUFFakMsU0FBU0k7O0lBQ3JCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNSSxjQUFlO1FBQ2hCTCxxREFBV00sQ0FBQyxTQUFTO1FBQ3RCRixPQUFPRyxLQUFLO0lBQ2hCO0lBQ0EscUJBQ0k7OzBCQUNBLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBYTs7Ozs7OzBCQUMzQiw4REFBQ0M7Z0JBQVFELFdBQVU7MEJBQ2QsNEVBQUNQLGlFQUFNQTtvQkFBQ1MsU0FBU047b0JBQWFPLE1BQU07b0JBQVNILFdBQVU7Ozs7Ozs7Ozs7Ozs7QUFLcEU7R0FmeUJOOztRQUNORixzREFBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xvZ2luL3BhZ2UudHN4PzQ5MGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIHBhZ2UoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9ICAoKT0+e1xuICAgICAgICAgQ29va2llcy5zZXQoJ3Rva2VuJywgJ3RydWUnKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb3JtLXRpdGxlJz5Mb2dpbiB0byBhY2NlczwvaDI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYnV0dG9uLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0gdGV4dD17J0xvZ2luJ30gY2xhc3NOYW1lPVwic2F2ZS1idXR0b25cIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgICAgICAgIFxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb29raWVzIiwidXNlUm91dGVyIiwiQnV0dG9uIiwicGFnZSIsInJvdXRlciIsImhhbmRsZUxvZ2luIiwic2V0IiwicHVzaCIsImgyIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsIm9uQ2xpY2siLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/login/page.tsx\n"));

/***/ })

});