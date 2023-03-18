import PropTypes from 'prop-types';
import { StyledLogoutButton } from './styles';

export default function LogoutButton({ onClick }) {
  return (
    <StyledLogoutButton type="button" onClick={onClick}>
      Sair
    </StyledLogoutButton>
  );
}

LogoutButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
