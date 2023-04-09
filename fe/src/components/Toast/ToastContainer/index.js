import { memo } from 'react';
import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';
import useToastContainer from './useToastContainer';

function ToastContainer() {
  const {
    renderList, handleRemoveToast,
  } = useToastContainer();

  return (
    <Container>
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveToast={handleRemoveToast}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
        />
      ))}

    </Container>
  );
}

export default memo(ToastContainer);
