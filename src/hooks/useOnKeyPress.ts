import { useEffect } from "react";

type OptionsType = {
  targetKey: string;
  callback: () => void;
  prevent?: boolean;
};

export const useOnKeyPress = ({ targetKey, callback, prevent }: OptionsType): void => {
  useEffect(() => {
    if (prevent) return;
    const listener = (e: KeyboardEvent) => {
      if (e.key === targetKey) callback();
    };

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [callback, prevent, targetKey]);
};
