import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009FE3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#576F89',
    },
    gray: {
      main: '#ADB5BD',
      light: '#F8F9FA',
      light100: '#CED4DA',
    },
    black: {
      main: '#1C222E',
    },
    white: {
      main: '#FFFFFF',
    },
    success: {
      main: '#28A745',
    },
    danger: {
      main: '#DC3545',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xxs: 475,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: {
          fontSize: 36,
          lineHeight: '1.25',
          '@media screen and (max-width: 575px)': {
            fontSize: 22,
          },
        },
        h5: {
          '@media screen and (max-width: 1199px)': {
            fontSize: 22,
          },
          '@media screen and (max-width: 575px)': {
            fontSize: 18,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'capitalize',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", serif',
    body1: {
      color: '#1C222E',
      '@media screen and (max-width: 768px)': {
        fontSize: 14,
      },
    },
  },
});
export default theme;
