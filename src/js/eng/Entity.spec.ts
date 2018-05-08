import { assert, expect } from "chai";
import { c } from "./c";
import { Component } from "./Component";
import Entity from "./Entity";
import EntityFactory from "./EntityFactory";
import { EntityShim } from "./EntityShim";
import SimpleComponent from "./SimpleComponent";

class E extends Entity {
  constructor(placeholder: any) {super(placeholder); }
}

describe("Entity", () => {
  it("can create simple shim of abstract Entity", () => {
    assert.isOk(new EntityShim({}));
  });
  describe("#stage", () => {
    it("exists as an array", () => {
      assert(Array.isArray(Entity.stage), "is an array.");
    });
    it("is initialized as an empty array", () => {
      expect(Entity.stage).to.have.lengthOf(0, "Entity.stage is not an empty array when tested.");
    });
  });
  describe("#addComponent()", () => {
    it("exists as a function", () => {
      assert.exists(Entity.addComponent);
      assert.isFunction(Entity.addComponent);
    });
    it("adds a Component to the stage", () => {
      const component: Component = new SimpleComponent({});
      const initStageLength = Entity.stage.length;
      Entity.addComponent(component);
      expect(Entity.stage).to.have.lengthOf(initStageLength + 1, "the stage increased length by 1");
    });
  });
  describe("#removeComponent()", () => {
    it("exists as a function", () => {
      assert.exists(Entity.removeComponent);
      assert.isFunction(Entity.removeComponent);
    });
    it("removes a particular element from an array", () => {
      const component: Component = new SimpleComponent({});
      Entity.removeAllComponents();
      assert(Entity.stage.length === 0);
      Entity.addComponent(component);
      assert(Entity.stage.length === 1);
      Entity.removeComponent(component);
      assert(Entity.stage.length === 0);
    });
  });
  describe("#removeAllComponents()", () => {
    it("exists as a function", () => {
      assert.exists(Entity.removeAllComponents);
      assert.isFunction(Entity.removeAllComponents);
    });
    it("removes everything from the stage", () => {
      for (let i = 0; i < 10; i++) {
        Entity.addComponent(new SimpleComponent({}));
      }
      Entity.removeAllComponents();
      assert(Entity.stage.length === 0);
    });
  });
});
