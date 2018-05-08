"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity(placeholder) {
        this.zoneX = 0;
        this.zoneY = 0;
    }
    Entity.addComponent = function (component) {
        Entity.stage.push(component);
    };
    Entity.removeComponent = function (component) {
        var removalIndex = Entity.stage.indexOf(component);
        if (removalIndex !== -1) {
            Entity.stage.splice(removalIndex, 1);
        }
    };
    Entity.removeAllComponents = function () {
        Entity.stage = [];
    };
    Entity.stage = [];
    return Entity;
}());
exports.default = Entity;
//# sourceMappingURL=Entity.js.map