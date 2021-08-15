import React, { createContext, FunctionComponent, useCallback, useState } from "react";
import { ToastContainer } from "./ToastContainer";
import { ToastType } from ".";

export type ToastContextType = {
  open: (content: string) => void;
};

export const ToastContext = createContext<ToastContextType>({} as ToastContextType);

let id = 0;

export const ToastProvider: FunctionComponent = ({ children }) => {
  const [toasts, setToast] = useState<ToastType[]>([]);

  const open = useCallback((content: string) => setToast((toasts) => [...toasts, { id: id++, content }]), []);

  return (
    <ToastContext.Provider value={{ open }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};
