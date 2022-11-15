import { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  function handleSetLoggedUser(data) {
    setUser({
      id: data.googleId,
    });
  }

  return (
    <AuthContext.Provider value={{ user, handleSetLoggedUser }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
