import Entity from "./Entity";

export default class EntityFactory {
  public static createEntity(entity: string): Entity {
    // return an Entity
    // ...
    return new Entity(entity);
  }

  constructor() {
    // this is a static class
  }
}
