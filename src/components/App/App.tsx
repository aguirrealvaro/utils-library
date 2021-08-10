import React, { FunctionComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { HoverCard } from "@/components/HoverCard";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomHover content="Holaaaaa" placement="top">
        <span>asd</span>
      </CustomHover>
      <CustomHover content="Holaaaaa" placement="right">
        <span>asd</span>
      </CustomHover>
      <CustomHover content="Holaaaaa" placement="bottom">
        <span>asd</span>
      </CustomHover>
      <CustomHover content="Holaaaaa" placement="left">
        <span>asd</span>
      </CustomHover>
      <GlobalStyles />
    </ThemeProvider>
  );
};

const CustomHover = styled(HoverCard)`
  margin-bottom: 5rem;
`;
