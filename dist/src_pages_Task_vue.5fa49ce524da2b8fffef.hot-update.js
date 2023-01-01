"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetemplate"]("src_pages_Task_vue",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Task/Update.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Task/Update.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _preloader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preloader.vue */ \"./src/components/preloader.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\nfunction _readOnlyError(name) { throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\"); }\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'Update',\n  props: ['task'],\n  setup: function setup(__props, _ref) {\n    var expose = _ref.expose;\n    expose();\n    var props = __props;\n    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);\n    var updateTodo = function updateTodo(id, completed) {\n      loading.value = true;\n      store.dispatch('tasks/updateAction', {\n        id: id,\n        completed: completed,\n        loading: loading\n      });\n    };\n    var __returned__ = {\n      get props() {\n        return props;\n      },\n      set props(v) {\n        v, _readOnlyError(\"props\");\n      },\n      store: store,\n      loading: loading,\n      updateTodo: updateTodo,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      Preloader: _preloader_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      get useStore() {\n        return vuex__WEBPACK_IMPORTED_MODULE_2__.useStore;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://template/./src/components/Task/Update.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ })

});