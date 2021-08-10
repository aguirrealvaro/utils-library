import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { HoverCard } from "@/components";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <HoverCard content="Holaaaaa">
        <span>asd</span>
      </HoverCard>
      <GlobalStyles />
    </ThemeProvider>
  );
};
