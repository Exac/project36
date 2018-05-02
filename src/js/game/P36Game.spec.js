"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var c_1 = require("../eng/c");
var P36Game_1 = __importDefault(require("./P36Game"));
describe("P36Game", function () {
    describe(".render()", function () {
        it("exists", function () {
            var p = new P36Game_1.default(c_1.c.canvas.getContext("2d"));
            chai_1.assert.exists(p.render);
            chai_1.assert.isFunction(p.render);
        });
        it("has access to the canvas", function () {
            chai_1.expect(P36Game_1.default).to.not.respondTo("render");
        });
    });
});
//# sourceMappingURL=P36Game.spec.js.map