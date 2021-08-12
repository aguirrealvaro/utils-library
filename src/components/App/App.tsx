import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Navbar } from "@/components";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar user="User" mainItems={[]} dropdownItems={[]} mobileItems={[]} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
