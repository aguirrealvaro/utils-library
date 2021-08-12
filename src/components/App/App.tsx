import React, { FunctionComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Dropdown } from "@/components";

export const App: FunctionComponent = () => {
  const dropdown = <DD>Dropdown</DD>;

  return (
    <ThemeProvider theme={theme}>
      <Dropdown content={dropdown}>Open dropdownasdasdadad asdasd</Dropdown>
      <GlobalStyles />
    </ThemeProvider>
  );
};

const DD = styled.div`
  background: black;
  border-radius: 8px;
  color: white;
  padding: 1rem;
  height: 200px;
`;
