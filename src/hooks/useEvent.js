import { useEffect } from 'react';

export default (event, handler, passive = false) => {
  useEffect(() => {
    window.addEventListener(event, handler, passive);

    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
};
