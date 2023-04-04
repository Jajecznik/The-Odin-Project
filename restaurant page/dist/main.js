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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\nconst content = document.getElementById('content');\n\n// header\nconst header = document.createElement('header');\nconst ul = document.createElement('ul');\nconst li = document.createElement('li');\n\nul.classList.add('header-ul');\nli.classList.add('header-li');\n\nul.appendChild(li.cloneNode(true));\nul.appendChild(li.cloneNode(true));\nul.appendChild(li.cloneNode(true));\n\nul.children[0].textContent = \"HOME\";\nul.children[0].setAttribute('id', 'home');\nul.children[1].textContent = \"MENU\";\nul.children[1].setAttribute('id', 'menu');\nul.children[2].textContent = \"CONTACT\";\nul.children[2].setAttribute('id', 'contact');\nheader.appendChild(ul);\n\n// main elements\nconst tabContent = document.createElement('div');\ntabContent.setAttribute('id', 'tab-content');\n\n// footer\nconst footer = document.createElement('footer');\nfooter.textContent = \"Copyright \\u00a9 Marcin Leśniak\";\n\ncontent.appendChild(header);\ncontent.appendChild(tabContent);\ncontent.appendChild(footer);\n(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst home = document.getElementById('home');\nconst menu = document.getElementById('menu');\nconst contact = document.getElementById('contact');\n\nhome.addEventListener('click', () => {\n    tabContent.textContent = '';\n    (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nmenu.addEventListener('click', () => {\n    tabContent.textContent = '';\n    (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\ncontact.addEventListener('click', () => {\n    tabContent.textContent = '';\n    (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactTab)\n/* harmony export */ });\nfunction contactTab() {\n    const tabContent = document.getElementById('tab-content');\n\n    // create contact elements\n    const pageTitle = document.createElement('p');\n    const contact = document.createElement('div');\n    const nameContainer = document.createElement('div');\n    const valueContainer = document.createElement('div');\n\n    // page title\n    pageTitle.classList.add('page-title');\n    pageTitle.textContent = \"Contact us\";\n\n    // contact\n    contact.classList.add('contact');\n    nameContainer.classList.add('name-container');\n    valueContainer.classList.add('value-container');\n    contact.appendChild(nameContainer);\n    contact.appendChild(valueContainer);\n\n    for (let i = 0; i < 3; i++) {\n        const name = document.createElement('div');\n        name.classList.add('name');\n        nameContainer.appendChild(name);\n        const value = document.createElement('div');\n        value.classList.add('value');\n        valueContainer.appendChild(value);\n    }\n\n    nameContainer.children[0].textContent = \"Email\";\n    nameContainer.children[1].textContent = \"Phone number\";\n    nameContainer.children[2].textContent = \"Address\";\n    valueContainer.children[0].textContent = \"giga-restaurant@giga.com\";\n    valueContainer.children[1].textContent = \"123 456 789\";\n    valueContainer.children[2].textContent = \"Adamstown PCRN 1ZZ, Pitcairn Islands\";\n\n    tabContent.appendChild(pageTitle);\n    tabContent.appendChild(contact);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homeTab)\n/* harmony export */ });\nfunction homeTab() {\n    const tabContent = document.getElementById('tab-content');\n\n    // create home elements\n    const pageTitle = document.createElement('p');\n    const description = document.createElement('div');\n    const textDesciption = document.createElement('p');\n    const hours = document.createElement('div');\n    const daysContainer = document.createElement('div');\n    const openHoursContainer = document.createElement('div');\n\n    // page title\n    pageTitle.classList.add('page-title');\n    pageTitle.textContent = \"Giga Restaurant\";\n\n    // description\n    description.classList.add('description');\n    textDesciption.classList.add('text-description');\n    textDesciption.textContent = \"Giga Restaurant is a stylish and inviting dining establishment with exceptional customer service and a diverse menu of high-quality dishes. Locally-sourced ingredients are used to create classic and adventurous options, and the well-stocked bar offers craft beers, wines, and cocktails. It's a great choice for quality dining in a welcoming atmosphere.\"\n    description.appendChild(textDesciption);\n\n    // hours\n    hours.classList.add('hours');\n    daysContainer.classList.add('days-container');\n    openHoursContainer.classList.add('hours-container');\n    hours.appendChild(daysContainer);\n    hours.appendChild(openHoursContainer);\n\n    for (let i = 0; i < 3; i++) {\n        const days = document.createElement('p');\n        days.classList.add('days');\n        daysContainer.appendChild(days);\n        const openHours = document.createElement('p');\n        openHours.classList.add('open-hours');\n        openHoursContainer.appendChild(openHours);\n    }\n\n    // adding open days and hours info\n    daysContainer.children[0].textContent = \"Monday - Friday\";\n    daysContainer.children[1].textContent = \"Saturday\";\n    daysContainer.children[2].textContent = \"Sunday\";\n    openHoursContainer.children[0].textContent = \"07:00 - 23:00\";\n    openHoursContainer.children[1].textContent = \"06:00 - 01:00\";\n    openHoursContainer.children[2].textContent = \"08:00 - 23:00\";\n\n    tabContent.appendChild(pageTitle);\n    tabContent.appendChild(description);\n    tabContent.appendChild(hours);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuTab)\n/* harmony export */ });\nfunction menuTab() {\n    const tabContent = document.getElementById('tab-content');\n\n    // create menu elements\n    const pageTitle = document.createElement('p');\n    const menu = document.createElement('div');\n\n    // page title\n    pageTitle.classList.add('page-title');\n    pageTitle.textContent = \"Menu\";\n\n    // menu\n    menu.classList.add('menu');\n\n    for (let i = 0; i < 5; i++) {\n        const container = document.createElement('div');\n        container.classList.add('container');\n        const category = document.createElement('p');\n        const menuContainer = document.createElement('div');\n        const dishContainer = document.createElement('div');\n        const priceContainer = document.createElement('div');\n        category.classList.add('category');\n        menuContainer.classList.add('menu-container');\n        dishContainer.classList.add('dish-container');\n        priceContainer.classList.add('price-container');\n\n        menuContainer.appendChild(dishContainer);\n        menuContainer.appendChild(priceContainer);\n        container.appendChild(category);\n        container.appendChild(menuContainer);\n        menu.appendChild(container);\n\n        for (let i = 0; i < 5; i++) {\n            const dish = document.createElement('p');\n            dish.classList.add('dish');\n            dishContainer.appendChild(dish);\n            const price = document.createElement('p');\n            price.classList.add('price');\n            priceContainer.appendChild(price);\n        }\n    }\n\n    menu.children[0].children[0].textContent = \"Main course\";\n    menu.children[0].children[1].children[0].children[0].textContent = \"Dumplings\";\n    menu.children[0].children[1].children[1].children[0].textContent = \"$9.99\";\n    menu.children[0].children[1].children[0].children[1].textContent = \"Steak\";\n    menu.children[0].children[1].children[1].children[1].textContent = \"$49.99\";\n    menu.children[0].children[1].children[0].children[2].textContent = \"Cabbage roll\";\n    menu.children[0].children[1].children[1].children[2].textContent = \"$13.49\";\n    menu.children[0].children[1].children[0].children[3].textContent = \"Pork chop\";\n    menu.children[0].children[1].children[1].children[3].textContent = \"$19.49\";\n    menu.children[0].children[1].children[0].children[4].textContent = \"Spaghetti\";\n    menu.children[0].children[1].children[1].children[4].textContent = \"$12.99\";\n\n    menu.children[1].children[0].textContent = \"Soup\";\n    menu.children[1].children[1].children[0].children[0].textContent = \"Tomato soup\";\n    menu.children[1].children[1].children[1].children[0].textContent = \"$8.49\";\n    menu.children[1].children[1].children[0].children[1].textContent = \"Broth\";\n    menu.children[1].children[1].children[1].children[1].textContent = \"$7.49\";\n    menu.children[1].children[1].children[0].children[2].textContent = \"Sour rye soup\";\n    menu.children[1].children[1].children[1].children[2].textContent = \"$6.99\";\n    menu.children[1].children[1].children[0].children[3].textContent = \"Mushroom soup\";\n    menu.children[1].children[1].children[1].children[3].textContent = \"$5.99\";\n    menu.children[1].children[1].children[0].children[4].textContent = \"Cauliflower soup\";\n    menu.children[1].children[1].children[1].children[4].textContent = \"$4.49\";\n\n    menu.children[2].children[0].textContent = \"Salad\";\n    menu.children[2].children[1].children[0].children[0].textContent = \"Summer Asian Slaw\";\n    menu.children[2].children[1].children[1].children[0].textContent = \"$3.99\";\n    menu.children[2].children[1].children[0].children[1].textContent = \"Broccoli Salad\";\n    menu.children[2].children[1].children[1].children[1].textContent = \"$7.99\";\n    menu.children[2].children[1].children[0].children[2].textContent = \"Shredded Brussels Sprout Salad\";\n    menu.children[2].children[1].children[1].children[2].textContent = \"$5.99\";\n    menu.children[2].children[1].children[0].children[3].textContent = \"Pasta Salad\";\n    menu.children[2].children[1].children[1].children[3].textContent = \"$2.99\";\n    menu.children[2].children[1].children[0].children[4].textContent = \"Rainbow Orzo Salad\";\n    menu.children[2].children[1].children[1].children[4].textContent = \"$12.99\";\n\n    menu.children[3].children[0].textContent = \"Dessert\";\n    menu.children[3].children[1].children[0].children[0].textContent = \"Ice cream\";\n    menu.children[3].children[1].children[1].children[0].textContent = \"$3.49\";\n    menu.children[3].children[1].children[0].children[1].textContent = \"Poppy seed cake\";\n    menu.children[3].children[1].children[1].children[1].textContent = \"$5.99\";\n    menu.children[3].children[1].children[0].children[2].textContent = \"Cheesecake\";\n    menu.children[3].children[1].children[1].children[2].textContent = \"$6.49\";\n    menu.children[3].children[1].children[0].children[3].textContent = \"Tiramisu\";\n    menu.children[3].children[1].children[1].children[3].textContent = \"$12.99\";\n    menu.children[3].children[1].children[0].children[4].textContent = \"Chocolate cake\";\n    menu.children[3].children[1].children[1].children[4].textContent = \"$8.99\";\n\n    menu.children[4].children[0].textContent = \"Drink\";\n    menu.children[4].children[1].children[0].children[0].textContent = \"Water\";\n    menu.children[4].children[1].children[1].children[0].textContent = \"FREE\";\n    menu.children[4].children[1].children[0].children[1].textContent = \"Coca-Cola\";\n    menu.children[4].children[1].children[1].children[1].textContent = \"$3.99\";\n    menu.children[4].children[1].children[0].children[2].textContent = \"Pepsi\";\n    menu.children[4].children[1].children[1].children[2].textContent = \"$3.99\";\n    menu.children[4].children[1].children[0].children[3].textContent = \"Apple juice\";\n    menu.children[4].children[1].children[1].children[3].textContent = \"$2.49\";\n    menu.children[4].children[1].children[0].children[4].textContent = \"Orange juice\";\n    menu.children[4].children[1].children[1].children[4].textContent = \"$2.49\";\n\n    tabContent.appendChild(pageTitle);\n    tabContent.appendChild(menu);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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