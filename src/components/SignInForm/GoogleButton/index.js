import PropTypes from 'prop-types';
import { StyledGoogleButton } from './styles';

import googleIcon from '../../../assets/images/icons/google-icon.svg';

export default function GoogleButton({ onClick, disabled }) {
  return (
    <StyledGoogleButton
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <img src={googleIcon} alt="Logo do Google, Letra G com várias cores" />
      <span>Ou faça login com o Google</span>
    </StyledGoogleButton>
  );
}

GoogleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
