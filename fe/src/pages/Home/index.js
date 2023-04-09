import {
  useContext, useState,
} from 'react';
import { Container, LogoutButton } from './styles';
import { AuthContext } from '../../contexts/AuthContext';

export default function Home() {
  const [user] = useState(() => {
    const loggedUser = localStorage.getItem('user');

    if (loggedUser) {
      return JSON.parse(loggedUser);
    }

    return null;
  });

  const { handleLogout } = useContext(AuthContext);

  function handleLogoutUser() {
    handleLogout();
  }

  return (
    <Container>
      <div className="user-info">
        <span>Login efetuado com sucesso!</span>
        <h2>Bem-vindo {user.name}!</h2>
      </div>
      <LogoutButton type="button" onClick={handleLogoutUser}>
        Sair
      </LogoutButton>
    </Container>
  );
}
