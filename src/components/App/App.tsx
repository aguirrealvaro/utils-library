import React, { FunctionComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { HoverCard } from "@/components/HoverCard";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomHover content="asdasd" placement="top">
        <span>asd</span>
      </CustomHover>
      {/* <CustomHover content="asdasd" placement="right">
        <span>asd</span>
      </CustomHover>
      <CustomHover content="asdasd" placement="bottom">
        <span>asd</span>
      </CustomHover>
      <CustomHover content="asdasd" placement="left">
        <span>asd</span>
      </CustomHover> */}
      <GlobalStyles />
    </ThemeProvider>
  );
};

const CustomHover = styled(HoverCard)`
  //margin-bottom: 5rem;
`;
