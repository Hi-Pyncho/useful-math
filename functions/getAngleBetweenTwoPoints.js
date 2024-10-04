/**
 * @param {import('../types').Point} point1
 * @param {import('../types').Point} point2
 * @returns {number}
 */
export default(point1, point2) => Math.atan2(point2.y - point1.y, point2.x - point1.x);
