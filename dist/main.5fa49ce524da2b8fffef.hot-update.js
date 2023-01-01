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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  namespaced: true,\n  state: {\n    tasks: [],\n    fetchFlag: false,\n    createFlag: false\n  },\n  getters: {},\n  mutations: {\n    setTasks: function setTasks(state, payload) {\n      state.tasks = payload;\n    },\n    setFetchFlag: function setFetchFlag(state, payload) {\n      state.fetchFlag = payload;\n    },\n    addNewTask: function addNewTask(state, payload) {\n      state.tasks.unshift({\n        id: payload.id,\n        title: payload.title,\n        completed: payload.completed\n      });\n    },\n    setCreateFlag: function setCreateFlag(state, payload) {\n      state.createFlag = payload;\n    },\n    updateTask: function updateTask(state, payload) {\n      state.tasks.filter(function (task) {\n        return task.id === payload.id;\n      })[0].completed = payload.completed;\n    }\n  },\n  actions: {\n    taskAction: function taskAction(_ref) {\n      var commit = _ref.commit;\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('https://jsonplaceholder.typicode.com/todos').then(function (response) {\n        commit('setTasks', response.data);\n        commit('setFetchFlag', true);\n      })[\"catch\"](function (err) {\n        commit('setFetchFlag', false);\n        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n          icon: 'error',\n          title: 'Error!',\n          text: 'There is a problem, please try again'\n        });\n      });\n    },\n    filterAction: function filterAction(_ref2, payload) {\n      var commit = _ref2.commit;\n      commit('setFetchFlag', false);\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://jsonplaceholder.typicode.com/todos?_limit=\".concat(payload)).then(function (response) {\n        commit('setTasks', response.data);\n        commit('setFetchFlag', true);\n      })[\"catch\"](function (err) {\n        commit('setFetchFlag', false);\n      });\n    },\n    createAction: function createAction(_ref3, payload) {\n      var commit = _ref3.commit;\n      commit('setCreateFlag', true);\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('https://jsonplaceholder.typicode.com/todos', {\n        title: payload.title.value,\n        completed: payload.completed.value\n      }).then(function (response) {\n        commit('addNewTask', response.data);\n        commit('setCreateFlag', false);\n        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n          icon: 'success',\n          title: 'Task Added!'\n        });\n        payload.title.value = '';\n        payload.completed.value = '';\n      })[\"catch\"](function (err) {\n        commit('setCreateFlag', false);\n        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n          icon: 'error',\n          title: 'Error!',\n          text: 'There is a problem, please try again'\n        });\n      });\n    },\n    updateAction: function updateAction(_ref4, payload) {\n      var commit = _ref4.commit;\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"https://jsonplaceholder.typicode.com/todos/\".concat(payload.id), {\n        completed: !payload.completed\n      }).then(function (response) {\n        commit('updateTask', response.data);\n        payload.loading.value = false;\n        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n          title: \"Task Updated\",\n          icon: \"success\",\n          showConfirmButton: false,\n          timerProgressBar: true,\n          timer: 3000,\n          toast: true,\n          position: 'top'\n        });\n      })[\"catch\"](function (err) {\n        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n          icon: 'error',\n          title: 'Error!',\n          text: 'There is a problem, please try again'\n        });\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://template/./src/store/modules/tasks.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + "." + {"src_pages_Home_vue":"f76597077629f46431b8","src_pages_Product_vue":"43f1e15cbcd0795c4013","src_pages_Task_vue":"cf255d5227d358ae1c9b"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c03a6b025e04b6cc83f1")
/******/ })();
/******/ 
/******/ }
);