import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from '../../assets/styles/global';
import Routes from '../../Routes/index.routes';

import defaultTheme from '../../assets/styles/default';
import AuthProvider from '../../contexts/AuthContext';
import { Container } from './styles';
import { ToastContainer } from '../Toast/ToastContainer';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthProvider>
          <React.StrictMode>
            <GlobalStyle />
            <ToastContainer />
            <Container>
              <Routes />
            </Container>
          </React.StrictMode>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
