import React, { FunctionComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Dropdown } from "@/components";

export const App: FunctionComponent = () => {
  const dropdown = <DD>Dropdown</DD>;

  return (
    <ThemeProvider theme={theme}>
      <Dropdown content={dropdown}>Open dropdown</Dropdown>
      <GlobalStyles />
    </ThemeProvider>
  );
};

const DD = styled.div`
  background: black;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  color: white;
  padding: 1rem;
`;
