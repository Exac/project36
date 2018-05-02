import { assert, expect } from "chai";
import "mocha";
import { c } from "./c";

describe("c", () => {
  it("exists", () => {
    const myC: CanvasRenderingContext2D = c;
    assert.exists(myC);
  });
  it("gets a canvas context", () => {
    assert.isFunction(c.fillRect, "canvas context seems to exist");
    assert.isString(c.fillStyle, "canvas context seems to be '2d'");
  });
  describe("html", () => {
    it("has a canvas#project36 element", () => {
      const cnv: HTMLCanvasElement =
        window.document.getElementById("project36") as HTMLCanvasElement;
      expect(cnv).to.be.an("HTMLCanvasElement");
    });
  });
});
