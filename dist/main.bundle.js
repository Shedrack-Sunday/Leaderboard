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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index.js */ \"./src/modules/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nconst form = document.querySelector('.form-input');\r\nconst [name, score] = form.elements;\r\nconst objPlayers = new _modules_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nif (localStorage.savedPlayers) {\r\n  objPlayers.players = JSON.parse(localStorage.getItem('savedPlayers'));\r\n}\r\n\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const newPlayer = {\r\n    name: name.value,\r\n    score: score.value,\r\n  };\r\n  objPlayers.addPlayer(newPlayer);\r\n  name.value = '';\r\n  score.value = '';\r\n});\r\n\r\nobjPlayers.displayPlayers();\r\nobjPlayers.populateFields();\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst listPlayers = document.querySelector('.list-players');\r\n\r\nconst Players = class {\r\n  constructor(name, score) {\r\n    this.name = name;\r\n    this.score = score;\r\n    this.players = [];\r\n  }\r\n\r\n  populateFields = () => {\r\n    localStorage.setItem('savedPlayers', JSON.stringify(this.players));\r\n  };\r\n\r\n  removePlayer(player) {\r\n    const result = this.players.filter((b) => b !== player);\r\n    this.players = result;\r\n    this.populateFields();\r\n  }\r\n\r\n  addPlayer = (newPlayer) => {\r\n    this.players.push(newPlayer);\r\n    this.populateFields();\r\n    this.displayPlayers();\r\n  };\r\n\r\n  displayPlayers = () => {\r\n    listPlayers.innerHTML = '';\r\n    if (this.players.length > 0) {\r\n      this.players.map((player) => {\r\n        const playerDiv = document.createElement('tr');\r\n        const elementPlayer = document.createElement('td');\r\n\r\n        elementPlayer.textContent = `${player.name}: ${player.score}`;\r\n\r\n        playerDiv.classList.add('player-container');\r\n        playerDiv.appendChild(elementPlayer);\r\n\r\n        listPlayers.appendChild(playerDiv);\r\n        return listPlayers;\r\n      });\r\n    } else {\r\n      const playerDiv = document.createElement('tr');\r\n      const elementPlayer = document.createElement('td');\r\n      elementPlayer.textContent = 'Add new player';\r\n      playerDiv.classList.add('player-container');\r\n      playerDiv.appendChild(elementPlayer);\r\n      listPlayers.appendChild(playerDiv);\r\n    }\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Players);\n\n//# sourceURL=webpack://leaderboard/./src/modules/index.js?");

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