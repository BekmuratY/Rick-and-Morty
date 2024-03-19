/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://16.02.2024/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myFunction */ \"./src/myFunction.js\");\n/* harmony import */ var _myFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_myFunction__WEBPACK_IMPORTED_MODULE_0__);\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\")\n\n\n\n\n\nfunction hi(greeting){\n    console.log(greeting)\n}\nhi('Hi')\n\n\nconst charactersList = document.getElementById('characters-list');\nconst modal = document.getElementById('modal');\nconst characterDetails = document.getElementById('character-details');\n\n// Функция для отображения списка персонажей\nconst renderCharacters = async () => {\n    try {\n        const response = await fetch('https://rickandmortyapi.com/api/character');\n        const data = await response.json();\n        const characters = data.results;\n        \n        charactersList.innerHTML = ''; // Очищаем контейнер перед отрисовкой\n\n        characters.forEach(character => {\n            const characterCard = document.createElement('div');\n            characterCard.classList.add('character-card');\n            characterCard.innerHTML = `\n                <img src=\"${character.image}\" alt=\"${character.name}\">\n                <div class=\"info\">\n                    <p>Name: ${character.name}</p>\n                    <p>Status: ${character.status}</p>\n                </div>\n            `;\n            characterCard.addEventListener('click', () => {\n                displayModal(character);\n            });\n            charactersList.appendChild(characterCard);\n        });\n    } catch (error) {\n        console.error('Error fetching characters:', error);\n    }\n};\n\n\n// Функция для отображения модального окна с подробной информацией о персонаже\nconst displayModal = (character) => {\n    modal.style.display = 'block';\n    characterDetails.innerHTML = `\n        <h2>${character.name}</h2>\n        <p>Status: ${character.status}</p>\n        <p>Species: ${character.species}</p>\n        <p>Gender: ${character.gender}</p>\n        <p>Origin: ${character.origin.name}</p>\n        <p>Location: ${character.location.name}</p>\n        <img src=\"${character.image}\" alt=\"${character.name}\">\n    `;\n};\n\n\n// Закрытие модального окна\nmodal.addEventListener('click', (event) => {\n    if (event.target === modal || event.target.classList.contains('close')) {\n        modal.style.display = 'none';\n    }\n});\n\n// Загрузка персонажей при загрузке страницы\nwindow.addEventListener('DOMContentLoaded', () => {\n    renderCharacters();\n});\n\n\n\n//# sourceURL=webpack://16.02.2024/./src/index.js?");

/***/ }),

/***/ "./src/myFunction.js":
/*!***************************!*\
  !*** ./src/myFunction.js ***!
  \***************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://16.02.2024/./src/myFunction.js?");

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