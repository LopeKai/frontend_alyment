"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  config: () => config,
  createTheme: () => createTheme,
  css: () => css,
  getCssText: () => getCssText,
  globalCss: () => globalCss,
  keyframes: () => keyframes,
  styled: () => styled,
  theme: () => theme
});
module.exports = __toCommonJS(index_exports);

// src/styles/index.ts
var import_react = require("@stitches/react");

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFFFFF",
  black: "#000000",
  linkActive: "#1A0DAB",
  linkVisited: "#681DA8",
  blue50: "#E3F2FD",
  blue100: "#BBDEFB",
  blue200: "#90CAF9",
  blue300: "#64B5F6",
  blue400: "#42A5F5 ",
  blue500: "#2196F3",
  blue600: "#1E88E5 ",
  blue700: "#1976D2",
  blue800: "#1565C0",
  blue900: "#1565C0",
  blueA100: "#82B1FF",
  blueA200: "#448AFF",
  blueA400: "#2979FF",
  blueA700: "#2962FF",
  beige50: "#FCFAF6",
  beige100: "#F9F4EC",
  beige200: "#F2EAD9",
  beige300: "#E9DABD",
  beige400: "#DAC7A1",
  beige500: "#B2A180",
  beige600: "#9C8D70",
  beige700: "#867960",
  beige800: "#6F6550",
  beige900: "#413C30",
  amber50: "#FFF8E1",
  amber100: "#FFECB3",
  amber200: "#FFE082",
  amber300: "#FFD54F",
  amber400: "#FFCA28",
  amber500: "#FFC107",
  amber600: "#FFB300",
  amber700: "#FFA000",
  amber800: "#FF8F00",
  amber900: "#FF6F00",
  amberA100: "#FFE57F",
  amberA200: "#FFD740",
  amberA400: "#FFC400",
  amberA700: "#FFAB00",
  grayRiver50: "#EBEEF3",
  grayRiver100: "#CED5DE",
  grayRiver200: "#B0B9C6",
  grayRiver300: "#919DAF",
  grayRiver400: "#919DAF",
  grayRiver500: "#64748B",
  grayRiver600: "#57667A",
  grayRiver700: "#465364",
  grayRiver800: "#37404E",
  grayRiver900: "#37404E",
  gray50: "#F8F8F8",
  gray100: "#EFEFEF",
  gray200: "#E4E4E4",
  gray300: "#D3D3D3",
  gray400: "#AFAFAF",
  gray500: "#8E8E8E",
  gray600: "#666666",
  gray700: "#535353",
  gray800: "#353535",
  gray900: "#151515",
  sucess50: "#E3F7E7",
  sucess100: "#BDECC4",
  sucess200: "#8FDF9E",
  sucess300: "#57D374",
  sucess400: "#00C853",
  sucess500: "#00BD2F",
  sucess600: "#00AD24",
  sucess700: "#009B15",
  sucess800: "#008A00",
  sucess900: "#006A00 ",
  error50: "#FDE7E6",
  error100: "#FFC8B9",
  error200: "#FFA38D",
  error300: "#FF7D5F",
  error400: "#FF5D3D",
  error500: "#FF371B",
  error600: "#FC3117",
  error700: "#FC3117",
  error800: "#FC3117",
  error900: "#C80000",
  green50: "#e0f3f1",
  green100: "#b2e0da",
  green200: "#7fcec3",
  green300: "#49baaa",
  green400: "#34ab98",
  green500: "#2e9b86",
  green600: "#298e79",
  green700: "#237d69",
  green800: "#1e6d5a",
  green900: "#13513d"
};
var space = {
  none: "0",
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6.5rem",
  "5xl": "7.5rem"
};
var media = {
  xs: "(min-width: 320px)",
  sm: "(min-width: 375px)",
  md: "(min-width: 640px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1260px)"
};
var radii = {
  // border radius!!!
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  full: "99999px"
};
var fonts = {
  default: "Inter , sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var shadows = {
  shadow: "-4px -4px 10px 0px #000000, 4px 4px 6px 0px #000000;",
  "shadow-md": "4px 3px 20px 4px #000000, 2px 2px 4px 0px #000000, 4px 4px 10px 0px #000000",
  "shadow-lg": "0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)",
  "shadow-xl": "0rem 1rem 1rem 0rem rgba(0, 0, 0, 0.15)"
};

// src/styles/index.ts
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: "space",
    // Vou conseguir usar o space do token para width e height.
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
    shadows,
    media
  }
});

// src/components/Button/Button.tsx
var Button = styled("button", {
  all: "unset",
  height: 52,
  fontFamily: "$default",
  fontWeight: "$semiBold",
  textAlign: "center",
  borderRadius: ".5rem",
  padding: "$md $xl",
  width: "$2xl",
  border: 0,
  boxSizing: "border-box",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$sm",
  svg: {
    width: 24,
    height: 20
  },
  "&:disabled": {
    backgroundColor: "$gray400",
    cursor: "not-allowed"
  },
  "&:not([disabled]):hover": {
    backgroundColor: "$blue700"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$green700",
        color: "$white",
        "&:not([disabled]):hover": {
          backgroundColor: "$green800"
        }
      },
      secondary: {
        border: "1px solid #417e384d",
        backgroundColor: "transparent",
        borderRadius: ".5rem",
        color: "#000",
        cursor: "not-allowed",
        "&:not([disabled]):hover": {
          backgroundColor: "$gray400"
        }
      },
      tertiary: {
        backgroundColor: "none",
        color: "$gray800",
        border: "1px solid $gray300",
        "&:not([disabled]):hover": {
          backgroundColor: "$gray200",
          border: "none"
        }
      },
      greenDark: {
        backgroundColor: "$green700",
        color: "$white",
        "&:not([disabled]):hover": {
          backgroundColor: "$green800"
        }
      },
      greenLight: {
        backgroundColor: "$green100",
        color: "$green800",
        "&:not([disabled]):hover": {
          backgroundColor: "$green200"
        }
      }
    },
    size: {
      full: {
        minWidth: "100%",
        fontSize: "$md"
      },
      md: {
        minWidth: 382,
        fontSize: "$md"
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "primary"
  }
});
Button.displayName = "Button";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
});
