import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SignInForm } from '../../components/SignInForm';
import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn() {
  const { handleLogin } = useContext(AuthContext);

  async function handleSubmit(data) {
    await handleLogin(data);
  }

  return (
    <>
      <div>
        <span>Bem-vindo de volta!</span>
        <h2>Faça login na sua conta</h2>
      </div>

      <SignInForm onSubmit={handleSubmit} />
      <footer>
        <span>Não tem uma conta? <Link to="/register">Cadastre-se</Link></span>
      </footer>
    </>
  );
}
