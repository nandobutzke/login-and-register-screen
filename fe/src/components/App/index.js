import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from '../../assets/styles/global';
import Routes from '../../Routes/index.routes';

import defaultTheme from '../../assets/styles/default';
import AuthProvider from '../../contexts/AuthContext';

export default function App() {
  fetch('/auth/validateToken').then((response) => console.log(response));

  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <BrowserRouter>
          <React.StrictMode>
            <GlobalStyle />
            <Routes />
          </React.StrictMode>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
