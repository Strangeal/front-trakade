import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Outlet } from 'react-router-dom';
import theme from './components/Theme';

function App() {
  const getCurrentTheme = () => {
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    localStorage.setItem('app_theme', theme);

    return theme;
  };

  useEffect(() => {
    const element = document.documentElement;
    const theme = getCurrentTheme();
    element.classList.add(theme);
  }, []);

  return (
    <div className="App bg-[#f8f8fa] dark:text-gray-100 dark:bg-slate-900 transition-all duration-300 ease-in-out">
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <Outlet />
        </ProSidebarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
