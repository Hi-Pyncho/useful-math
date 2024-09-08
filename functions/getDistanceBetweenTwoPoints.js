/**
 * @typedef {Object} Point
 * @property {number} Point.x
 * @property {number} Point.y
 */

/**
 * @param  {Point} point1
 * @param  {Point} point2
 */

export default (point1, point2) => {
  const a = point1.x - point2.x;
  const b = point1.y - point2.y;

  return Math.hypot(a, b);
}
