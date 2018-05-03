"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __importDefault(require("./Entity"));
var EntityFactory = /** @class */ (function() {
  function EntityFactory() {
    // this is a static class
  }
  EntityFactory.createEntity = function(entity) {
    // return an Entity
    // ...
    return new Entity_1.default(entity);
  };
  return EntityFactory;
})();
exports.default = EntityFactory;
//# sourceMappingURL=EntityFactory.js.map
