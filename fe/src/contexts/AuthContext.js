import {
  createContext, useCallback, useEffect, useState,
} from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { api } from '../services/api';
import toast from '../utils/toast';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      return true;
    }

    return false;
  });
  const [googleUser, setGoogleUser] = useState([]);

  async function handleLogin(data) {
    try {
      const { data: { user, token } } = await api.post('/sessions', data);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));

      setAuthenticated(true);

      history.push('/inicio');
    } catch (error) {
      if (error?.code === 'ERR_NETWORK') {
        toast({
          type: 'danger',
          text: 'Falha no servidor! Tente novamente mais tarde.',
        });
        return;
      }

      toast({
        type: 'danger',
        text: 'Dados inválidos! Por favor, verifique o e-mail/senha e tente novamente.',
      });
    }
  }

  function handleLogout() {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      api.defaults.headers.Authorization = undefined;

      setAuthenticated(false);
      googleLogout();

      history.push('/');
    } catch {
      toast({
        type: 'danger',
        text: 'Falha na operação.',
      });
    }
  }

  async function handleRegisterUser(data) {
    try {
      await api.post('/users', data);

      const loginData = data;

      delete loginData.name;

      await handleLogin(loginData);
    } catch (error) {
      if (error?.code === 'ERR_NETWORK') {
        toast({
          type: 'danger',
          text: 'Falha no servidor! Tente novamente mais tarde.',
        });
        return;
      }

      toast({
        type: 'danger',
        text: 'E-mail já cadastrado!',
      });
    }
  }

  const handleSetGoogleUser = useCallback(async () => {
    if (googleUser && googleUser.length !== 0) {
      try {
        const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser?.access_token}`, {
          headers: {
            Authorization: `Bearer ${googleUser.access_token}`,
            Accept: 'application/json',
          },
        });

        localStorage.setItem('token', JSON.stringify(googleUser.access_token));
        localStorage.setItem('user', JSON.stringify(response.data));

        history.push('/inicio');
      } catch {}
    }
  }, [history, googleUser]);

  useEffect(() => {
    handleSetGoogleUser();
  }, [handleSetGoogleUser]);

  const login = useGoogleLogin({
    onSuccess: (response) => {
      setGoogleUser(response);
      setAuthenticated(true);
    },
    onError: () => {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro! Por favor, tente novamente.',
      });
    },
  });

  async function handleGoogleLogin() {
    try {
      login();
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro! Por favor, tente novamente.',
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        handleLogin,
        handleGoogleLogin,
        googleUser,
        handleLogout,
        handleRegisterUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
