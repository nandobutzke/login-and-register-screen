import {
  useEffect,
  createRef, useRef, useState, useCallback,
} from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemovalItemsIds, setPendingRemovalItemsIds] = useState([]);

  const animatedRefs = useRef(new Map());
  const animationEndListeners = useRef(new Map());

  const handleAnimationEnd = useCallback((id) => {
    const removeListener = animationEndListeners.current.get(id);
    removeListener();

    animatedRefs.current.delete(id);
    animationEndListeners.current.delete(id);

    setItems((prevState) => prevState.filter((item) => item.id !== id));
    setPendingRemovalItemsIds((prevState) => prevState.filter((itemId) => itemId !== id));
  }, []);

  useEffect(() => {
    pendingRemovalItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const alreadyHasListener = animationEndListeners.current.has(itemId);
      const elementRef = animatedRef?.current;

      const onAnimationEnd = () => handleAnimationEnd(itemId);
      const removeListener = () => {
        elementRef.removeEventListener('animationend', onAnimationEnd);
      };

      if (elementRef && !alreadyHasListener) {
        elementRef.addEventListener('animationend', onAnimationEnd);
        animationEndListeners.current.set(itemId, removeListener);
      }
    });
  }, [handleAnimationEnd, pendingRemovalItemsIds]);

  useEffect(() => {
    const removeListeners = animationEndListeners.current;

    return () => removeListeners.forEach((removeListener) => removeListener());
  }, [handleAnimationEnd]);

  const handleRemoveToast = useCallback((id) => {
    setPendingRemovalItemsIds((prevState) => [...prevState, id]);
  }, []);

  const getAnimatedRef = useCallback((itemId) => {
    let animatedRef = animatedRefs.current.get(itemId);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback((renderItem) => (
    items.map((item) => {
      const isLeaving = pendingRemovalItemsIds.includes(item.id);

      const animatedRef = getAnimatedRef(item.id);

      return renderItem(item, { isLeaving, animatedRef });
    })
  ), [getAnimatedRef, items, pendingRemovalItemsIds]);

  return {
    setItems,
    renderList,
    pendingRemovalItemsIds,
    handleRemoveToast,
  };
}
