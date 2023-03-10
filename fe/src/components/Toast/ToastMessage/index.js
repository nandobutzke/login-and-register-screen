import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export function ToastMessage({
  message, onRemoveToast,
}) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveToast(message.id);
    }, message.duration || 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveToast]);

  function handleRemoveToast() {
    onRemoveToast(message.id);
  }

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {message.type === 'success' && <img src={checkCircleIcon} alt="Success" />}
      {message.type === 'danger' && <img src={xCircleIcon} alt="Error" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveToast: PropTypes.func.isRequired,
};
