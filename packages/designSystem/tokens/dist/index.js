"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  media: () => media,
  radii: () => radii,
  shadows: () => shadows,
  space: () => space
});
module.exports = __toCommonJS(index_exports);

// src/colors.ts
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

// src/space.ts
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

// src/media.ts
var media = {
  xs: "(min-width: 320px)",
  sm: "(min-width: 375px)",
  md: "(min-width: 640px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1260px)"
};

// src/radii.ts
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

// src/fonts.ts
var fonts = {
  default: "Inter , sans-serif",
  code: "monospace"
};

// src/font-sizes.ts
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

// src/font-weights.ts
var fontWeights = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700"
};

// src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/shadows.ts
var shadows = {
  shadow: "-4px -4px 10px 0px #000000, 4px 4px 6px 0px #000000;",
  "shadow-md": "4px 3px 20px 4px #000000, 2px 2px 4px 0px #000000, 4px 4px 10px 0px #000000",
  "shadow-lg": "0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)",
  "shadow-xl": "0rem 1rem 1rem 0rem rgba(0, 0, 0, 0.15)"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  media,
  radii,
  shadows,
  space
});
