import { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { api } from '../services/api';
import toast from '../utils/toast';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (user && token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      return true;
    }

    const googleUser = JSON.parse(user);

    if (googleUser && googleUser.googleId) {
      return true;
    }

    return false;
  });

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

      history.push('/login');
    } catch {
      toast({
        type: 'danger',
        text: 'Falha na operação.',
      });
    }
  }

  async function handleRegisterUser(data) {
    try {
      const user = await api.post('/users', data);

      await handleLogin(user.data);
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

  function handleSetGoogleLoggedUser(googleUserData) {
    try {
      if (googleUserData) {
        localStorage.setItem('user', JSON.stringify(googleUserData));

        setAuthenticated(true);

        history.push('/inicio');
      }
    } catch (error) {
      if (error?.code === 'ERR_NETWORK') {
        toast({
          type: 'danger',
          text: 'Falha no servidor! Tente novamente mais tarde.',
        });
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        handleLogin,
        handleLogout,
        handleRegisterUser,
        handleSetGoogleLoggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
