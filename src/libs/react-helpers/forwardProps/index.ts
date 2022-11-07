import { filterNullOrUndefinedValues } from "../../../helpers/filterNullOrUndefinedValues";
import { pick } from "lodash";
import { DATA_TESTID_ATTRIBUTE } from "./constants";
import { ITagProperties } from "./types";

/**
 * Forward props from a ITagProperties inherits props object.
 *
 * Usage:
 *
 * <div {...forwardProps(
 *   # the current props
 *   props,
 *
 *   # props keys to forward to the children
 *   extraPropsKeys,
 *
 *   # props custom implementation to forward to the children
 *   # (generally used to avoid to overlap props with the final spread)
 * )} />
 *
 * Example:
 *
 * <div {...forwardProps(
 *   props,
 *   ['variant'],
 *   { onClick: (e) => ... }
 * )} />
 */
export function forwardProps<T extends ITagProperties<any>>(
  props: T,
  extraPropsKeys?: Array<keyof T>,
  extraPropsKeysFns?: Partial<Record<keyof T, typeof props[keyof T]>>
) {
  // Since we have a generic T used for the extraPropsKeys keyof, we consider
  // having here a ITagProperties<T> to be able to forward props to the children.
  // Missing props will be removed by filterNullOrUndefinedValues.
  const props_ = props as unknown as ITagProperties<T>;

  return filterNullOrUndefinedValues({
    // className to get styles applyed automatically
    className: props_.className,

    styles: props_.styles,

    [DATA_TESTID_ATTRIBUTE]: props_[DATA_TESTID_ATTRIBUTE],

    // props of the html tag itself
    ...props_.tagAttributes,

    // extra props forwarded to the children
    ...pick(props, extraPropsKeys || []),

    // customized props implementation forwarded to the children
    ...extraPropsKeysFns,
  });
}
