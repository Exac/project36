import Sprite from "./Sprite";

/**
 * Entity is the visual component of something on the map. It holds the sprites and positions them
 * on the screen.
 */
export abstract class Component {
  public static cast: [Sprite];

  public zoneX: number;
  public zoneY: number;
  public order: number | string;

  private x: number;
  private y: number;

  constructor(placeholder: any) {
    this.zoneX = 0;
    this.zoneY = 0;
    this.order = 0;

    this.x = this.calcX();
    this.y = this.calcY();
  }

  private calcX = (): number => {
    // TODO: figure out where to draw the sprite based on the part of the zone the screen is drawing
    return 0;
  }

  private calcY = (): number => {
    // TODO: figure out where to draw the sprite based on the part of the zone the screen is drawing
    return 0;
  }
}
