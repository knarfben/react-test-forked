import { PropertiesNonNullable } from "../../types";
import { isDefined } from "../isDefined";

/**
 * Return the object `obj` without null or undefined values.
 * Use with caution!
 */
export function filterNullOrUndefinedValues<O extends object>(
  obj: O,
  omitKeys?: Array<keyof O>
): PropertiesNonNullable<O> {
  return Array.from(Object.entries(obj)).reduce((acc, [key, value]) => {
    const isKeyOmitted = omitKeys && omitKeys.includes(key as keyof O);

    if (!isKeyOmitted && !isDefined(value)) {
      return acc;
    }

    return {
      ...acc,
      [key]: value,
    };
  }, {} as PropertiesNonNullable<O>);
}
