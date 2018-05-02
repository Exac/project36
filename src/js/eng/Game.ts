import { c } from "./c";

export abstract class Game {

  constructor(canvas: CanvasRenderingContext2D) {
    console.debug("Game.constructor()");
    this.preventScrollbar();
    this.fit();
    window.addEventListener("resize", this.fit);
  }

  public render = () => {
    console.debug("Game.render()");
  }

  public fit = (): void => {
    console.debug("Game.fit()");
    const p = c.canvas.parentElement!;
    c.canvas.width = p.clientWidth;
    c.canvas.height = p.clientWidth * (0.5625);
    this.render();
  }

  private preventScrollbar = () => {
    // This prevents the scrollbar from appearing on the body element in Desktop
    // browsers.
    c.canvas.parentElement!.style.overflowY = "hidden";
  }
}
