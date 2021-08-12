import React, { FunctionComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Slider } from "@/components";

export const App: FunctionComponent = () => {
  const items = [
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
  ];

  return (
    <ThemeProvider theme={theme}>
      <Slider>
        {items.map((item, i) => (
          <Item key={i}>{item}</Item>
        ))}
      </Slider>
      <GlobalStyles />
    </ThemeProvider>
  );
};

const Item = styled.div`
  background: lightgrey;
  padding: 7px 12px;
`;
