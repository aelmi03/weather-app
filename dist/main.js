/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/weather.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/weather.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Arvo&family=Josefin+Sans&family=Merriweather:wght@300&family=Montserrat&family=Playfair+Display:wght@600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\nbody {\\n  min-height: 100vh;\\n  width: 100%;\\n}\\n\\nheader {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 1.2rem;\\n  background-color: rgb(250, 183, 0);\\n  padding: 1rem 0rem;\\n}\\nh1 {\\n  text-shadow: black 1px 1px 1px;\\n  font-size: 3rem;\\n}\\nlabel {\\n  font-weight: 1.4;\\n  font-size: 1.3rem;\\n  font-family: 'Josefin Sans', sans-serif;\\n  font-weight: bold;\\n  text-shadow: white 1px 1px 1px;\\n  color: rgb(19, 8, 8);\\n}\\nh1 {\\n  font-family: 'Playfair Display', serif;\\n}\\nh2 {\\n  font-family: 'Montserrat', sans-serif;\\n}\\nh3 {\\n  font-family: 'Arvo', serif;\\n}\\nform {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\ninput {\\n  border: none;\\n  outline: none;\\n  padding: 0.25rem 0.1rem;\\n  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);\\n  border-radius: 5px;\\n}\\n.search-button {\\n  z-index: 1;\\n  position: relative;\\n  border: none;\\n  outline: none;\\n  background-color: black;\\n  color: white;\\n  padding: 0.25rem 1rem;\\n  box-shadow: rgba(197, 194, 194, 0.726) 0px 5px 15px;\\n  font-size: 1rem;\\n  text-shadow: white 1px 1px 1px;\\n  border-radius: 5px;\\n  transition: all 0.4s ease-in-out;\\n  font-family: 'Josefin Sans', sans-serif;\\n}\\n.search-button::before {\\n  content: '';\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  transform: scaleX(0);\\n  transition: transform 0.4s ease-in-out;\\n  z-index: -1;\\n  transform-origin: left;\\n  border-radius: 5px;\\n  background-color: white;\\n}\\n\\n.search-button:hover::before {\\n  transform: scaleX(1);\\n}\\n.search-button:hover {\\n  color: black;\\n  text-shadow: black 1px 1px 1px;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n}\\n\\n.temperature-button {\\n  position: relative;\\n  font-size: 1.5rem;\\n  outline: none;\\n  font-family: 'Arvo', serif;\\n  padding: 0.8rem;\\n  background-color: white;\\n  text-shadow: black 1px 1px 1px;\\n  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;\\n  clip-path: circle(50% at 50% 50%);\\n  transition: all 0.4s ease-in-out;\\n}\\n.temperature-button::before {\\n  content: '';\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  padding: 5rem;\\n  border-radius: 50px;\\n  transform: scale(0);\\n  transition: transform 0.4s ease-in-out;\\n  z-index: -1;\\n  background-color: black;\\n}\\n.temperature-button:hover::before {\\n  transform: scale(1);\\n}\\n\\n.temperature-button:hover {\\n  border: 2px dotted white;\\n  color: white;\\n  text-shadow: white 1px 1px 1px;\\n  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;\\n}\\n\\n.today-card {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 0.75rem;\\n  width: 70%;\\n  max-width: 60rem;\\n  padding: 1.5rem;\\n  margin: 0 auto;\\n  margin-top: 2rem;\\n  background-color: rgb(255, 255, 255);\\n  box-shadow: rgba(197, 194, 194, 0.726) 0px 5px 15px;\\n}\\n.city-name {\\n  font-size: 2.5rem;\\n}\\n.today-card > h3 {\\n  font-size: 1.3rem;\\n}\\n\\n.today-temperature {\\n  font-size: 1.8rem;\\n}\\n.extra-details {\\n  margin-top: 1.5rem;\\n  gap: 1.5rem;\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  padding: 1.8rem 1rem;\\n  font-size: 0.85rem;\\n  background-color: rgb(250, 183, 0);\\n}\\n.extra-details > h3 {\\n  text-shadow: white 2px 2px 2px;\\n}\\n\\n.today-image-container {\\n  width: 8rem;\\n  height: 8rem;\\n}\\n\\n.today-image {\\n  width: 100%;\\n  height: 100%;\\n}\\n.weekly-forecast-container,\\n.hourly-forecast-container {\\n  margin-top: 3rem;\\n  margin-bottom: 3rem;\\n  width: 100%;\\n}\\n.weekly-forecast-container {\\n  margin-bottom: 1rem;\\n}\\n\\n.weekly-forecast-title,\\n.hourly-forecast-title {\\n  text-align: center;\\n}\\n.weekly-forecast {\\n  width: 100%;\\n  margin-top: 2rem;\\n  justify-content: center;\\n  display: flex;\\n  flex-flow: row wrap;\\n  gap: 0.8rem;\\n}\\n.weekly-forecast-card,\\n.hourly-forecast-card {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 1.5rem 2.3rem;\\n  flex-flow: column nowrap;\\n  gap: 0.5rem;\\n  transition: all 0.3s ease-in-out;\\n  box-shadow: rgba(197, 194, 194, 0.726) 0px 5px 15px;\\n}\\n.weekly-forecast-card:hover,\\n.hourly-forecast-card:hover {\\n  transform: scale(1.2);\\n}\\n.hourly-forecast-card {\\n  padding: 1.5rem 1rem;\\n  min-width: 10rem;\\n}\\n.weekly-forecast-card > h3,\\n.hourly-forecast-card > h3 {\\n  font-size: 0.9rem;\\n}\\n\\n.hourly-forecast {\\n  display: flex;\\n  flex-flow: row wrap;\\n  gap: 0.8rem;\\n  width: 100%;\\n  margin-top: 2rem;\\n  justify-content: center;\\n}\\n\\n.seperator {\\n  background-color: rgb(250, 183, 0);\\n  padding: 1.5rem;\\n}\\n@media only screen and (min-width: 768px) {\\n  .weekly-forecast-card > h3,\\n  .hourly-forecast-card > h3 {\\n    font-size: 1.1rem;\\n  }\\n  .weekly-forecast-title,\\n  .hourly-forecast-title {\\n    font-size: 1.9rem;\\n  }\\n  .extra-details > h3 {\\n    font-size: 1.2rem;\\n  }\\n  .search-button {\\n    font-size: 1.1rem;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/weather.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Number} unixTime - the given Unix timestamp (in seconds)\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * const result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\n\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unixTime * 1000);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/weather.css":
/*!*************************!*\
  !*** ./src/weather.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./weather.css */ \"./node_modules/css-loader/dist/cjs.js!./src/weather.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/weather.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/extraDetailsSection.js":
