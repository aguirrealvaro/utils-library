import { useState } from "react";

type UseLocalStorageReturnType<T> = [T, (value: T) => void];

export const useLocalStorage = <T>(key: string, initialValue: T): UseLocalStorageReturnType<T> => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};
