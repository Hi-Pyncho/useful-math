/**
 * @param  {number} num    number to constrain.
 * @param  {number} min  minimum limit.
 * @param  {number} max maximum limit.
 * @return {number} constrained number.
 */
export default (num, min, max) => {
  return Math.max(Math.min(num, max), min);
};
