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
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var chai_2 = require("chai");
var c_1 = require("./c");
var Game_1 = require("./Game");
/**
 * There are no direct tests for Game because it is an
 * abstract class. At runtime, it is compiled down to
 * a normal class and thus cannot be tested. Tests
 * aimed at this class can be found in derived classes
 * such as `P36Game`.
 *
 * In order to test it, `Game` is extended to `G`, and
 * mock-tested that way.
 */
var G = /** @class */ (function (_super) {
    __extends(G, _super);
    function G() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return G;
}(Game_1.Game));
describe("Game", function () {
    describe("#render()", function () {
        it("exists", function () {
            var p = new G(c_1.c.canvas.getContext("2d"));
            chai_2.assert.exists(p.render);
            chai_2.assert.isFunction(p.render);
        });
        it("has void return type for render()", function () {
            chai_1.expect(G).to.not.respondTo("render");
        });
    });
    describe("#constructor()", function () {
        it("calls fit()", function () {
            var game = new G(c_1.c);
            var containerW = c_1.c.canvas.parentElement.offsetWidth;
            var canvasW = c_1.c.canvas.offsetWidth;
            chai_2.assert.equal(canvasW, containerW, "canvas and container have same widths");
            game.fit();
            // If this next assertion is successful, fit() was probably called.
            chai_2.assert.equal(canvasW, c_1.c.canvas.offsetWidth, "fit does not change size of " +
                "container when called again.");
        });
    });
    describe("#fit()", function () {
        it("does it's job silently", function () {
            var game = new G(c_1.c);
            game.fit();
            var expectedWidth = c_1.c.canvas.parentElement.clientWidth;
            chai_1.expect(c_1.c.canvas.width).equal(expectedWidth);
        });
    });
    describe("#preventScrollBar()", function () {
        it("hides the scroll bar", function () {
            chai_2.assert.equal("hidden", c_1.c.canvas.parentElement.style.overflowY, "Vertical scroll-bar is hidden via css.");
        });
    });
});
//# sourceMappingURL=Game.spec.js.map