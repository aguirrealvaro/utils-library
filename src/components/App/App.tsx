import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Modal, Popover } from "@/components";
import { useModal } from "@/hooks";

export const App: FunctionComponent = () => {
  const { show, onClose, onOpen } = useModal();

  return (
    <ThemeProvider theme={theme}>
      <Popover content="Hola" />
      <button onClick={onOpen}>Open Modal</button>
      <Modal show={show} onClose={onClose}>
        Modal
      </Modal>
      <GlobalStyles />
    </ThemeProvider>
  );
};
