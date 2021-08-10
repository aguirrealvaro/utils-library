import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { HoverCard } from "@/components";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <HoverCard content="Hola">
        <button>boton</button>
      </HoverCard>
      <GlobalStyles />
    </ThemeProvider>
  );
};
