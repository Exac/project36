"use strict";
// import { c } from "./c";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Sprite class deals with drawing the actual graphics. A player sprite may
 * have a separate weapon sprite and a body sprite.
 */
var Sprite = /** @class */ (function () {
    function Sprite() {
        // const json = require("../game/assets/1/sprite.json");
        // console.log("Sprite.constructor()", JSON.stringify(json));
        // private static imagesLoaded: [HTMLImageElement];
        // private static imagesPending: [HTMLImageElement];
        //
        // noinspection JSUnusedLocalSymbols
        this.loaded = false;
        // const full: HTMLImageElement = new Image();
        // full.onload = () => {
        //
        //   c.drawImage(full, 128, 0, 64, 64, 20, 25, 64, 64);
        // };
        // full.src = "src/js/game/assets/1/"+json.file || "src/js/game/assets/0/0.png";
    }
    Sprite.prototype.render = function () {
        // TODO draw this frame onto the canvas when externally called in order.
    };
    return Sprite;
}());
exports.default = Sprite;
//# sourceMappingURL=Sprite.js.map