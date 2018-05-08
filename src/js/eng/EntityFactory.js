"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntityShim_1 = require("./EntityShim");
var EntityFactory = /** @class */ (function () {
    function EntityFactory() {
        // this is a static class
    }
    EntityFactory.createEntity = function (entity) {
        // return an Entity
        // ...
        return new EntityShim_1.EntityShim(entity);
    };
    return EntityFactory;
}());
exports.default = EntityFactory;
//# sourceMappingURL=EntityFactory.js.map