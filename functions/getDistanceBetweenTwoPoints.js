/**
 * @param {import('../types').Point} point1
 * @param {import('../types').Point} point2
 * @returns {number}
 */

export default (point1, point2) => {
  const a = point1.x - point2.x;
  const b = point1.y - point2.y;

  return Math.hypot(a, b);
}
