import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { StyledButton } from './styles';

export default function Button({
  children, type, isLoading, disabled,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
};
