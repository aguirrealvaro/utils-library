import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    App
    <GlobalStyles />
  </ThemeProvider>
);
