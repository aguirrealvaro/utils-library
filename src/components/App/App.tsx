import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Modal, useModal } from "../Modal";

export const App: FunctionComponent = () => {
  const { show, onClose, onOpen } = useModal();

  return (
    <ThemeProvider theme={theme}>
      <button onClick={onOpen}>Open Modal</button>
      <Modal show={show} onClose={onClose}>
        Modal
      </Modal>
      <GlobalStyles />
    </ThemeProvider>
  );
};
