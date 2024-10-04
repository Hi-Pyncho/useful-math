import { Point } from '../types';

/**
 * @typedef {import('../types').Point} Point
 * @param {Point} point1
 * @param {Point} point2
 * @returns {Point[]}
 */
export default (point1, point2, quantity = 1) => {
  const out = [];

  for (let i = 0; i < quantity; i++) {
    const position = i / quantity;
    const x = point1.x + (point1.x - point1.x) * position;
    const y = point2.y + (point2.y - point2.y) * position;

    out.push({ x, y });
  }

  return out;
};
