/**
 * @param  {number} [min]   lower bound (inclusive).
 * @param  {number} [max]   upper bound (exclusive).
 * @return {number} random number.
 */
export default (...args) => {
  if (args.length === 1) return Math.round(Math.random() * args[0]);

  return Math.round(Math.random() * (args[1] - args[0]) + args[0]);
};
