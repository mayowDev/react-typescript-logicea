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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n// import Cookies from 'js-cookie'\n\n// This function can be marked `async` if using `await` inside\nfunction middleware(request) {\n    const userToken = request.cookies.get(\"isLogedin\")?.value;\n    // console.log('is user Loggedin', userToken)\n    if (!userToken) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.url));\n    }\n}\n// This Matches home page and jokes directory\"\nconst config = {\n    matcher: [\n        \"/\",\n        \"/jokes/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrQ0FBa0M7QUFFUTtBQUcxQyw4REFBOEQ7QUFDL0MsU0FBU0MsV0FBV0MsT0FBb0I7SUFFckQsTUFBTUMsWUFBWUQsUUFBUUUsUUFBUUMsSUFBSSxjQUFjQztJQUNwRCw2Q0FBNkM7SUFDN0MsSUFBRyxDQUFDSCxXQUFXO1FBQ1osT0FBT0gsMkZBQXFCTyxDQUFDLElBQUlDLElBQUksVUFBU04sUUFBUU87SUFDekQ7QUFDRjtBQUtBLDhDQUE4QztBQUN2QyxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7UUFBSztLQUFnQjtBQUNqQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJ1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBtYXJrZWQgYGFzeW5jYCBpZiB1c2luZyBgYXdhaXRgIGluc2lkZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuXG4gIGNvbnN0IHVzZXJUb2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ2lzTG9nZWRpbicpPy52YWx1ZTtcbiAgLy8gY29uc29sZS5sb2coJ2lzIHVzZXIgTG9nZ2VkaW4nLCB1c2VyVG9rZW4pXG4gIGlmKCF1c2VyVG9rZW4pIHtcbiAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLHJlcXVlc3QudXJsKSlcbiAgfVxufVxuXG5cbiBcblxuLy8gVGhpcyBNYXRjaGVzIGhvbWUgcGFnZSBhbmQgam9rZXMgZGlyZWN0b3J5XCJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFsnLycsICcvam9rZXMvOnBhdGgqJ10sXG59OyJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInVzZXJUb2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});