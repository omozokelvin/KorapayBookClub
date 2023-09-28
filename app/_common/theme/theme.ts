import { createTheme } from '@mui/material/styles';
import { Ubuntu } from 'next/font/google';

export const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#fefefe',
    },
    primary: {
      main: '#65C100',
    },
    error: {
      main: '#D0011B',
    },
    grey: {
      100: '#AAAAAA',
    },
  },
  typography: {
    fontFamily: ubuntu.style.fontFamily,
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#EEEEEE',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          '@media (min-width:600px)': {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
        //min widwth
      },
    },
  },
});

theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: '0.875rem',
  fontWeight: 400,
  letterSpacing: '3px',
  textTransform: 'uppercase',
};

theme.typography.caption = {
  ...theme.typography.caption,
  lineHeight: '15px',
};

theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  fontSize: '1.125rem',
  fontWeight: 700,
  lineHeight: 'normal',
};

theme.typography.subtitle2 = {
  ...theme.typography.subtitle2,
  fontWeight: 700,
  lineHeight: 'normal',
};

export default theme;
