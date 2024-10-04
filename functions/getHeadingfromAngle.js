/**
 * Rotates a 2D vector to a specific angle without changing its magnitude.
 *
 * By convention, the positive x-axis has an angle of 0. Angles increase in
 * the clockwise direction.
 * @param  {number} angle
 * @param  {number} magnitude
 * @return {import('../types').Point} point position
*/
export default (angle, magnitude) => {
  const x = magnitude * Math.cos(angle);
  const y = magnitude * Math.sin(angle);

  return { x, y };
}
