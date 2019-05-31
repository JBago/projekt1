/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Elementi {\r\n    constructor(naziv, godina) {\r\n        this.naziv = naziv;\r\n        this.godina = godina;\r\n    }\r\n}\r\n\r\nclass Park extends Elementi {\r\n    constructor(naziv, godina, povrsina, brojDrveca){\r\n        super(naziv, godina);\r\n        this.povrsina=povrsina;\r\n        this.brojDrveca=brojDrveca;\r\n        this.gustocaDrveca=brojDrveca/povrsina;\r\n    }\r\n}\r\n\r\nclass Ulica extends Elementi {\r\n    constructor(naziv, godina, duzina, velicina){\r\n        super(naziv, godina);\r\n        this.velicina=velicina || 3;\r\n        this.duzina=duzina;\r\n    }\r\n}\r\n\r\nconst parkovi = [\r\n    new Park('Park skojevaca', 1987, 0.2, 215), \r\n    new Park('Pionirski Park', 1894, 2.9, 3541), \r\n    new Park('Omladinski Park', 1953, 0.4, 949),\r\n    ];\r\n    \r\nconst ulice = [\r\n    new Ulica('Trg Oslobođenja', 1971, 1.1, 4), \r\n    new Ulica('Gat proleterskih brigada', 1982, 2.7, 1), \r\n    new Ulica('Beogradska', 1974, 0.8), \r\n    new Ulica('Lenjingradska', 1982, 2.5, 2),\r\n    new Ulica('Trg Oktobarske revolucije', 1973, 4, 4),\r\n    ];\r\n\r\nconst ispis = (park, ulica) => {\r\n    let prosjecnaStarost=0; \r\n    let ukupnaDuzina=0;\r\n    let prosjecnaDuzina=0;\r\n    uliceIz80ih=[];\r\n    console.log(\"Parkovi: \");\r\n    park.forEach(element => {\r\n        prosjecnaStarost+=2019-element.godina;\r\n        console.log(element.naziv);\r\n        console.log('Godina: ' + element.godina);\r\n        console.log('Površina: ' + element.povrsina + \"km\");\r\n        console.log('Broj drveća: ' + element.brojDrveca);\r\n        console.log('Gustoća: ' + element.gustocaDrveca + '\\n');    \r\n    });\r\n    console.log(\"Ulice: \");\r\n    ulica.forEach(element => {\r\n        ukupnaDuzina+=element.duzina; \r\n        console.log(element.naziv);\r\n        if(parseInt((element.godina%100)/10)==8) uliceIz80ih.push(element);\r\n        console.log('Godina: ' + element.godina);\r\n        console.log('Dužina: ' + element.duzina + \"km\");\r\n        console.log('Veličina: ' + element.velicina  + '\\n');\r\n    });\r\n    prosjecnaStarost=(prosjecnaStarost/park.length).toFixed(2);\r\n    ukupnaDuzina=ukupnaDuzina.toFixed(2);\r\n    prosjecnaDuzina=(ukupnaDuzina/ulica.length).toFixed(2);\r\n    return {\r\n        prosjecnaStarost,\r\n        ukupnaDuzina,\r\n        prosjecnaDuzina,\r\n        uliceIz80ih\r\n    }\r\n};\r\n\r\nconst ispis2 = (park, tip, izraz) => {\r\n    park.sort(function(a, b){return b[tip] - a[tip] });\r\n    park.forEach(element => {\r\n        console.log(element.naziv + ' - ' + element[tip] + izraz);\r\n    });\r\n    console.log('');\r\n}\r\n\r\nconst izvjestaj = (park, ulica) => {\r\n    const podaci = ispis(park,ulica);\r\n    console.log('Prosječna starost parkova je: ' + podaci.prosjecnaStarost + 'godine \\n');\r\n    ispis2(park, \"brojDrveca\", \" drveca\");\r\n    ispis2(park, \"povrsina\", \"km^2\");\r\n    console.log('Ukupna dužina ulica je: ' + podaci.ukupnaDuzina + 'km \\n');\r\n    console.log('Prosječna dužina ulica je: ' + podaci.prosjecnaDuzina + 'km \\n');\r\n    console.log('Ulice iz 80ih:');\r\n    podaci.uliceIz80ih.forEach(element => {\r\n        console.log(element.naziv + ' - ' + element.godina);\r\n    });\r\n}\r\n\r\nizvjestaj(parkovi, ulice);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });