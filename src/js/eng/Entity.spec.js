"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Entity_1 = __importDefault(require("./Entity"));
describe("Entity", function () {
    it("can be created", function () {
        var E = new Entity_1.default("test");
        chai_1.expect(E).to.be.an("object");
        chai_1.assert.isOk(E, "new Entity('test') is truthy");
    });
});
//# sourceMappingURL=Entity.spec.js.map