import { assert, expect } from "chai";
import Entity from "./Entity";
import EntityFactory from "./EntityFactory";

describe("EntityFactory", () => {
  describe("#createEntity()", () => {
    it("exists as a function", () => {
      assert.typeOf(EntityFactory.createEntity, "function");
    });
    it("returns an Entity", () => {
      expect(EntityFactory.createEntity("")).to.be.an.instanceof(Entity);
    });
  });
});
