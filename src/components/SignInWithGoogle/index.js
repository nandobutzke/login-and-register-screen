import { GoogleButton } from './styles';

import googleIcon from '../../assets/images/icons/google-icon.svg';

export default function SignInWithGoogle() {
  return (
    <GoogleButton type="button">
      <img src={googleIcon} alt="Logo do Google, Letra G com várias cores" />
      <span>Ou faça login com o Google</span>
    </GoogleButton>
  );
}
