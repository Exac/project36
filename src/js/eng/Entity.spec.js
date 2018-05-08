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
var chai_1 = require("chai");
var Entity_1 = __importDefault(require("./Entity"));
var EntityShim_1 = require("./EntityShim");
var SimpleComponent_1 = __importDefault(require("./SimpleComponent"));
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E(placeholder) {
        return _super.call(this, placeholder) || this;
    }
    return E;
}(Entity_1.default));
describe("Entity", function () {
    it("can create simple shim of abstract Entity", function () {
        chai_1.assert.isOk(new EntityShim_1.EntityShim({}));
    });
    describe("#stage", function () {
        it("exists as an array", function () {
            chai_1.assert(Array.isArray(Entity_1.default.stage), "is an array.");
        });
        it("is initialized as an empty array", function () {
            chai_1.expect(Entity_1.default.stage).to.have.lengthOf(0, "Entity.stage is not an empty array when tested.");
        });
    });
    describe("#addComponent()", function () {
        it("exists as a function", function () {
            chai_1.assert.exists(Entity_1.default.addComponent);
            chai_1.assert.isFunction(Entity_1.default.addComponent);
        });
        it("adds a Component to the stage", function () {
            var component = new SimpleComponent_1.default({});
            var initStageLength = Entity_1.default.stage.length;
            Entity_1.default.addComponent(component);
            chai_1.expect(Entity_1.default.stage).to.have.lengthOf(initStageLength + 1, "the stage increased length by 1");
        });
    });
    describe("#removeComponent()", function () {
        it("exists as a function", function () {
            chai_1.assert.exists(Entity_1.default.removeComponent);
            chai_1.assert.isFunction(Entity_1.default.removeComponent);
        });
        it("removes a particular element from an array", function () {
            var component = new SimpleComponent_1.default({});
            Entity_1.default.removeAllComponents();
            chai_1.assert(Entity_1.default.stage.length === 0);
            Entity_1.default.addComponent(component);
            chai_1.assert(Entity_1.default.stage.length === 1);
            Entity_1.default.removeComponent(component);
            chai_1.assert(Entity_1.default.stage.length === 0);
        });
    });
    describe("#removeAllComponents()", function () {
        it("exists as a function", function () {
            chai_1.assert.exists(Entity_1.default.removeAllComponents);
            chai_1.assert.isFunction(Entity_1.default.removeAllComponents);
        });
        it("removes everything from the stage", function () {
            for (var i = 0; i < 10; i++) {
                Entity_1.default.addComponent(new SimpleComponent_1.default({}));
            }
            Entity_1.default.removeAllComponents();
            chai_1.assert(Entity_1.default.stage.length === 0);
        });
    });
});
//# sourceMappingURL=Entity.spec.js.map