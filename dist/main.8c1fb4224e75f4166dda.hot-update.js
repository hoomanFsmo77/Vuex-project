"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetemplate"]("main",{

/***/ "./src/store/modules/tasks.js":
/*!************************************!*\
  !*** ./src/store/modules/tasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  namespaced: true,\n  state: {\n    tasks: []\n  },\n  getters: {},\n  mutations: {\n    setTasks: function setTasks(state, payload) {\n      state.tasks = payload;\n    }\n  },\n  actions: {\n    taskAction: function taskAction(_ref, payload) {\n      var commit = _ref.commit;\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('https://jsonplaceholder.typicode.com/todos').then(function (response) {\n        commit('setTasks', response.data.slice(0, payload.filter));\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://template/./src/store/modules/tasks.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + "." + {"src_pages_Home_vue":"f76597077629f46431b8","src_pages_Product_vue":"43f1e15cbcd0795c4013","src_pages_Task_vue":"3ad8eee11dacef7ac94b"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ab35b2436887f26cd43e")
/******/ })();
/******/ 
/******/ }
);