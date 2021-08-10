import React, { FunctionComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Tooltip } from "@/components/Tooltip";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomHover content="Hoveeeeeeeeeeeer!" placement="top">
        <span>trigger</span>
      </CustomHover>
      <CustomHover content="Hoveeeeeeeeeeeer!" placement="right">
        <span>trigger</span>
      </CustomHover>
      <CustomHover content="Hoveeeeeeeeeeeer!" placement="bottom">
        <span>trigger</span>
      </CustomHover>
      <CustomHover content="Hoveeeeeeeeeeeer!" placement="left">
        <span>trigger</span>
      </CustomHover>
      <GlobalStyles />
    </ThemeProvider>
  );
};

const CustomHover = styled(Tooltip)`
  margin-bottom: 5rem;
`;
