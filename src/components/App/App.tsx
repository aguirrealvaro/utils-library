import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { TC } from "../TC/TC";
import { ToastProvider } from "@/components/Toast";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <TC />
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
};
