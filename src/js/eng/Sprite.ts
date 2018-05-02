import { c } from "./c";

/**
 * The Sprite class deals with drawing the actual graphics. A player sprite may
 * have a separate weapon sprite and a body sprite.
 */
export default class Sprite {
  private loaded = false; //

  constructor() {
    // const json = require("../game/assets/dog-1/sprite.json");
    // console.log("Sprite.constructor()", JSON.stringify(json));

    // const full: HTMLImageElement = new Image();
    // full.onload = () => {
    //
    //   c.drawImage(full, 128, 0, 64, 64, 20, 25, 64, 64);
    // };
    // full.src = "src/js/game/assets/dog-1/"+json.file || "src/js/game/assets/default/default.png";
  }

  public render() {
    // TODO draw this frame onto the canvas when externally called in order.
  }
}
