/* eslint-disable no-console */
import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Navbar } from "@/components";

export const App: FunctionComponent = () => {
  const items = [
    {
      label: "Item 1",
      onClick: () => console.log("Item 1"),
    },
    {
      label: "Item 2",
      onClick: () => console.log("Item 2"),
      disabled: true,
    },
    {
      label: "Item 3",
      onClick: () => console.log("Item 3"),
    },
    {
      label: "Item 4",
      onClick: () => console.log("Item 4"),
      show: false,
    },
    {
      label: "Item 5",
      onClick: () => console.log("Item 5"),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Navbar user="User" mainItems={items} dropdownItems={items} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
