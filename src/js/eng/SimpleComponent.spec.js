"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var SimpleComponent_1 = __importDefault(require("./SimpleComponent"));
describe("SimpleComponent", function () {
    describe("#zoneX", function () {
        it("exists as a number", function () {
            var COMP = new SimpleComponent_1.default({});
            chai_1.assert.exists(COMP.zoneX);
            chai_1.expect(COMP.zoneX).to.be.a("number");
        });
    });
    describe("#zoneY", function () {
        it("exists as a number", function () {
            var COMP = new SimpleComponent_1.default({});
            chai_1.assert.exists(COMP.zoneX);
            chai_1.expect(COMP.zoneY).to.be.a("number");
        });
    });
    describe("#order", function () {
        it("exists as a public member variable", function () {
            chai_1.assert.exists(new SimpleComponent_1.default("").order);
        });
    });
});
//# sourceMappingURL=SimpleComponent.spec.js.map