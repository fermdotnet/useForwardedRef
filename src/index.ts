import { useEffect, useRef, ForwardedRef } from 'react';

export default (ref: ForwardedRef<unknown>) => {
  const innerRef = useRef(null);

  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(innerRef.current);
      } else {
        ref.current = innerRef.current;
      }
    }
  });

  return innerRef;
};
