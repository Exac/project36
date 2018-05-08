import { c } from "../eng/c";
import Entity from "../eng/Entity";
import { EntityShim } from "../eng/EntityShim";
import { Game } from "../eng/Game";
import Sprite from "../eng/Sprite";

export default class P36Game extends Game {
  constructor(canvas: CanvasRenderingContext2D) {
    super(canvas);
    const e: Entity = new EntityShim("");
    const s: Sprite = new Sprite();

    this.render();
  }

  public render = () => {
    c.fillStyle = "#C0B28C";
    c.fillRect(0, 0, c.canvas.width, c.canvas.height);
    c.fillStyle = "#DCD0C0";
    c.fillRect(
      (new Date().getMilliseconds() % c.canvas.width) / 4,
      (new Date().getMilliseconds() % c.canvas.height) / 4,
      (new Date().getMilliseconds() % c.canvas.width) / 2,
      (new Date().getMilliseconds() % c.canvas.height) / 2,
    );
    c.fillStyle = "#373737";
    c.fillRect(10, 10, 10, c.canvas.height - 20);
    c.font = "22vw Helvetica, Arial";
    c.fillStyle = "#F4F4F4";
    c.textAlign = "center";
    c.fillText("Project36", c.canvas.width / 2, c.canvas.height / 2);
    // TODO: Only render if not already rendering in a loop.
    requestAnimationFrame(this.render);
  }
}
