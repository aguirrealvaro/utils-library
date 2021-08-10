import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Tooltip } from "@/components/Tooltip";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Tooltip content="Hoveeeeeeeeeeeer!" placement="right">
        <span>trigger</span>
      </Tooltip>
      <GlobalStyles />
    </ThemeProvider>
  );
};
