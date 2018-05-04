import { assert, expect } from "chai";
import SimpleComponent from "./SimpleComponent";

describe("SimpleComponent", () => {
  describe("#zoneX", () => {
    it("exists as a number", () => {
      const COMP: SimpleComponent = new SimpleComponent({});
      assert.exists(COMP.zoneX);
      expect(COMP.zoneX).to.be.a("number");
    });
  });
  describe("#zoneY", () => {
    it("exists as a number", () => {
      const COMP: SimpleComponent = new SimpleComponent({});
      assert.exists(COMP.zoneX);
      expect(COMP.zoneY).to.be.a("number");
    });
  });
  describe("#order", () => {
    it("exists as a public member variable", () => {
      assert.exists(new SimpleComponent("").order);
    });
  });
});
