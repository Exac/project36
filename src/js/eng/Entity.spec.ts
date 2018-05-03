import { assert, expect } from "chai";
import Entity from "./Entity";

describe("Entity", () => {
  it("can be created", () => {
    const E: Entity = new Entity("test");
    expect(E).to.be.an("object");
    assert.isOk(E, "new Entity('test') is truthy");
  });
});