/*!***********************************************!*\
  !*** ./src/components/extraDetailsSection.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ \"./src/components/helperFunctions.js\");\n/* harmony import */ var _weather_logic_pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather-logic/pubsub */ \"./src/weather-logic/pubsub.js\");\n/* eslint-disable prefer-destructuring */\n\n\n\nconst extraDetailsContainer = document.querySelector(\n  // eslint-disable-next-line prettier/prettier\n  '.extra-details-container',\n);\n\nfunction displayExtraDetails([weatherObject, temperatureSign]) {\n  extraDetailsContainer.textContent = '';\n  const extraDetailsDiv = document.createElement('div');\n  extraDetailsDiv.classList.add('extra-details');\n  const sunriseDetail = document.createElement('h3');\n  sunriseDetail.textContent = `Sunrise : ${weatherObject.sunrise}`;\n  const sunsetDetail = document.createElement('h3');\n  sunsetDetail.textContent = `Sunset : ${weatherObject.sunset}`;\n  const humidityDetail = document.createElement('h3');\n  humidityDetail.textContent = `Humidity : ${weatherObject.humidity}%`;\n  const pressureDetail = document.createElement('h3');\n  pressureDetail.textContent = `Pressure : ${weatherObject.pressure} mb`;\n  const feelsLikeDetail = document.createElement('h3');\n  feelsLikeDetail.textContent = `Feels Like : ${weatherObject.feels_like} ${temperatureSign}`;\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(extraDetailsDiv, [\n    sunriseDetail,\n    sunsetDetail,\n    humidityDetail,\n    pressureDetail,\n    feelsLikeDetail,\n  ]);\n  extraDetailsContainer.appendChild(extraDetailsDiv);\n}\n\n_weather_logic_pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe('loadExtraDetails', displayExtraDetails);\n\n\n//# sourceURL=webpack://weather-app/./src/components/extraDetailsSection.js?");

/***/ }),

