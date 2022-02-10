import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './shared/styles/globalStyles';
import App from 'src/App';
import theme from 'src/configs/theme';

const Root: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

export default Root;
