import { assert } from "chai";
import { expect } from "chai";
import Sprite from "./Sprite";

describe("Sprite", () => {
  describe("#loaded", () => {
    it("is a boolean", () => {
      const s: Sprite = new Sprite();
      /* tslint:disable:no-string-literal */
      expect(s["loaded"]).to.be.a("boolean");
      /* tslint:enable:no-string-literal */
    });
  });
  describe("#render()", () => {
    it("exists as a function", () => {
      const s: Sprite = new Sprite();
      assert.exists(s.render);
      assert.isFunction(s.render);
    });
  });
});
