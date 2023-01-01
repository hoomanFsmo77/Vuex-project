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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  namespaced: true,\n  state: {\n    tasks: [],\n    fetchFlag: false,\n    createFlag: false\n  },\n  getters: {},\n  mutations: {\n    setTasks: function setTasks(state, payload) {\n      state.tasks = payload;\n    },\n    setFetchFlag: function setFetchFlag(state, payload) {\n      state.fetchFlag = payload;\n    },\n    addNewTask: function addNewTask(state, payload) {\n      state.tasks.unshift({\n        title: payload.title.value,\n        completed: payload.completed.value\n      });\n    },\n    setCreateFlag: function setCreateFlag(state, payload) {\n      state.createFlag = payload;\n    }\n  },\n  actions: {\n    taskAction: function taskAction(_ref) {\n      var commit = _ref.commit;\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('https://jsonplaceholder.typicode.com/todos').then(function (response) {\n        commit('setTasks', response.data);\n        commit('setFetchFlag', true);\n      })[\"catch\"](function (err) {\n        commit('setFetchFlag', false);\n        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n          icon: 'error',\n          title: 'Error!',\n          text: 'There is a problem, please try again'\n        });\n      });\n    },\n    filterAction: function filterAction(_ref2, payload) {\n      var commit = _ref2.commit;\n      commit('setFetchFlag', false);\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://jsonplaceholder.typicode.com/todos?_limit=\".concat(payload)).then(function (response) {\n        commit('setTasks', response.data);\n        commit('setFetchFlag', true);\n      })[\"catch\"](function (err) {\n        commit('setFetchFlag', false);\n      });\n    },\n    createAction: function createAction(_ref3, payload) {\n      var commit = _ref3.commit;\n      commit('setCreateFlag', true);\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('https://jsonplaceholder.typicode.com/posts', {\n        title: payload.title.value,\n        completed: payload.completed.value\n      }).then(function (response) {\n        commit('addNewTask', payload);\n        commit('setCreateFlag', false);\n        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n          icon: 'success',\n          title: 'Task Added!'\n        });\n        payload.title.value = '';\n        payload.completed.value = '';\n      })[\"catch\"](function (err) {\n        commit('setCreateFlag', false);\n        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n          icon: 'error',\n          title: 'Error!',\n          text: 'There is a problem, please try again'\n        });\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://template/./src/store/modules/tasks.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9613f3712b7bf15b0d99")
/******/ })();
/******/ 
/******/ }
);