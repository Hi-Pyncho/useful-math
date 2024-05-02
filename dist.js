/**
 * @param  {number} x1 x-coordinate of the first point.
 * @param  {number} y1 y-coordinate of the first point.
 * @param  {number} x2 x-coordinate of the second point.
 * @param  {number} y2 y-coordinate of the second point.
 * @return {number}    distance between the two points.
 */
export default (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);;
