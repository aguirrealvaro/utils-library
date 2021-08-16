import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { ToastProvider } from "@/components/Toast";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
};
