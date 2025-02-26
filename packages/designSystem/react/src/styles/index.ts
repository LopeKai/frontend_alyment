import { createStitches, defaultThemeMap } from '@stitches/react'
import {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    media,
    radii,
    shadows,
    space,
  } from '@alyment-testkaique/tokens'
  
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
    themeMap: {
      ...defaultThemeMap,
      height: 'space', // Vou conseguir usar o space do token para width e height.
      width: 'space',
    },
    theme: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
      radii,
      space,
      shadows,
      media,
    },
  })
  