import { isDefined } from "../../../helpers/isDefined";
import { themes } from "../../../styles/themes";
import { Maybe } from "../../../types";
import { ContainerFlexSpace, IContainerFlexProps } from "./types";

/**
 * Return the flex-wrap default directive according to the flex direction of items.
 */
export function getContainerFlexWrap(
  props: IContainerFlexProps
): React.CSSProperties["flexWrap"] {
  if (isContainerFlexDirectionColumnOriented(props)) {
    return "nowrap";
  }

  return props.flexWrap || "wrap";
}

export function isContainerFlexDirectionColumnOriented(
  props: IContainerFlexProps
): boolean {
  return /column/.test(props.flexDirection || "row");
}

export function getLeftRightPadding(space?: Maybe<ContainerFlexSpace>) {
  if (!isDefined(space)) {
    return {};
  }

  return {
    paddingLeft: themes.white.sizes[space],
    paddingRight: themes.white.sizes[space],
  };
}

export function getTopBottomPadding(space?: Maybe<ContainerFlexSpace>) {
  if (!isDefined(space)) {
    return {};
  }

  return {
    paddingTop: themes.white.sizes[space],
    paddingBottom: themes.white.sizes[space],
  };
}
