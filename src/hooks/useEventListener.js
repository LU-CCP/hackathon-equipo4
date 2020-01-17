import { useLayoutEffect, useRef } from 'react';

import useEffectOnce from './useEffectOnce';

const useEventListener = (eventName, handler, element) => {
  const handlerRef = useRef(handler);

  useLayoutEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffectOnce(() => {
    const events = Array.isArray(eventName) ? eventName : [eventName];
    const eventListener = event => handlerRef.current(event);

    events.forEach(event => element.addEventListener(event, eventListener));

    return () =>
      events.forEach(event =>
        element.removeEventListener(event, eventListener)
      );
  });
};

export default useEventListener;
