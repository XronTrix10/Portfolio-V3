/**
 * joins classes together.
 * @param {string[]} classes the classes to join.
 * @returns {string} the joined classes string.
 */
const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

export default classNames;
