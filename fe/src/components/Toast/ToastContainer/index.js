import { useCallback, useEffect, useState } from 'react';
import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';

import { toastEventManager } from '../../../utils/toast';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);
    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveToast = useCallback((id) => {
    setMessages((prevMessages) => prevMessages.filter(
      (message) => message.id !== id,
    ));
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveToast={handleRemoveToast}
        />
      ))}

    </Container>
  );
}
