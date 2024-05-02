/**
 * The `amt` parameter is the amount to interpolate between the two numbers.
 * 0.0 is equal to the first number, 0.1 is very near the first number, 0.5 is
 * half-way in between, and 1.0 is equal to the second number. The `lerp()`
 * function is convenient for creating motion along a straight path and for
 * drawing dotted lines.
 * @param  {number} start first value.
 * @param  {number} stop  second value.
 * @param  {number} amt   number.
 * @return {number} lerped value.
 */
export default (start, stop, amt) => {
  return amt * (stop - start) + start;
}
