/**
 *  Generates a unique key for each element in an array.
 *  @param {string} str  The string to generate the key from.
 *  @param {number} index  The index of the element.
 *  @returns {string}  The generated key.
 */
export const generateKey = (str: string, index: number): string => {
  return `${str}-${index}`;
};
