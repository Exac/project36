import { c } from "./c";

export abstract class Game {

  constructor(ctx: CanvasRenderingContext2D) {
    this.preventScrollbar();
    this.fit();
    window.addEventListener("resize", this.fit);
  }

  public render = () => {
    // TODO: implement by calling render IN ORDER for all the game's entities
  }

  /**
   * Fit resizes the canvas to match the screen width. It requires render() to
   * draw the changes onto the new canvas however.
   */
  public fit = (): void => {
    const p = c.canvas.parentElement!;
    c.canvas.width = p.clientWidth;
    c.canvas.height = p.clientWidth * (0.5625);
  }

  /**
   * This prevents the scrollbar from appearing on the body element in Desktop
   * browsers.
   */
  private preventScrollbar = () => {
    c.canvas.parentElement!.style.overflowY = "hidden";
  }
}
