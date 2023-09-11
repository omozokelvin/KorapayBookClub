import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#f5f6fa',
    },
    success: {
      main: '#39cb8a',
    },
    primary: {
      main: '#387dff',
    },
    secondary: {
      main: '#387dff',
    },
    error: {
      main: '#fe5632',
    },
    common: {
      black: '#1D2541',
      white: '#F1F5F7',
    },
    warning: {
      main: '#fea602',
    },
    info: {
      main: '#56ccf2',
    },
    grey: {
      100: '#B2B2B2',
      200: '#333333',
      300: '#828284',
      400: '#29292b',
      500: '#edf1fc',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '24px',
          boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
          borderRadius: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
          fontSize: '1rem',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '0.75rem',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: '#F5F7F9',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          height: '56px',
          padding: '16.5px 14px',
        },
      },
    },
  },
});

theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: '1.625rem',
  fontWeight: 700,
  lineHeight: '2.125rem',
  letterSpacing: '2px',
};

export default theme;
