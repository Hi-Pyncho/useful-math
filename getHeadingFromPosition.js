/**
 * Calculates the angle a 2D vector makes with the positive x-axis.
 *
 * By convention, the positive x-axis has an angle of 0. Angles increase in
 * the clockwise direction.
 * @param  {number} x
 * @param  {number} y
 * @return {number} vector angle
*/
export default (x, y) => Math.atan2(y, x);
