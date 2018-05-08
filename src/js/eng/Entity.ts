import { Component } from "./Component";

export default abstract class Entity {
  public static stage: Component[] = [];

  public static addComponent(component: Component): void {
    Entity.stage.push(component);
  }

  public static removeComponent(component: Component): void {
    const removalIndex: number = Entity.stage.indexOf(component);
    if (removalIndex !== -1) {
      Entity.stage.splice(removalIndex, 1);
    }
  }

  public static removeAllComponents(): void {
    Entity.stage = [];
  }

  public zoneX: number;
  public zoneY: number;

  constructor(placeholder: any) {
    this.zoneX = 0;
    this.zoneY = 0;
  }
}
