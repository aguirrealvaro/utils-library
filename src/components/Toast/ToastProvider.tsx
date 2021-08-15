import React, { createContext, FunctionComponent, useState } from "react";
import { ToastContainer } from "./ToastContainer";

export type ToastContextType = {
  open: (content: string) => void;
};

export const ToastContext = createContext<ToastContextType>({} as ToastContextType);

export const ToastProvider: FunctionComponent = ({ children }) => {
  const [toasts, setToast] = useState<string[]>([]);

  const open = (content: string) => setToast((toasts) => [...toasts, content]);

  return (
    <ToastContext.Provider value={{ open }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};
