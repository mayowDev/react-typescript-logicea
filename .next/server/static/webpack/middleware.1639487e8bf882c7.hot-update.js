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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n// This function can be marked `async` if using `await` inside\nfunction middleware(request) {\n    const userToken = request.cookies.get(\"isLogedin\")?.value;\n    if (!userToken) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.url));\n    } else {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/\"));\n    }\n}\n// This Matches home page and jokes directory\"\nconst config = {\n    matcher: [\n        \"/\",\n        \"/jokes/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFHMUMsOERBQThEO0FBQy9DLFNBQVNDLFdBQVdDLE9BQW9CO0lBRXJELE1BQU1DLFlBQVlELFFBQVFFLFFBQVFDLElBQUksY0FBY0M7SUFDcEQsSUFBRyxDQUFDSCxXQUFXO1FBQ1osT0FBT0gsMkZBQXFCTyxDQUFDLElBQUlDLElBQUksVUFBU04sUUFBUU87SUFDekQsT0FBSztRQUNILE9BQU9ULDJGQUFxQk8sQ0FBQyxJQUFJQyxJQUFJO0lBQ3ZDO0FBQ0Y7QUFFQSw4Q0FBOEM7QUFDdkMsTUFBTUUsU0FBUztJQUNwQkMsU0FBUztRQUFDO1FBQUs7S0FBZ0I7QUFDakMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIG1hcmtlZCBgYXN5bmNgIGlmIHVzaW5nIGBhd2FpdGAgaW5zaWRlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG5cbiAgY29uc3QgdXNlclRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgnaXNMb2dlZGluJyk/LnZhbHVlO1xuICBpZighdXNlclRva2VuKSB7XG4gICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJyxyZXF1ZXN0LnVybCkpXG4gIH1lbHNle1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnLycpKVxuICB9XG59XG5cbi8vIFRoaXMgTWF0Y2hlcyBob21lIHBhZ2UgYW5kIGpva2VzIGRpcmVjdG9yeVwiXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbJy8nLCAnL2pva2VzLzpwYXRoKiddLFxufTsiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJ1c2VyVG9rZW4iLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});