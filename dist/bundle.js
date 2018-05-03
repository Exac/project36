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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/eng/Entity.ts":
/*!******************************!*\
  !*** ./src/js/eng/Entity.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity(arg) {
        this.name = arg.toString();
    }
    return Entity;
}());
exports.default = Entity;


/***/ }),

/***/ "./src/js/eng/Game.ts":
/*!****************************!*\
  !*** ./src/js/eng/Game.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var c_1 = __webpack_require__(/*! ./c */ "./src/js/eng/c.ts");
var Game = /** @class */ (function () {
    function Game(ctx) {
        var _this = this;
        this.render = function () {
            // TODO: implement
        };
        this.fit = function () {
            var p = c_1.c.canvas.parentElement;
            c_1.c.canvas.width = p.clientWidth;
            c_1.c.canvas.height = p.clientWidth * (0.5625);
            _this.render();
        };
        this.preventScrollbar = function () {
            // This prevents the scrollbar from appearing on the body element in Desktop
            // browsers.
            c_1.c.canvas.parentElement.style.overflowY = "hidden";
        };
        console.debug(ctx);
        this.preventScrollbar();
        this.fit();
        window.addEventListener("resize", this.fit);
    }
    return Game;
}());
exports.Game = Game;


/***/ }),

/***/ "./src/js/eng/Sprite.ts":
/*!******************************!*\
  !*** ./src/js/eng/Sprite.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import { c } from "./c";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Sprite class deals with drawing the actual graphics. A player sprite may
 * have a separate weapon sprite and a body sprite.
 */
var Sprite = /** @class */ (function () {
    function Sprite() {
        // const json = require("../game/assets/1/sprite.json");
        // console.log("Sprite.constructor()", JSON.stringify(json));
        // private static imagesLoaded: [HTMLImageElement];
        // private static imagesPending: [HTMLImageElement];
        //
        // noinspection JSUnusedLocalSymbols
        this.loaded = false;
        // const full: HTMLImageElement = new Image();
        // full.onload = () => {
        //
        //   c.drawImage(full, 128, 0, 64, 64, 20, 25, 64, 64);
        // };
        // full.src = "src/js/game/assets/1/"+json.file || "src/js/game/assets/0/0.png";
    }
    Sprite.prototype.render = function () {
        // TODO draw this frame onto the canvas when externally called in order.
    };
    return Sprite;
}());
exports.default = Sprite;


/***/ }),

/***/ "./src/js/eng/c.ts":
/*!*************************!*\
  !*** ./src/js/eng/c.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Global declaration of canvas context.
 * @type {CanvasRenderingContext2D}
 */
var c;
exports.c = c;
var eP36 = window.document.getElementById("project36");
// Add a canvas element to the body if one does not exist.
if (eP36 === null) {
    var canvas = document.createElement("canvas");
    canvas.id = "project36";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    exports.c = c = canvas.getContext("2d");
}
else {
    exports.c = c = eP36.getContext("2d");
}


/***/ }),

/***/ "./src/js/game/P36Game.ts":
/*!********************************!*\
  !*** ./src/js/game/P36Game.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var c_1 = __webpack_require__(/*! ../eng/c */ "./src/js/eng/c.ts");
var Entity_1 = __importDefault(__webpack_require__(/*! ../eng/Entity */ "./src/js/eng/Entity.ts"));
var Game_1 = __webpack_require__(/*! ../eng/Game */ "./src/js/eng/Game.ts");
var Sprite_1 = __importDefault(__webpack_require__(/*! ../eng/Sprite */ "./src/js/eng/Sprite.ts"));
var P36Game = /** @class */ (function (_super) {
    __extends(P36Game, _super);
    function P36Game(canvas) {
        var _this = _super.call(this, canvas) || this;
        _this.render = function () {
            c_1.c.fillStyle = "#C0B28C";
            c_1.c.fillRect(0, 0, c_1.c.canvas.width, c_1.c.canvas.height);
            c_1.c.fillStyle = "#DCD0C0";
            c_1.c.fillRect((new Date().getMilliseconds() % c_1.c.canvas.width) / 4, (new Date().getMilliseconds() % c_1.c.canvas.height) / 4, (new Date().getMilliseconds() % c_1.c.canvas.width) / 2, (new Date().getMilliseconds() % c_1.c.canvas.height) / 2);
            c_1.c.fillStyle = "#373737";
            c_1.c.fillRect(10, 10, 10, c_1.c.canvas.height - 20);
            c_1.c.font = "22vw Helvetica, Arial";
            c_1.c.fillStyle = "#F4F4F4";
            c_1.c.textAlign = "center";
            c_1.c.fillText("Project36", c_1.c.canvas.width / 2, c_1.c.canvas.height / 2);
            // TODO: Only render if not already rendering in a loop.
            requestAnimationFrame(_this.render);
        };
        var e = new Entity_1.default("");
        var s = new Sprite_1.default();
        console.debug(e, s);
        _this.render();
        return _this;
    }
    return P36Game;
}(Game_1.Game));
exports.default = P36Game;


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var c_1 = __webpack_require__(/*! ./eng/c */ "./src/js/eng/c.ts");
var P36Game_1 = __importDefault(__webpack_require__(/*! ./game/P36Game */ "./src/js/game/P36Game.ts"));
exports.G = new P36Game_1.default(c_1.c);
//# sourceMappingURL=main.js.map

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map