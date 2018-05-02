/**
 * Global declaration of canvas context.
 * @type {CanvasRenderingContext2D}
 */
let c: CanvasRenderingContext2D;
const eP36: HTMLCanvasElement =
  window.document.getElementById("project36") as HTMLCanvasElement;

// Add a canvas element to the body if one does not exist.
if (eP36 === null) {
  const canvas = document.createElement("canvas");
  canvas.id = "project36";
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(canvas);
  c = canvas.getContext("2d")!;
} else {
  c = eP36.getContext("2d")!;
}
export { c };
