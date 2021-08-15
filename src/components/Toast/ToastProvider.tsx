import React, { createContext, FunctionComponent, useCallback, useState } from "react";
import { ToastContainer } from "./ToastContainer";
import { ToastType } from ".";

export type ToastContextType = {
  open: (content: string) => void;
  remove: (id: number) => void;
};

export const ToastContext = createContext<ToastContextType>({} as ToastContextType);

let id = 0;

export const ToastProvider: FunctionComponent = ({ children }) => {
  const [toasts, setToast] = useState<ToastType[]>([]);

  const open = useCallback((content: string) => setToast((toasts) => [...toasts, { id: id++, content }]), []);

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