/***/ "./src/components/helperFunctions.js":
/*!*******************************************!*\
  !*** ./src/components/helperFunctions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendAllChildren)\n/* harmony export */ });\nfunction appendAllChildren(parentElement, childrenElements) {\n  for (let i = 0; i < childrenElements.length; i += 1) {\n    parentElement.appendChild(childrenElements[i]);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/components/helperFunctions.js?");

/***/ }),

/***/ "./src/components/hourlyWeatherSection.js":
/*!************************************************!*\
  !*** ./src/components/hourlyWeatherSection.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ \"./src/components/helperFunctions.js\");\n/* harmony import */ var _weather_logic_pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather-logic/pubsub */ \"./src/weather-logic/pubsub.js\");\n/* eslint-disable prefer-destructuring */\n\n\n\nconst hourlyForecastContainer = document.querySelector('.hourly-forecast');\n\nfunction makeHourlyCardDiv(weatherObject, temperatureSign) {\n  const hourlyCardDiv = document.createElement('div');\n  hourlyCardDiv.classList.add('hourly-forecast-card');\n  const hour = document.createElement('h3');\n  hour.textContent = weatherObject.hour;\n  const imageContainer = document.createElement('div');\n  imageContainer.classList.add('weather-image-container');\n  const weatherIcon = document.createElement('img');\n  weatherIcon.classList.add('weather-image');\n  weatherIcon.src = `http://openweathermap.org/img/w/${weatherObject.icon}.png`;\n  weatherIcon.alt = `Icon depicting ${weatherObject.description}`;\n  imageContainer.appendChild(weatherIcon);\n  const description = document.createElement('h3');\n  description.textContent = weatherObject.description;\n  const temperature = document.createElement('h3');\n  temperature.textContent = `${weatherObject.temp} ${temperatureSign}`;\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hourlyCardDiv, [\n    hour,\n    imageContainer,\n    description,\n    temperature,\n  ]);\n  return hourlyCardDiv;\n}\nfunction displayHourlyWeatherForecast([weatherObjectArray, temperatureSign]) {\n  hourlyForecastContainer.textContent = '';\n  for (let i = 0; i < weatherObjectArray.length; i += 1) {\n    const hourlyForeCastDiv = makeHourlyCardDiv(\n      weatherObjectArray[i],\n      // eslint-disable-next-line prettier/prettier\n      temperatureSign,\n    );\n    hourlyForecastContainer.appendChild(hourlyForeCastDiv);\n  }\n}\n_weather_logic_pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe('loadHourlyForecastData', displayHourlyWeatherForecast);\n\n\n//# sourceURL=webpack://weather-app/./src/components/hourlyWeatherSection.js?");

/***/ }),

/***/ "./src/components/todaysWeatherSection.js":
/*!************************************************!*\
  !*** ./src/components/todaysWeatherSection.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ \"./src/components/helperFunctions.js\");\n/* harmony import */ var _weather_logic_pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather-logic/pubsub */ \"./src/weather-logic/pubsub.js\");\n\n\n/* eslint-disable prefer-destructuring */\nconst todayWeatherCardContainer = document.querySelector(\n  // eslint-disable-next-line prettier/prettier\n  '.today-card-container',\n);\nfunction displayTodayWeatherCard([weatherObject, temperatureSign]) {\n  todayWeatherCardContainer.textContent = '';\n  const todayCardDiv = document.createElement('div');\n  todayCardDiv.classList.add('today-card');\n  const cityName = document.createElement('h2');\n  cityName.classList.add('city-name');\n  cityName.textContent = weatherObject.city;\n  const mainWeather = document.createElement('h3');\n  mainWeather.textContent = weatherObject.main;\n  const imageContainer = document.createElement('div');\n  imageContainer.classList.add('today-image-container');\n  const weatherIcon = document.createElement('img');\n  weatherIcon.classList.add('today-image');\n  weatherIcon.src = `http://openweathermap.org/img/w/${weatherObject.icon}.png`;\n  weatherIcon.alt = `icon depicting ${weatherObject.description}`;\n  imageContainer.appendChild(weatherIcon);\n  const descriptionOfWeather = document.createElement('h3');\n  descriptionOfWeather.textContent = weatherObject.description;\n  const temperatureOfToday = document.createElement('h2');\n  temperatureOfToday.classList.add('today-temperature');\n  temperatureOfToday.textContent = `${weatherObject.temp} ${temperatureSign}`;\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todayCardDiv, [\n    cityName,\n    mainWeather,\n    imageContainer,\n    descriptionOfWeather,\n    temperatureOfToday,\n  ]);\n  todayWeatherCardContainer.appendChild(todayCardDiv);\n}\n_weather_logic_pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe('loadTodaysWeather', displayTodayWeatherCard);\n\n\n//# sourceURL=webpack://weather-app/./src/components/todaysWeatherSection.js?");

