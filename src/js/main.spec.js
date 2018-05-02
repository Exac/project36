"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var Game_1 = require("./eng/Game");
var P36Game_1 = __importDefault(require("./game/P36Game"));
var main_1 = require("./main");
describe("Main", function () {
    describe(".G", function () {
        it("should create game variable G", function () {
            chai_1.assert.exists(main_1.G);
        });
        it("should instantiate G as a new P36Game", function () {
            chai_1.assert.isDefined(main_1.G, "G has a value.");
            chai_1.assert.isObject(main_1.G, "G is an object");
            chai_1.assert.instanceOf(main_1.G, Game_1.Game, "G is a Game");
            chai_1.assert.instanceOf(main_1.G, P36Game_1.default, "G is a P36Game");
        });
        it("is modifiable, and not frozen()", function () {
            chai_1.assert.isNotFrozen(main_1.G, "G is not frozen.");
        });
        it("is not sealed", function () {
            chai_1.assert.isNotSealed(main_1.G);
        });
        it("can't have new properties added to it", function () {
            chai_1.assert.isExtensible(main_1.G);
        });
    });
});
//# sourceMappingURL=main.spec.js.map