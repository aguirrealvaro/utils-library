import { useEffect, MutableRefObject } from "react";

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

    document.addEventListener("click", listener);
    document.addEventListener("touchend", listener);

    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("touchend", listener);
    };
  }, [ref, callback, prevent]);
};
