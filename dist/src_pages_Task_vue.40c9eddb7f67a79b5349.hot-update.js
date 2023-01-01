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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Filter.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Filter.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var materialize_css_sass_components_forms_select_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css/sass/components/forms/_select.scss */ \"./node_modules/materialize-css/sass/components/forms/_select.scss\");\n/* harmony import */ var materialize_css_sass_components_forms_select_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css_sass_components_forms_select_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var materialize_css_sass_components_variables_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css/sass/components/_variables.scss */ \"./node_modules/materialize-css/sass/components/_variables.scss\");\n/* harmony import */ var materialize_css_sass_components_variables_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css_sass_components_variables_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var materialize_css_sass_components_color_variables_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! materialize-css/sass/components/_color-variables.scss */ \"./node_modules/materialize-css/sass/components/_color-variables.scss\");\n\n\n\n\n\n////////////////\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'Filter',\n  setup: function setup(__props, _ref) {\n    var expose = _ref.expose;\n    expose();\n    var showFilter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([199]);\n    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();\n    document.addEventListener('DOMContentLoaded', function () {\n      var elems = document.querySelectorAll('select');\n      var instances = M.FormSelect.init(elems, options);\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(showFilter, function () {\n      store.dispatch('tasks/filterAction', showFilter.value);\n    });\n    var __returned__ = {\n      showFilter: showFilter,\n      store: store,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,\n      get useStore() {\n        return vuex__WEBPACK_IMPORTED_MODULE_4__.useStore;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://template/./src/components/Filter.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/materialize-css/sass/components/_color-variables.scss":
/*!****************************************************************************!*\
  !*** ./node_modules/materialize-css/sass/components/_color-variables.scss ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1672579875679\n      var cssReload = __webpack_require__(/*! ../../../mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./node_modules/materialize-css/sass/components/_color-variables.scss?");

/***/ })

});