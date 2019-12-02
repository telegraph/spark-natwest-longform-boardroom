import { useRef, useEffect, useState } from 'react';

export default (margin = '0px') => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const { current } = ref;
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isInView);
    }, { rootMargin: margin });
    if (current) observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  }, [margin]);
  return [ref, isInView];
};

