"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Entity_1 = __importDefault(require("./Entity"));
var EntityFactory_1 = __importDefault(require("./EntityFactory"));
describe("EntityFactory", function () {
    describe("#createEntity()", function () {
        it("exists as a function", function () {
            chai_1.assert.typeOf(EntityFactory_1.default.createEntity, "function");
        });
        it("returns an Entity", function () {
            chai_1.expect(EntityFactory_1.default.createEntity("")).to.be.an.instanceof(Entity_1.default);
        });
    });
});
//# sourceMappingURL=EntityFactory.spec.js.map