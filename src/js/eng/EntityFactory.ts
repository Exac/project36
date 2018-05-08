import Entity from "./Entity";
import { EntityShim } from "./EntityShim";

export default class EntityFactory {
  public static createEntity(entity: any): Entity|EntityShim {
    // return an Entity
    // ...
    return new EntityShim(entity);
  }

  constructor() {
    // this is a static class
  }
}
