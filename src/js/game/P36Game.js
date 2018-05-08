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
var c_1 = require("../eng/c");
var EntityShim_1 = require("../eng/EntityShim");
var Game_1 = require("../eng/Game");
var Sprite_1 = __importDefault(require("../eng/Sprite"));
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
        var e = new EntityShim_1.EntityShim("");
        var s = new Sprite_1.default();
        _this.render();
        return _this;
    }
    return P36Game;
}(Game_1.Game));
exports.default = P36Game;
//# sourceMappingURL=P36Game.js.map