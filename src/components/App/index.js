import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from '../../assets/styles/global';
import Routes from '../../Routes';
import { Container } from './styles';

import defaultTheme from '../../assets/styles/default';
import AuthProvider from '../../contexts/AuthContext';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <BrowserRouter>
          <React.StrictMode>
            <GlobalStyle />
            <Container>
              <Routes />
            </Container>
          </React.StrictMode>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
