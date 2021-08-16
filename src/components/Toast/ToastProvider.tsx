import React, { createContext, FunctionComponent, useCallback, useRef, useState } from "react";
import { ToastContainer } from "./ToastContainer";
import { ToastType, ToastOptions } from ".";

export type ToastContextType = {
  open: (content: string, options?: ToastOptions) => void;
  remove: (id: number) => void;
};

export const ToastContext = createContext<ToastContextType>({} as ToastContextType);

export const ToastProvider: FunctionComponent = ({ children }) => {
  const timeoutRef = useRef<number>(0);
  const [toasts, setToast] = useState<ToastType[]>([]);

  const open = useCallback((content: string, options: ToastOptions = { permanent: false }) => {
    setToast((toasts) => [...toasts, { id: timeoutRef.current++, content, ...options }]);
  }, []);

  const remove = useCallback((id: number) => {
    setToast((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ open, remove }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};
