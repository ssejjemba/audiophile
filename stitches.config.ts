import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "hsl(22, 65%, 57%)",
      secondary: "hsl(0, 0%, 6%)",
      light: "hsl(21, 94%, 75%)",
      gray400: "hsl(0, 0%, 95%)",
      gray500: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    fontSizes: {
      h1: "56px",
      h2: "40px",
      h3: "32px",
      h4: "28px",
      h5: "24px",
      h6: "18px",
      overline: "14px",
      sub_title: "13px",
      normal: "15px",
    },
    fonts: {
      monorope: "Manrope, sans-serif",
    },
    lineHeights: {
      h1: "58px",
      h2: "44px",
      h3: "36px",
      h4: "38px",
      h5: "33px",
      h6: "24px",
      overline: "19px",
      sub_title: "25px",
      normal: "25px",
    },
    letterSpacings: {
      h1: "2px",
      h2: "1.5px",
      h3: "1.15px",
      h4: "2px",
      h5: "1.7px",
      h6: "1.3px",
      overline: "10px",
      sub_title: "1px",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    // Abbreviated margin properties
    m: (value: any) => ({
      margin: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: any) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: any) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: any) => ({
      borderRadius: value,
    }),
  },
});
