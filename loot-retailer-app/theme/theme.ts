import { PaletteColorOptions, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomPalette {
    cta: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

export const breakPoints = {
  mobile: 768,
  tablet: 1169,
  desktop: 1170,
};

export const colors = {
  //deep blue
  primary: '#003871',
  //dark grey
  secondary: '#535252',
  //gold
  accent: '#f5cf00',
  //light blue
  cta: '#3C78B4',
  //light green ish
  lightGreen: '#90d243',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  success: '#8bc34a',
  white: '#ffffff',
  card: '#DAEEFF',
};

export const fontWeights = {
  thin: 300,
  regular: 400,
  bold: 500,
  extraBold: 700,
};

export const paddingMarginPoints = {};

export const theme = {
  breakPoints,
  colors,
  fontWeights,
};

// https://mui.com/material-ui/customization/default-theme/
//https://mui.com/material-ui/customization/theme-components/
//https://mui.com/material-ui/react-button/
export const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      //Darkish blue
      main: colors.primary,
    },
    secondary: {
      // dark grey
      main: colors.secondary,
    },
    error: {
      main: colors.error, // Red
    },
    warning: {
      main: colors.warning, // Orange
    },
    info: {
      main: colors.info, // Blue
    },
    success: {
      main: colors.success, // Light Green
    },
    cta: {
      main: colors.cta, // Light Green
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors.cta,
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.cta,
          },
          '&.Mui-disabled': {
            color: colors.secondary,
          },
          '&.MuiButton-outlined': {
            color: colors.cta,
            backgroundColor: colors.white,
            border: `1px solid ${colors.cta}`,
          },
        },
      },
    },
  },
});
