import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Slider } from "@/components";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Slider></Slider>
      <GlobalStyles />
    </ThemeProvider>
  );
};
