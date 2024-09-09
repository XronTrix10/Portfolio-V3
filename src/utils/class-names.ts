import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * joins classes together.
 * @param {string[]} classes the classes to join.
 * @returns {string} the joined classes string.
 */
const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

/**
 * joins tailwind classes together.
 * @param {ClassValue[]} inputs the tailwind classes to join.
 * @returns {string} the joined tailwind classes string.
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export default classNames;
