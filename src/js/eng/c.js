"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Global declaration of canvas context.
 * @type {CanvasRenderingContext2D}
 */
var c;
exports.c = c;
var eP36 = window.document.getElementById("project36");
// Add a canvas element to the body if one does not exist.
if (eP36 === null) {
    var canvas = document.createElement("canvas");
    canvas.id = "project36";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    exports.c = c = canvas.getContext("2d");
}
else {
    exports.c = c = eP36.getContext("2d");
}
//# sourceMappingURL=c.js.map