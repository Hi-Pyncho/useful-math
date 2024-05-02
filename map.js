import constrain from "./constrain.js";

/**
 * @param  {number} value  the value to be remapped.
 * @param  {number} start1 lower bound of the value's current range.
 * @param  {number} stop1  upper bound of the value's current range.
 * @param  {number} start2 lower bound of the value's target range.
 * @param  {number} stop2  upper bound of the value's target range.
 * @param  {boolean} [withinBounds] constrain the value to the newly mapped range.
 * @return {number} remapped number.
 */
export default (value, start1, stop1, start2, stop2, withinBounds = false) => {
  const newval = (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return constrain(newval, start2, stop2);
  } else {
    return constrain(newval, stop2, start2);
  }
};
