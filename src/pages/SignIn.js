import { Link } from 'react-router-dom';
import aboutUsWallpaper from '../assets/images/about-us-wallpaper.svg';
import { SignInForm } from '../components/SignInForm';

export default function SignIn() {
  return (
    <>
      <aside>
        <img src={aboutUsWallpaper} alt="Imagem de uma janela com vários avatares exibidos" />
      </aside>
      <main>
        <div className="login-title">
          <span>Bem-vindo de volta!</span>
          <h2>Faça login na sua conta</h2>
        </div>

        <SignInForm />
        <footer>
          <span>Não tem uma conta? <Link to="/inicio">Cadastre-se</Link></span>
        </footer>
      </main>
    </>
  );
}
