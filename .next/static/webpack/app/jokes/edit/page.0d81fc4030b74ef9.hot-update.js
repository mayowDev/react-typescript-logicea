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

/***/ "(app-client)/./app/jokes/edit/page.tsx":
/*!*********************************!*\
  !*** ./app/jokes/edit/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_jokeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jokeService */ \"(app-client)/./app/services/jokeService.js\");\n/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Form/Form */ \"(app-client)/./app/components/Form/Form.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction page() {\n    const handleSubmit = async (jokeData)=>{\n        console.log(\"jokeDate\", jokeData);\n        const result = await (0,_services_jokeService__WEBPACK_IMPORTED_MODULE_2__.saveJoke)(jokeData);\n        console.log(\" saveJoke result\", result);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onFormSubmit: handleSubmit\n    }, void 0, false, {\n        fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/jokes/edit/page.tsx\",\n        lineNumber: 14,\n        columnNumber: 13\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2pva2VzL2VkaXQvcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMwQjtBQUMyQjtBQUVSO0FBRTdCLFNBQVNHO0lBQ3JCLE1BQU1DLGVBQWUsT0FBT0M7UUFDeEJDLFFBQVFDLElBQUksWUFBWUY7UUFDeEIsTUFBTUcsU0FBUyxNQUFNUCwrREFBUUEsQ0FBQ0k7UUFDOUJDLFFBQVFDLElBQUksb0JBQW9CQztJQUNwQztJQUNBLHFCQUNRLDhEQUFDTiw2REFBSUE7UUFBQ08sY0FBY0w7Ozs7OztBQUVoQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvam9rZXMvZWRpdC9wYWdlLnRzeD85MTJjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzYXZlSm9rZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2pva2VTZXJ2aWNlJ1xuXG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0vRm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIHBhZ2UoKSB7XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGpva2VEYXRhOmFueSk9PntcbiAgICAgICAgY29uc29sZS5sb2coJ2pva2VEYXRlJywgam9rZURhdGEpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNhdmVKb2tlKGpva2VEYXRhKVxuICAgICAgICBjb25zb2xlLmxvZygnIHNhdmVKb2tlIHJlc3VsdCcsIHJlc3VsdCApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybSBvbkZvcm1TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0vPlxuICAgICk7XG59XG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzYXZlSm9rZSIsIkZvcm0iLCJwYWdlIiwiaGFuZGxlU3VibWl0Iiwiam9rZURhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0Iiwib25Gb3JtU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/jokes/edit/page.tsx\n"));

/***/ })

});