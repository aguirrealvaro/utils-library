import React, { FunctionComponent, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { ToastProvider, Select } from "@/components";

export const App: FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  const options = [
    { label: "Opcion 1", value: "opcion1", disabled: true },
    { label: "Opcion 2", value: "opcion2" },
    { label: "Opcion 3", value: "opcion3" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Select
          placeholder="Placeholder"
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
        />
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
};
