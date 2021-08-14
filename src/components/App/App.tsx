import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { ToastProvider } from "../Toast";
import { useToast } from "../Toast/useToast";

export const App: FunctionComponent = () => {
  const { content, open } = useToast();

  console.log({ content });

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        asd
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
};
