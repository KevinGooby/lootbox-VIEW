import { muiTheme, theme } from '@/theme/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { AppContextProvider } from '@/contexts/AppContextProvider';
import 'react-toastify/dist/ReactToastify.css';
import '@/global.css';
import { Toast } from '@/components/Toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <Component {...pageProps} />
          <Toast />
        </MuiThemeProvider>
      </ThemeProvider>
    </AppContextProvider>
  );
}