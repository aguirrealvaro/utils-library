import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { ToastProvider } from "@/components";

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <ToastProvider>
      App
      <GlobalStyles />
    </ToastProvider>
  </ThemeProvider>
);
