"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var c_1 = require("./c");
describe("c", function () {
    it("exists", function () {
        chai_1.assert.exists(c_1.c);
    });
    it("gets a canvas context", function () {
        chai_1.assert.isFunction(c_1.c.fillRect, "canvas context seems to exist");
        chai_1.assert.isString(c_1.c.fillStyle, "canvas context seems to be '2d'");
    });
    describe("html", function () {
        it("has a canvas#project36 element", function () {
            var cnv = window.document.getElementById("project36");
            chai_1.expect(cnv).to.be.an("HTMLCanvasElement");
        });
    });
});
//# sourceMappingURL=c.spec.js.map