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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_logic_weather_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-logic/weather-functions */ \"./src/weather-logic/weather-functions.js\");\n\n\n(0,_weather_logic_weather_functions__WEBPACK_IMPORTED_MODULE_0__.getWeatherTodayByLocation)('Vancouver', 'metric')\n  .then((response) => {\n    console.log(response);\n    return response;\n  })\n  .then((response) => {\n    response.current.dt = (0,_weather_logic_weather_functions__WEBPACK_IMPORTED_MODULE_0__.convertTimestampToDate)(response.current.dt);\n    console.log(response.current.dt);\n    console.log(response);\n  })\n  .catch((err) => console.log(err));\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather-logic/weather-functions.js":
/*!************************************************!*\
  !*** ./src/weather-logic/weather-functions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherTodayByLocation\": () => (/* binding */ getWeatherTodayByLocation),\n/* harmony export */   \"getLatitudeAndLongtitude\": () => (/* binding */ getLatitudeAndLongtitude),\n/* harmony export */   \"convertTimestampToDate\": () => (/* binding */ convertTimestampToDate)\n/* harmony export */ });\nasync function getLatitudeAndLongtitude(city) {\n  const weatherResponse = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=712b9aa6ed9063798a216524da6bb71e`,\n    // eslint-disable-next-line comma-dangle\n    { mode: 'cors' }\n  );\n  const weatherData = await weatherResponse.json();\n  return [weatherData.coord.lat, weatherData.coord.lon];\n}\n\nasync function getWeatherTodayByLocation(city, unit) {\n  const [latitude, longitude] = await getLatitudeAndLongtitude(city);\n  const weatherResponse = await fetch(\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,alerts&appid=712b9aa6ed9063798a216524da6bb71e&units=${unit}`,\n    // eslint-disable-next-line comma-dangle\n    { mode: 'cors' }\n  );\n  const weatherData = await weatherResponse.json();\n  return weatherData;\n}\nfunction convertTimestampToDate(timeStamp) {\n  const monthNames = [\n    'January',\n    'February',\n    'March',\n    'April',\n    'May',\n    'June',\n    'July',\n    'August',\n    'September',\n    'October',\n    'November',\n    'December',\n  ];\n  const currentDate = new Date(timeStamp * 1000);\n  return `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}`;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather-logic/weather-functions.js?");

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
/******/ 			// no module.id needed
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