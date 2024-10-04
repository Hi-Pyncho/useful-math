/**
 * get point from angle in radians
 * @param  {number} angle
 * @param  {number} [length=1]
 * @returns {import('../types').Point}
 */
export default (angle, length = 1) => {
  return {
    x: Math.cos(angle) * length,
    y: Math.sin(angle) * length
  };
};
