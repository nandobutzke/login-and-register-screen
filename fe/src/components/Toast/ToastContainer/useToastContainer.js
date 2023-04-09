import { useEffect } from 'react';
import { toastEventManager } from '../../../utils/toast';
import useAnimatedList from '../../../hooks/useAnimatedList';

export default function useToastContainer() {
  const {
    setItems: setMessages,
    renderList,
    handleRemoveToast,
  } = useAnimatedList();

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
  }, [setMessages]);

  return {
    renderList,
    handleRemoveToast,
  };
}
