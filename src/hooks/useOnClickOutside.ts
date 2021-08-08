import { useEffect, MutableRefObject } from 'react';

type OptionsType = {
  ref: MutableRefObject<HTMLDivElement | HTMLButtonElement | null>;
  callback: () => void;
  prevent?: boolean;
};

export const useOnClickOutside = ({ ref, callback, prevent }: OptionsType): void => {
  useEffect(() => {
    if (prevent) return;

    const listener = (e: MouseEvent | TouchEvent) => {
      if (ref.current?.contains(e.target as Node)) return;
      callback();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback, prevent]);
};
