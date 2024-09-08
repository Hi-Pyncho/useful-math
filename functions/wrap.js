/**
 * @param  {number} value
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
export default (value, min, max) => {
  const range = max - min;

  return (min + ((((value - min) % range) + range) % range));
};
