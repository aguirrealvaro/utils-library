import { useCallback, useRef } from "react";

export const useDebounce = <F extends (...args: any[]) => void>(func: F, waitFor: number): F => {
  const timeout = useRef(0);

  return useCallback(
    (...args: any[]) => {
      window.clearTimeout(timeout.current);
      timeout.current = window.setTimeout(() => func(...args), waitFor);
    },
    [func, waitFor]
  ) as F;
};
