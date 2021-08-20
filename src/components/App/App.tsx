import React, { FunctionComponent, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { ToastProvider, Select } from "@/components";
import { buildSelectOptions } from "../Select";
import { LabelValue } from "../Select/types";

export const App: FunctionComponent = () => {
  const [option, setOption] = useState<LabelValue | undefined>(undefined);

  const options = [
    { label: "Opcion 1", value: "opcion1" },
    { label: "Opcion 2", value: "opcion2" },
    { label: "Opcion 2", value: "opcion2" },
    { label: "Opcion 2", value: "opcion2" },
    { label: "Opcion 2", value: "opcion2" },
    { label: "Opcion 2", value: "opcion2" },
    { label: "Opcion 2", value: "opcion2" },
    { label: "Opcion 2", value: "opcion2" },
  ];

  const optionsSelect = buildSelectOptions(options, option, setOption);

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Select placeholder="Placeholder" options={optionsSelect} value={option?.value} />
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
};
