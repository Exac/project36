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
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = require("./Component");
var SimpleComponent = /** @class */ (function (_super) {
    __extends(SimpleComponent, _super);
    function SimpleComponent(placeholder) {
        return _super.call(this, placeholder) || this;
    }
    return SimpleComponent;
}(Component_1.Component));
exports.default = SimpleComponent;
//# sourceMappingURL=SimpleComponent.js.map