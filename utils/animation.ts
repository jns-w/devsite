export function lerp(start: number, end: number, t: number) {
  if (Math.abs(start - end) < 0.001) return end;
  return start * (1 - t) + end * t;
}

function RGBAtoObject(RGBA: string) {
  const [r, g, b, a] = RGBA.slice(RGBA.indexOf("(")+1, -1).split(",");
  return { r: Number(r), g: Number(g), b: Number(b), a: Number(a) };
}

export function lerpRGB(start: string, end: string, t: number) {
  const startObj = RGBAtoObject(start);
  const endObj = RGBAtoObject(end);
  const r = lerp(startObj.r, endObj.r, t);
  const g = lerp(startObj.g, endObj.g, t);
  const b = lerp(startObj.b, endObj.b, t);
  const a = lerp(startObj.a, endObj.a, t);
  return `rgba(${r},${g},${b},${a})`;

}