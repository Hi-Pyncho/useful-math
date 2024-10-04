/**
 * @param {import('../types').Rect} pos1
 * @param {import('../types').Rect} pos2
 */
export default (pos1, pos2) => {
  return !(
    pos1.x + pos1.width < pos2.x ||
    pos1.x > pos2.x + pos2.width ||
    pos1.y + pos1.height < pos2.y ||
    pos1.y > pos2.y + pos2.height
  );
}
