import { useRef } from "react";

export const useConstructor = (callback: () => void): void => {
  const ref = useRef<boolean>(false);
  if (ref.current) return;
  callback();
  ref.current = false;
};
