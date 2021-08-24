import { useEffect, useRef } from "react";

export const usePreviousValue = <T>(newVal: T): T => {
  const previous = useRef<T>(newVal);

  useEffect(() => {
    previous.current = newVal;
  });

  return previous.current;
};
