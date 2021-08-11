import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Tooltip } from "../Tooltip";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Tooltip content="hover">
        <span>Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
      </Tooltip>
      <GlobalStyles />
    </ThemeProvider>
  );
};
