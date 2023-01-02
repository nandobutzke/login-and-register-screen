import { Link, useHistory } from 'react-router-dom';
import aboutUsWallpaper from '../../assets/images/about-us-wallpaper.svg';
import { SignInForm } from '../../components/SignInForm';
import LoginService from '../../services/LoginService';
import { Container } from './styles';

export default function SignIn() {
  const history = useHistory();

  async function handleSubmit(data) {
    try {
      const { token } = await LoginService.authenticateUser(data);

      localStorage.setItem('token', JSON.stringify(token));
    } catch {} finally {
      history.push('/inicio');
    }
  }

  return (
    <Container>
      <aside>
        <img src={aboutUsWallpaper} alt="Imagem de uma janela com vários avatares exibidos" />
      </aside>
      <main>
        <div className="login-title">
          <span>Bem-vindo de volta!</span>
          <h2>Faça login na sua conta</h2>
        </div>

        <SignInForm onSubmit={handleSubmit} />
        <footer>
          <span>Não tem uma conta? <Link to="/inicio">Cadastre-se</Link></span>
        </footer>
      </main>
    </Container>
  );
}
