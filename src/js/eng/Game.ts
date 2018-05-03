import { c } from "./c";

export abstract class Game {

  protected constructor(ctx: CanvasRenderingContext2D) {
    console.debug(ctx);
    this.preventScrollbar();
    this.fit();
    window.addEventListener("resize", this.fit);
  }

  public render = () => {
    // TODO: implement
  }

  public fit = (): void => {
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
