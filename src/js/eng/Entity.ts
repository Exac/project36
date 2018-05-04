import { Component } from "./Component";

export default class Entity {
  public static stage: [Component];

  public name: string;

  constructor(placeholder: any) {
    this.name = placeholder.toString();
  }
}
