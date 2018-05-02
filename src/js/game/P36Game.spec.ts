import { assert, expect } from "chai";
import "mocha";
import { c } from "../eng/c";
import P36Game from "./P36Game";

describe("P36Game", () => {
  describe(".render()", () => {
    it("exists", () => {
      const p: P36Game = new P36Game(c.canvas.getContext("2d")!);
      assert.exists(p.render);
      assert.isFunction(p.render);
    });
    it("has access to the canvas", () => {
      expect(P36Game).to.not.respondTo("render");
    });
  });
});
