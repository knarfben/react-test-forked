import { Perhaps } from "../../types";

/**
 * Returns a type predicate to remove undefined or nullable values of an array.
 *
 * Usage:
 * arr.filter(isDefined)
 */
export function isDefined<T>(o: Perhaps<T>): o is T {
  return o !== undefined && o !== null;
}

/**
 * Returns a type predicate to filter falsy values of an array.
 *
 * Usage:
 * arr.filter(isNotFalsy)
 */
export function isNotFalsy<T>(o: Perhaps<T | boolean | string>): o is T {
  return o !== undefined && o !== null && o !== false && o !== "";
}

/**
 * Return true if defined and not equal to an empty string.
 */
export function isDefinedAndNotEmptyString(
  value: Perhaps<string>
): value is string {
  if (!isDefined(value)) {
    return false;
  }

  if (String(value.trim()) === "") {
    return false;
  }

  return true;
}
