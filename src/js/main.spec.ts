import { assert} from "chai";
import "mocha";
import { Game } from "./eng/Game";
import P36Game from "./game/P36Game";
import { G } from "./main";

describe("Main", () => {
  describe(".G", () => {
    it("should create game variable G", () => {
      assert.exists(G);
    });
    it("should instantiate G as a new P36Game", () => {
      assert.isDefined(G, "G has a value.");
      assert.isObject(G, "G is an object");
      assert.instanceOf(G, Game, "G is a Game");
      assert.instanceOf(G, P36Game, "G is a P36Game");
    });
    it("is modifiable, and not frozen()", () => {
      assert.isNotFrozen(G, "G is not frozen.");
    });
    it("is not sealed", () => {
      assert.isNotSealed(G);
    });
    it("can't have new properties added to it", () => {
      assert.isExtensible(G);
    });
  });
});
