import { colors, fontFamily } from './variables';

export const themes = {
  theme: {
    colors: {
      primary: `${colors.primary[0]}`,
      secondary: `${colors.primary[0]}`,
    },
    breakpoints: [37.5, 56.25, 75, 112.5], // min-width: 600px, 900px, 1200px, 1800px
  },
  muiTheme: {
    palette: {
      primary1Color: `${colors.primary[0]}`,
      accent1Color: `${colors.primary[0]}`,
      textColor: `${colors.gray[0]}`,
    },
    fontFamily: `${fontFamily.fontPrimary}`,
    checkbox: {
      boxColor: `${colors.gray[0]}`,
    },
    radioButton: {
      borderColor: `${colors.gray[0]}`,
    },
  },
};
