import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Container } from './styles';

export default function Home() {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <Container>
      <h1>Teste</h1>
    </Container>
  );
}
