"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./app/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"(app-client)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Nav.module.scss */ \"(app-client)/./app/styles/Nav.module.scss\");\n/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _LightDarkToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LightDarkToggle */ \"(app-client)/./app/components/LightDarkToggle.tsx\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button/Button */ \"(app-client)/./app/components/Button/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Nav = ()=>{\n    _s();\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // console.log('user', Cookies)\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"token\");\n        route.replace(\"/\");\n    };\n    const user = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"token\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: ()=>route.push(\"/\"),\n                text: \"Home Page\",\n                className: \"button\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Navbar.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: handleLogout,\n                text: \"Logout\",\n                className: \"button\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Navbar.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LightDarkToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Navbar.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/components/Navbar.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"JD5qVJBo0MNDbUb5oI+DMKChels=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMyQztBQUNaO0FBQ2tCO0FBRU47QUFDUDtBQUVwQyxNQUFNSyxNQUFNOztJQUNWLE1BQU1DLFFBQVFOLDBEQUFTQTtJQUN2QiwrQkFBK0I7SUFFL0IsTUFBTU8sZUFBZ0I7UUFDcEJOLHdEQUFjTyxDQUFDO1FBQ2ZGLE1BQU1HLFFBQVE7SUFDaEI7SUFFQSxNQUFNQyxPQUFPVCxxREFBV1UsQ0FBQztJQUV6QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1gsb0VBQWFVOzswQkFDM0IsOERBQUNSLHNEQUFNQTtnQkFDTFUsU0FBUyxJQUFJUixNQUFNUyxLQUFLO2dCQUN4QkMsTUFBSztnQkFDTEgsV0FBVTs7Ozs7O1lBRVhILHNCQUNELDhEQUFDTixzREFBTUE7Z0JBQ0xVLFNBQVNQO2dCQUNQUyxNQUFLO2dCQUNMSCxXQUFVOzs7Ozs7MEJBSWQsOERBQUNWLHdEQUFXQTs7Ozs7Ozs7Ozs7QUFJbEI7R0E5Qk1FOztRQUNVTCxzREFBU0E7OztLQURuQks7QUFnQ04sK0RBQWVBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeD82MzBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgTmF2U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9OYXYubW9kdWxlLnNjc3MnXG5cbmltcG9ydCBUaGVtZVRvZ2dsZSBmcm9tICcuL0xpZ2h0RGFya1RvZ2dsZSdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24vQnV0dG9uJ1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKClcbiAgLy8gY29uc29sZS5sb2coJ3VzZXInLCBDb29raWVzKVxuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICAoKT0+e1xuICAgIENvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuICAgIHJvdXRlLnJlcGxhY2UoJy8nKVxuICB9XG5cbiAgY29uc3QgdXNlciA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17TmF2U3R5bGVzLm5hdn0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpPT5yb3V0ZS5wdXNoKCcvJyl9XG4gICAgICAgIHRleHQ9J0hvbWUgUGFnZSdcbiAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAvPlxuICAgICAge3VzZXImJlxuICAgICAgPEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XG4gICAgICAgICAgdGV4dD0nTG9nb3V0J1xuICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xuICAgICAgLz5cbiAgICAgIH1cbiAgICAgXG4gICAgICA8VGhlbWVUb2dnbGUvPlxuXG4gICAgPC9uYXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNvb2tpZXMiLCJOYXZTdHlsZXMiLCJUaGVtZVRvZ2dsZSIsIkJ1dHRvbiIsIk5hdiIsInJvdXRlIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlIiwicmVwbGFjZSIsInVzZXIiLCJnZXQiLCJuYXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Navbar.tsx\n"));

/***/ })

});