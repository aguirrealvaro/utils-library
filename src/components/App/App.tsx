import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { ExclamationTooltip } from "@/components";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ExclamationTooltip content="contenido" placement="left" />
      <GlobalStyles />
    </ThemeProvider>
  );
};
