"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var c_1 = require("./c");
var Game = /** @class */ (function () {
    function Game(ctx) {
        this.render = function () {
            // TODO: implement by calling render IN ORDER for all the game's entities
        };
        /**
         * Fit resizes the canvas to match the screen width. It requires render() to
         * draw the changes onto the new canvas however.
         */
        this.fit = function () {
            var p = c_1.c.canvas.parentElement;
            c_1.c.canvas.width = p.clientWidth;
            c_1.c.canvas.height = p.clientWidth * (0.5625);
        };
        /**
         * This prevents the scrollbar from appearing on the body element in Desktop
         * browsers.
         */
        this.preventScrollbar = function () {
            c_1.c.canvas.parentElement.style.overflowY = "hidden";
        };
        this.preventScrollbar();
        this.fit();
        window.addEventListener("resize", this.fit);
    }
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map