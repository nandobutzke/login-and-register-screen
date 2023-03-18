import {
  useContext, useState,
} from 'react';
import { Container } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import LogoutButton from '../../components/LogoutButton';

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
      <LogoutButton onClick={handleLogoutUser}>Sair</LogoutButton>
    </Container>
  );
}
