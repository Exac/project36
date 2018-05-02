"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var chai_2 = require("chai");
var Sprite_1 = __importDefault(require("./Sprite"));
describe("Sprite", function () {
    describe("#loaded", function () {
        it("is a boolean", function () {
            var s = new Sprite_1.default();
            /* tslint:disable:no-string-literal */
            chai_2.expect(s["loaded"]).to.be.a("boolean");
            /* tslint:enable:no-string-literal */
        });
    });
    describe("#render()", function () {
        it("exists as a function", function () {
            var s = new Sprite_1.default();
            chai_1.assert.exists(s.render);
            chai_1.assert.isFunction(s.render);
        });
    });
});
//# sourceMappingURL=Sprite.spec.js.map