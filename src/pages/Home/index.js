import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Home() {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <h1>Teste</h1>
  );
}
