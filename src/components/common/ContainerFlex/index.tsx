import styled from "styled-components";
import {
  getContainerFlexWrap,
  getLeftRightPadding,
  getTopBottomPadding,
} from "./functions";
import { IContainerFlexProps } from "./types";
import * as React from "react";
import { buildVariants } from "../../../libs/react-helpers/buildVariants";
import { forwardProps } from "../../../libs/react-helpers/forwardProps";
import { themes } from "../../../styles/themes";

// FIXME - Get logger from a DS context
const logger = console;

const Div = styled.div<IContainerFlexProps>((props) => {
  const styles = buildVariants(props)
    .css({
      // Flex
      display: "flex",
      flex: props.flex,
      flexGrow: props.flexGrow,
      flexDirection: props.flexDirection,
      alignItems: props.flexAlignItems,
      justifyContent: props.flexJustifyContent,
      flexWrap: getContainerFlexWrap(props),
      gap: props.flexGap && themes.white.sizes[props.flexGap],
      height: props.height,
      backgroundColor: themes.white.colors.pds["tenb-colors-background-page"],
      padding: themes.white.sizes["tenb-space-16"],

      // Size
      ...(props.fullHeight ? { height: "100%" } : {}),
      ...(props.fullWidth ? { width: "100%" } : {}),

      // Paddings
      ...getLeftRightPadding(props.paddingH),
      ...getTopBottomPadding(props.paddingV),
    })

    .variant("itemsDebug", props.itemsDebug || false, {
      true: {
        "> *": {
          outline: "1px dotted red",
        },
      },

      false: {},
    })

    .end();

  if (props.itemsDebug) {
    logger.info(styles);
  }

  return styles;
});

const ContainerFlex = React.forwardRef<HTMLDivElement, IContainerFlexProps>(
  (props, ref) => {
    return (
      <Div
        data-attr-name={props.name}
        {...forwardProps(props, [
          "flex",
          "flexGrow",
          "flexDirection",
          "flexAlignItems",
          "flexJustifyContent",
          "flexWrap",
          "flexGap",
          "paddingH",
          "paddingV",
          "fullHeight",
          "fullWidth",
          "height",
          "itemsDebug",
          "onClick",
        ])}
        ref={ref}
      >
        {props.children}
      </Div>
    );
  }
);

export default ContainerFlex;