/***/ }),

/***/ "./src/components/weeklyWeatherSection.js":
/*!************************************************!*\
  !*** ./src/components/weeklyWeatherSection.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ \"./src/components/helperFunctions.js\");\n/* harmony import */ var _weather_logic_pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather-logic/pubsub */ \"./src/weather-logic/pubsub.js\");\n/* eslint-disable prefer-destructuring */\n\n\n\n\nconst weeklyForecastContainer = document.querySelector('.weekly-forecast');\n\nfunction makeWeatherCardDiv([weatherObject, temperatureSign]) {\n  const mainDiv = document.createElement('div');\n  mainDiv.classList.add('weekly-forecast-card');\n  const date = document.createElement('h3');\n  date.textContent = weatherObject.date;\n  const imageContainer = document.createElement('div');\n  imageContainer.classList.add('weather-image-container');\n  const weatherIcon = document.createElement('img');\n  weatherIcon.classList.add('weather-image');\n  weatherIcon.src = `http://openweathermap.org/img/w/${weatherObject.icon}.png`;\n  weatherIcon.alt = `Icon depicting ${weatherObject.description}`;\n  imageContainer.appendChild(weatherIcon);\n  const weatherDescription = document.createElement('h3');\n  weatherDescription.textContent = `${weatherObject.description}`;\n  const minTemp = document.createElement('h3');\n  minTemp.textContent = `Min : ${weatherObject.min} ${temperatureSign}`;\n  const maxTemp = document.createElement('h3');\n  maxTemp.textContent = `Max : ${weatherObject.max} ${temperatureSign}`;\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mainDiv, [\n    date,\n    imageContainer,\n    weatherDescription,\n    minTemp,\n    maxTemp,\n  ]);\n  return mainDiv;\n}\nfunction displayWeeklyWeatherForecast([weeklyWeatherArray, temperatureSign]) {\n  weeklyForecastContainer.textContent = '';\n  for (let i = 0; i < weeklyWeatherArray.length; i += 1) {\n    const weatherDiv = makeWeatherCardDiv([\n      weeklyWeatherArray[i],\n      temperatureSign,\n    ]);\n    weeklyForecastContainer.appendChild(weatherDiv);\n  }\n}\n_weather_logic_pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe('loadNextWeekWeather', displayWeeklyWeatherForecast);\n\n\n//# sourceURL=webpack://weather-app/./src/components/weeklyWeatherSection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.css */ \"./src/weather.css\");\n/* harmony import */ var _weather_logic_weatherController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-logic/weatherController */ \"./src/weather-logic/weatherController.js\");\n/* harmony import */ var _components_todaysWeatherSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todaysWeatherSection */ \"./src/components/todaysWeatherSection.js\");\n/* harmony import */ var _components_extraDetailsSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/extraDetailsSection */ \"./src/components/extraDetailsSection.js\");\n/* harmony import */ var _components_hourlyWeatherSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hourlyWeatherSection */ \"./src/components/hourlyWeatherSection.js\");\n/* harmony import */ var _components_weeklyWeatherSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/weeklyWeatherSection */ \"./src/components/weeklyWeatherSection.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather-logic/pubsub.js":
