import { useEffect, useState, useRef } from 'react';

export const useOnScreen = (options: IntersectionObserverInit) => {
  const navRef: React.RefObject<HTMLElement> = useRef(null);

  const [isOnScreen, setIsOnScreen] = useState(true);

  const intersectionCB: IntersectionObserverCallback = ([entry]) => setIsOnScreen(entry.isIntersecting);

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCB, options);
    const node = navRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  });

  return { isOnScreen, navRef };
};
