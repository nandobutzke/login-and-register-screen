import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GlobalStyle from '../../assets/styles/global';
import Routes from '../../Routes/index.routes';

import defaultTheme from '../../assets/styles/default';
import AuthProvider from '../../contexts/AuthContext';

import { Container } from './styles';
import { ToastContainer } from '../Toast/ToastContainer';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <AuthProvider>
            <React.StrictMode>
              <GlobalStyle />
              <ToastContainer />
              <Container>
                <Routes />
              </Container>
            </React.StrictMode>
          </AuthProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