/*!*************************************!*\
  !*** ./src/weather-logic/pubsub.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pubsub)\n/* harmony export */ });\nconst Pubsub = {\n  events: {},\n\n  subscribe(eventName, eventHandler) {\n    this.events[eventName] = this.events[eventName] || [];\n    this.events[eventName].push(eventHandler);\n  },\n\n  publish(eventName, eventData) {\n    if (this.events[eventName]) {\n      this.events[eventName].forEach((eventHandler) => eventHandler(eventData));\n    }\n  },\n  unsubscribe(eventName, eventHandler) {\n    if (this.events[eventName]) {\n      this.events[eventName] = this.events[eventName].filter(\n        // eslint-disable-next-line comma-dangle\n        (eventHandlerName) => eventHandlerName !== eventHandler\n      );\n    }\n  },\n};\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather-logic/pubsub.js?");

/***/ }),

/***/ "./src/weather-logic/weather-functions.js":
/*!************************************************!*\
  !*** ./src/weather-logic/weather-functions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherTodayByLocation\": () => (/* binding */ getWeatherTodayByLocation),\n/* harmony export */   \"getTodaysWeather\": () => (/* binding */ getTodaysWeather),\n/* harmony export */   \"getNext7DaysOfWeather\": () => (/* binding */ getNext7DaysOfWeather),\n/* harmony export */   \"transformToCurrentWeatherObject\": () => (/* binding */ transformToCurrentWeatherObject),\n/* harmony export */   \"transformToWeeklyWeatherObject\": () => (/* binding */ transformToWeeklyWeatherObject),\n/* harmony export */   \"transformToHourlyWeatherObject\": () => (/* binding */ transformToHourlyWeatherObject)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n/* eslint-disable comma-dangle */\n\n\nasync function getLatitudeAndLongtitude(city) {\n  const weatherResponse = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=712b9aa6ed9063798a216524da6bb71e`,\n    { mode: 'cors' }\n  );\n  const weatherData = await weatherResponse.json();\n  return [weatherData.coord.lat, weatherData.coord.lon];\n}\n\nasync function getWeatherTodayByLocation(city, unit) {\n  const [latitude, longitude] = await getLatitudeAndLongtitude(city);\n  const weatherResponse = await fetch(\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&appid=712b9aa6ed9063798a216524da6bb71e&units=${unit}`,\n    { mode: 'cors' }\n  );\n  const weatherData = await weatherResponse.json();\n  weatherData.city = city;\n  return weatherData;\n}\nfunction convertUnixTimestampToHours(timeStamp) {\n  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(timeStamp);\n  // eslint-disable-next-line prettier/prettier\n  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;\n  return `${date.getHours()}:${minutes}`;\n}\nfunction transformToCurrentWeatherObject(weatherObject) {\n  const { city } = weatherObject;\n  const sunrise = convertUnixTimestampToHours(weatherObject.current.sunrise);\n  const sunset = convertUnixTimestampToHours(weatherObject.current.sunset);\n  const {\n    // eslint-disable-next-line camelcase\n    current: { feels_like },\n  } = weatherObject;\n  const {\n    current: { temp, humidity, pressure },\n  } = weatherObject;\n  // eslint-disable-next-line prefer-destructuring\n  const { main, icon, description } = weatherObject.current.weather[0];\n\n  return {\n    sunrise,\n    sunset,\n    feels_like,\n    humidity,\n    pressure,\n    city,\n    temp,\n    main,\n    description,\n    icon,\n  };\n}\n\nasync function getTodaysWeather(city, unit) {\n  const weatherToday = await getWeatherTodayByLocation(city, unit);\n  const todayWeatherObject = transformToCurrentWeatherObject(weatherToday);\n  return todayWeatherObject;\n}\nfunction convertTimestampToDate(timeStamp) {\n  const monthNames = [\n    'January',\n    'February',\n    'March',\n    'April',\n    'May',\n    'June',\n    'July',\n    'August',\n    'September',\n    'October',\n    'November',\n    'December',\n  ];\n  const currentDate = new Date(timeStamp * 1000);\n  return `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}`;\n}\nfunction makeWeeklyObject(weatherObject) {\n  const date = convertTimestampToDate(weatherObject.dt);\n  // eslint-disable-next-line prefer-destructuring\n  const { icon, description } = weatherObject.weather[0];\n  const {\n    temp: { min, max },\n  } = weatherObject;\n  return {\n    date,\n    icon,\n    description,\n    min,\n    max,\n  };\n}\nfunction transformToWeeklyWeatherObject(weatherObject) {\n  const weeklyWeatherObjects = [];\n  for (let i = 1; i < weatherObject.daily.length; i += 1) {\n    // eslint-disable-next-line prefer-destructuring\n    const weeklyWeatherObject = makeWeeklyObject(weatherObject.daily[i]);\n    weeklyWeatherObjects.push(weeklyWeatherObject);\n  }\n  return weeklyWeatherObjects;\n}\nfunction makeHourlyObject(weatherObject) {\n  const { temp } = weatherObject;\n  // eslint-disable-next-line prefer-destructuring\n  const { icon, description } = weatherObject.weather[0];\n  const hour = convertUnixTimestampToHours(weatherObject.dt);\n  return {\n    hour,\n    temp,\n    icon,\n    description,\n  };\n}\nfunction transformToHourlyWeatherObject(weatherObject) {\n  const hourlyWeatherObjects = [];\n  for (let i = 0; i < 12; i += 1) {\n    const hourlyWeatherObject = makeHourlyObject(weatherObject.hourly[i]);\n    hourlyWeatherObjects.push(hourlyWeatherObject);\n  }\n  return hourlyWeatherObjects;\n}\nasync function getNext7DaysOfWeather(city, unit) {\n  const weatherToday = await getWeatherTodayByLocation(city, unit);\n  const weeklyWeatherObjects = transformToWeeklyWeatherObject(weatherToday);\n  return weeklyWeatherObjects;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather-logic/weather-functions.js?");

