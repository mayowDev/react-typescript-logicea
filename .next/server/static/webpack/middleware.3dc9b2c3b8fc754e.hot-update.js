"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n// import Cookies from 'js-cookie'\n\n// This function can be marked `async` if using `await` inside\nfunction middleware(request) {\n    const userToken = request.cookies.get(\"isLogedin\")?.value;\n    console.log(\"is user Loggedin\", userToken);\n    if (!userToken) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.url));\n    }\n}\n// This Matches home page and jokes directory\"\nconst config = {\n    matcher: [\n        \"/\",\n        \"/jokes/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrQ0FBa0M7QUFFUTtBQUcxQyw4REFBOEQ7QUFDL0MsU0FBU0MsV0FBV0MsT0FBb0I7SUFFckQsTUFBTUMsWUFBWUQsUUFBUUUsUUFBUUMsSUFBSSxjQUFjQztJQUNwREMsUUFBUUMsSUFBSSxvQkFBb0JMO0lBQ2hDLElBQUcsQ0FBQ0EsV0FBVztRQUNaLE9BQU9ILDJGQUFxQlMsQ0FBQyxJQUFJQyxJQUFJLFVBQVNSLFFBQVFTO0lBQ3pEO0FBQ0Y7QUFLQSw4Q0FBOEM7QUFDdkMsTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO1FBQUs7S0FBZ0I7QUFDakMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcblxuLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgbWFya2VkIGBhc3luY2AgaWYgdXNpbmcgYGF3YWl0YCBpbnNpZGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcblxuICBjb25zdCB1c2VyVG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCdpc0xvZ2VkaW4nKT8udmFsdWU7XG4gIGNvbnNvbGUubG9nKCdpcyB1c2VyIExvZ2dlZGluJywgdXNlclRva2VuKVxuICBpZighdXNlclRva2VuKSB7XG4gICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJyxyZXF1ZXN0LnVybCkpXG4gIH1cbn1cblxuXG4gXG5cbi8vIFRoaXMgTWF0Y2hlcyBob21lIHBhZ2UgYW5kIGpva2VzIGRpcmVjdG9yeVwiXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbJy8nLCAnL2pva2VzLzpwYXRoKiddLFxufTsiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJ1c2VyVG9rZW4iLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});