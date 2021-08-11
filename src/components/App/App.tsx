import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Tooltip } from "@/components";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Tooltip content="Contenido hover">tooltip</Tooltip>
      <div></div>
      <GlobalStyles />
    </ThemeProvider>
  );
};
