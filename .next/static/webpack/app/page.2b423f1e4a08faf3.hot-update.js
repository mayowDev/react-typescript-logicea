"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/jokes/JokesComponent.tsx":
/*!**************************************!*\
  !*** ./app/jokes/JokesComponent.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ JokesList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"(app-client)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_common_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/pagination */ \"(app-client)/./app/components/common/pagination.jsx\");\n/* harmony import */ var _utils_paginate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/paginate */ \"(app-client)/./app/utils/paginate.tsx\");\n/* harmony import */ var _components_Table_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Table/Table */ \"(app-client)/./app/components/Table/Table.tsx\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button/Button */ \"(app-client)/./app/components/Button/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction JokesList(param) {\n    let { data  } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [jokes, setjokes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [pageSize, setPageSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [filteredJokes, setFilteredJokes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"token\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setjokes(data);\n    }, [\n        data,\n        jokes,\n        setjokes,\n        user\n    ]);\n    const paginatedJokes = (0,_utils_paginate__WEBPACK_IMPORTED_MODULE_5__.paginate)(filteredJokes, currentPage, pageSize);\n    const handlePageChange = (page)=>{\n        setCurrentPage(page);\n    };\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"token\");\n        router.replace(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                onClick: handleLogout,\n                text: \"Logout\",\n                className: \"logout-button\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/jokes/JokesComponent.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table_Table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                data: paginatedJokes\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/jokes/JokesComponent.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                totalItems: jokes.length,\n                pageSize: pageSize,\n                onPageChange: handlePageChange,\n                setPageSize: setPageSize,\n                currentPage: currentPage,\n                setCurrentPage: setCurrentPage\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/jokes/JokesComponent.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                onClick: ()=>router.push(\"/jokes/edit\"),\n                text: \" Add joke  \",\n                className: \"add-new-button\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/sideprojects/react-typescript-logicea/app/jokes/JokesComponent.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(JokesList, \"/PPO5J90/kSONr/lR+YK7uGc/o0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = JokesList;\nvar _c;\n$RefreshReg$(_c, \"JokesList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2pva2VzL0pva2VzQ29tcG9uZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ2xCO0FBRWE7QUFDYTtBQUNaO0FBQ0M7QUFDRztBQUVqQyxTQUFTUyxVQUFXLEtBQWlCO1FBQWpCLEVBQUNDLEtBQUksRUFBWSxHQUFqQjs7SUFDaEMsTUFBTUMsU0FBVVAsMERBQVNBO0lBQ3pCLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNjLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZ0IsZUFBZUMsaUJBQWlCLEdBQUdqQiwrQ0FBUUEsQ0FBQ1E7SUFDbkQsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUduQiwrQ0FBUUEsQ0FBQ0MscURBQVdtQixDQUFDO0lBRzdDckIsZ0RBQVNBLENBQUM7UUFDTlksU0FBU0g7SUFDYixHQUFFO1FBQUNBO1FBQU1FO1FBQU9DO1FBQVVPO0tBQUs7SUFHL0IsTUFBTUcsaUJBQWlCakIseURBQVFBLENBQUNZLGVBQWVKLGFBQWFFO0lBRTVELE1BQU9RLG1CQUFtQixDQUFDQztRQUFrQlYsZUFBZVU7SUFBSztJQUNqRSxNQUFNQyxlQUFnQjtRQUNsQnZCLHdEQUFjd0IsQ0FBQztRQUNmaEIsT0FBT2lCLFFBQVE7SUFDbkI7SUFDQSxxQkFDSTs7WUFDS1Isc0JBQ0QsOERBQUNaLGlFQUFNQTtnQkFBQ3FCLFNBQVNIO2dCQUFjSSxNQUFLO2dCQUFTQyxXQUFVOzs7Ozs7MEJBRXZELDhEQUFDeEIsK0RBQUtBO2dCQUFDRyxNQUFNYTs7Ozs7OzBCQUNiLDhEQUFDbEIscUVBQVVBO2dCQUNQMkIsWUFBWXBCLE1BQU1xQjtnQkFDbEJqQixVQUFVQTtnQkFDVmtCLGNBQWNWO2dCQUNkUCxhQUFhQTtnQkFDYkgsYUFBYUE7Z0JBQ2JDLGdCQUFnQkE7Ozs7OzswQkFFcEIsOERBQUNQLGlFQUFNQTtnQkFDRnFCLFNBQVMsSUFBSWxCLE9BQU93QixLQUFLO2dCQUN6QkwsTUFBSztnQkFDTEMsV0FBVTs7Ozs7Ozs7QUFJM0I7R0ExQ3lCdEI7O1FBQ0xMLHNEQUFTQTs7O0tBREpLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9qb2tlcy9Kb2tlc0NvbXBvbmVudC50c3g/MDNkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BhZ2luYXRpb25cIjtcbmltcG9ydCB7IHBhZ2luYXRlIH0gZnJvbSBcIi4uL3V0aWxzL3BhZ2luYXRlXCI7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZS9UYWJsZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBKb2tlc0xpc3QgKHtkYXRhfTp7ZGF0YTphbnl9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gIHVzZVJvdXRlcigpXG4gICAgY29uc3QgW2pva2VzLCBzZXRqb2tlc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXG4gICAgY29uc3QgW3BhZ2VTaXplLCBzZXRQYWdlU2l6ZV0gPSB1c2VTdGF0ZSg1KVxuICAgIGNvbnN0IFtmaWx0ZXJlZEpva2VzLCBzZXRGaWx0ZXJlZEpva2VzXSA9IHVzZVN0YXRlKGRhdGEpXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoQ29va2llcy5nZXQoJ3Rva2VuJykpXG5cblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBzZXRqb2tlcyhkYXRhKVxuICAgIH0sW2RhdGEsIGpva2VzLCBzZXRqb2tlcywgdXNlcl0pXG5cbiAgXG4gICAgY29uc3QgcGFnaW5hdGVkSm9rZXMgPSBwYWdpbmF0ZShmaWx0ZXJlZEpva2VzLCBjdXJyZW50UGFnZSwgcGFnZVNpemUpO1xuXG4gICAgY29uc3QgIGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZTpudW1iZXIpID0+IHsgc2V0Q3VycmVudFBhZ2UocGFnZSl9O1xuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICAoKT0+e1xuICAgICAgICBDb29raWVzLnJlbW92ZSgndG9rZW4nKTtcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoJy9sb2dpbicpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7dXNlciYmXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gdGV4dD0nTG9nb3V0JyBjbGFzc05hbWU9J2xvZ291dC1idXR0b24nLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxUYWJsZSBkYXRhPXtwYWdpbmF0ZWRKb2tlc30gLz5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uIFxuICAgICAgICAgICAgICAgIHRvdGFsSXRlbXM9e2pva2VzLmxlbmd0aH0gXG4gICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfSBcbiAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgc2V0UGFnZVNpemU9e3NldFBhZ2VTaXplfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZT17c2V0Q3VycmVudFBhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goJy9qb2tlcy9lZGl0Jyl9XG4gICAgICAgICAgICAgICAgIHRleHQ9JyBBZGQgam9rZSAgJ1xuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2FkZC1uZXctYnV0dG9uJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJQYWdpbmF0aW9uIiwicGFnaW5hdGUiLCJUYWJsZSIsIkJ1dHRvbiIsIkpva2VzTGlzdCIsImRhdGEiLCJyb3V0ZXIiLCJqb2tlcyIsInNldGpva2VzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInBhZ2VTaXplIiwic2V0UGFnZVNpemUiLCJmaWx0ZXJlZEpva2VzIiwic2V0RmlsdGVyZWRKb2tlcyIsInVzZXIiLCJzZXRVc2VyIiwiZ2V0IiwicGFnaW5hdGVkSm9rZXMiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZSIsImhhbmRsZUxvZ291dCIsInJlbW92ZSIsInJlcGxhY2UiLCJvbkNsaWNrIiwidGV4dCIsImNsYXNzTmFtZSIsInRvdGFsSXRlbXMiLCJsZW5ndGgiLCJvblBhZ2VDaGFuZ2UiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/jokes/JokesComponent.tsx\n"));

/***/ })

});