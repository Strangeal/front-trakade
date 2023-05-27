import { createTheme } from '@mui/material/styles';

enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

let theme_from_storage = localStorage.getItem('app_theme');

let mode = theme_from_storage === 'dark' ? ThemeEnum.DARK : ThemeEnum.LIGHT;

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default theme;
