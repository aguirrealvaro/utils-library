import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Accordion } from "@/components";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Accordion title="Title" content="Contenido" />
      <GlobalStyles />
    </ThemeProvider>
  );
};
