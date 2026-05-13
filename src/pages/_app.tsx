import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { petrolTheme, GlobalStyle } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={petrolTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}