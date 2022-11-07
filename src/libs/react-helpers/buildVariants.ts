import { newBuildVariants } from "build-variants";
import { CSSObject } from "styled-components";

/**
 * Create a BuildVariants instance, typed to use styled-components's `CSSObject`s.
 */
export function buildVariants<TProps extends object>(props: TProps) {
  return newBuildVariants<TProps, CSSObject>(props);
}
