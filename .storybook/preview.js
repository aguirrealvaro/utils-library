import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/components/App";
import { ToastProvider } from "@/components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Story />
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  ),
];