/***/ }),

/***/ "./src/weather-logic/weatherController.js":
/*!************************************************!*\
  !*** ./src/weather-logic/weatherController.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-functions */ \"./src/weather-logic/weather-functions.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ \"./src/weather-logic/pubsub.js\");\n\n\n\n\nconst searchInput = document.querySelector('#cityInput');\nconst temperatureButton = document.querySelector('.temperature-button');\n// eslint-disable-next-line no-unused-vars\nlet currentCity = 'London';\nfunction getMatricValue() {\n  // eslint-disable-next-line prefer-destructuring\n  const temperatureValue = temperatureButton.textContent;\n  if (temperatureValue === '°C') {\n    return 'metric';\n  }\n  return 'imperial';\n}\nfunction checkIfSearchFieldIsFilled(e) {\n  e.preventDefault();\n  return e.target.checkValidity();\n}\nasync function changeValueOfCurrentCity() {\n  if (!searchInput.value) return;\n  try {\n    // eslint-disable-next-line no-unused-vars\n    const cityData = await (0,_weather_functions__WEBPACK_IMPORTED_MODULE_0__.getTodaysWeather)(searchInput.value, 'metric');\n    // eslint-disable-next-line prefer-destructuring\n    currentCity = searchInput.value;\n  } catch (e) {\n    console.log(e);\n  }\n}\nasync function loadData(city) {\n  try {\n    const weatherData = await (0,_weather_functions__WEBPACK_IMPORTED_MODULE_0__.getWeatherTodayByLocation)(\n      city,\n      // eslint-disable-next-line prettier/prettier\n      getMatricValue(),\n    );\n    const todayWeather = (0,_weather_functions__WEBPACK_IMPORTED_MODULE_0__.transformToCurrentWeatherObject)(weatherData);\n    const nextWeekWeather = (0,_weather_functions__WEBPACK_IMPORTED_MODULE_0__.transformToWeeklyWeatherObject)(weatherData);\n    const hourlyWeather = (0,_weather_functions__WEBPACK_IMPORTED_MODULE_0__.transformToHourlyWeatherObject)(weatherData);\n    await changeValueOfCurrentCity();\n    _pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publish('loadTodaysWeather', [\n      todayWeather,\n      temperatureButton.textContent,\n    ]);\n    _pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publish('loadExtraDetails', [\n      todayWeather,\n      temperatureButton.textContent,\n    ]);\n    _pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publish('loadHourlyForecastData', [\n      hourlyWeather,\n      temperatureButton.textContent,\n    ]);\n    _pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publish('loadNextWeekWeather', [\n      nextWeekWeather,\n      temperatureButton.textContent,\n    ]);\n  } catch (error) {\n    _pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publish('showCityNotFoundMessage');\n  }\n}\nfunction searchWeatherData(e) {\n  if (!checkIfSearchFieldIsFilled(e)) return;\n  loadData(searchInput.value);\n}\nfunction changeTemperatureUnit(e) {\n  if (e.target.textContent === '°C') {\n    e.target.textContent = '°F';\n  } else {\n    e.target.textContent = '°C';\n  }\n  loadData(currentCity);\n}\nconst form = document.querySelector('form');\nform.addEventListener('submit', searchWeatherData);\ntemperatureButton.addEventListener('click', changeTemperatureUnit);\nloadData(currentCity);\n\n\n//# sourceURL=webpack://weather-app/./src/weather-logic/weatherController.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;