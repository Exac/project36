"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var c_1 = require("./c");
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
//# sourceMappingURL=Game.js.map