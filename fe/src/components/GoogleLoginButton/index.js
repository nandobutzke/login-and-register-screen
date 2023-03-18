import PropTypes from 'prop-types';
import googleIcon from '../../assets/images/icons/google-icon.svg';
import { StyledGoogleButton } from './styles';

export default function GoogleLoginButton({ onClick }) {
  return (
    <StyledGoogleButton
      type="button"
      onClick={onClick}
    >
      <img src={googleIcon} alt="Logo do Google, Letra G com várias cores" />
      <span>Ou faça login com o Google</span>
    </StyledGoogleButton>
  );
}

GoogleLoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
