import { themes } from "..";
import { createGlobalStyle } from "styled-components";

// Import App global / librairies styles
import "../../globalStyles.css";
import { buildVariants } from "../../../libs/react-helpers/buildVariants";

interface IGlobalStyleProps {}

/**
 * Initialize the global styles of the app.
 */
const GlobalStyle = createGlobalStyle<IGlobalStyleProps>((props) => {
  return (
    buildVariants(props)
      /**
       * Reset CSS.
       * Adapter from https://meyerweb.com/eric/tools/css/reset/
       */
      .css({
        "*": {
          boxSizing: "border-box",
        },
        "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video":
          {
            margin: "0",
            padding: "0",
            border: "0",
            fontSize: "100%",
            font: "inherit",
            verticalAlign: "baseline",
          },
        "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section":
          {
            display: "block",
          },
        body: {
          fontSize: themes.white.fontSizes.default,
          fontWeight: "normal",
          lineHeight: 1,
          backgroundColor:
            themes.white.colors.pds["tenb-colors-background-page-alt"],
        },
        "ol, ul, li": {
          listStyle: "none",
          listStyleType: "none",
          padding: 0,
          margin: 0,
        },
        table: { borderCollapse: "collapse", borderSpacing: "0" },
      })

      .css({
        "html, body": {
          width: "100%",
          height: "100%",
          overflow: "hidden",
        },

        body: {
          fontFamily: "Barlow",
          fontWeight: 500,
          fontSize: themes.white.fontSizes.default,
          color: "#041E42",
        },

        "#app": {
          height: "100%",
          padding: themes.white.sizes["tenb-space-16"],
        },
      })
      .end()
  );
});

export default GlobalStyle;
