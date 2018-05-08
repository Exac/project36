import { expect } from "chai";
import { assert } from "chai";
import { c } from "./c";
import { Game } from "./Game";

/**
 * There are no direct tests for Game because it is an
 * abstract class. At runtime, it is compiled down to
 * a normal class and thus cannot be tested. Tests
 * aimed at this class can be found in derived classes
 * such as `P36Game`.
 *
 * In order to test it, `Game` is extended to `G`, and
 * mock-tested that way.
 */

class G extends Game {}

describe("Game", () => {
  describe("#render()", () => {
    it("exists", () => {
      const p: G = new G(c.canvas.getContext("2d")!);
      assert.exists(p.render);
      assert.isFunction(p.render);
    });
    it("has void return type for render()", () => {
      expect(G).to.not.respondTo("render");
    });
  });
  describe("#constructor()", () => {
    it("calls fit()", () => {
      const game = new G(c);
      const containerW = c.canvas.parentElement!.offsetWidth;
      const canvasW = c.canvas.offsetWidth;
      assert.equal(canvasW, containerW, "canvas and container have same widths");
      game.fit();
      // If this next assertion is successful, fit() was probably called.
      assert.equal(canvasW, c.canvas.offsetWidth, "fit does not change size of " +
        "container when called again.");
    });
  });
  describe("#fit()", () => {
    it("does it's job silently", () => {
      const game = new G(c);
      game.fit();
      const expectedWidth = c.canvas.parentElement!.clientWidth;
      expect(c.canvas.width).equal(expectedWidth);
    });
  });
  describe("#preventScrollBar()", () => {
    it("hides the scroll bar", () => {
      assert.equal("hidden", c.canvas.parentElement!.style.overflowY,
        "Vertical scroll-bar is hidden via css.");
    });
  });
});
