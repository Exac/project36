"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Entity is the visual component of something on the map. It holds the sprites and positions them
 * on the screen.
 */
var Component = /** @class */ (function () {
    function Component(placeholder) {
        this.calcX = function () {
            // TODO: figure out where to draw the sprite based on the part of the zone the screen is drawing
            return 0;
        };
        this.calcY = function () {
            // TODO: figure out where to draw the sprite based on the part of the zone the screen is drawing
            return 0;
        };
        this.zoneX = 0;
        this.zoneY = 0;
        this.order = 0;
        this.x = this.calcX();
        this.y = this.calcY();
    }
    return Component;
}());
exports.Component = Component;
//# sourceMappingURL=Component.js.map