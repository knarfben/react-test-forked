import {
  ITagProperties,
  ReactHTMLAttributes,
} from "../../../libs/react-helpers/forwardProps/types";
import { themes } from "../../../styles/themes";
import { Maybe } from "../../../types";

export type ContainerFlexSpace = keyof typeof themes.white.sizes;

export interface IContainerFlexProps
  extends ITagProperties<ReactHTMLAttributes<HTMLDivElement>> {
  /** data-attr-name for easier debugging / dom documentation */
  name: string;
  /** Styles */
  className?: string;
  /** Define the flex-grow behavior of the ContainerFlex itself (when used into nested ContainerFlex) */
  flexGrow?: React.CSSProperties["flexGrow"];
  /** Define the direction of items */
  flexDirection?: React.CSSProperties["flexDirection"];
  /** Define items alignment */
  flexAlignItems?: React.CSSProperties["alignItems"];
  /** Define justification of the flex container */
  flexJustifyContent?: React.CSSProperties["justifyContent"];
  /** Define items wrapping behavior */
  flexWrap?: React.CSSProperties["flexWrap"];
  /** Define items gap */
  flexGap?: ContainerFlexSpace;

  /** Define items height */
  height?: React.CSSProperties["height"];
  /** Define items nodes */
  children: React.ReactNode;
  /** Container horizontal padding */
  paddingH?: Maybe<ContainerFlexSpace>;
  /** Container vertical padding */
  paddingV?: Maybe<ContainerFlexSpace>;
  /** Extend the container on the full height */
  fullHeight?: boolean;
  /** Extend the container on the full width */
  fullWidth?: boolean;
  /** Extend the container in flex mode */
  flex?: 0 | 1;
  /** Add a border on each item */
  itemsDebug?: boolean;
  /** Optional onClick */
  onClick?: () => void;
}
