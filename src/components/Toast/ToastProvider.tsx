import React, { createContext, FunctionComponent } from "react";

export type ToastContextType = {
  content: string;
};

export const ToastContext = createContext<ToastContextType>({} as ToastContextType);

export const ToastProvider: FunctionComponent = ({ children }) => {
  const value = { content: "hola" };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};
