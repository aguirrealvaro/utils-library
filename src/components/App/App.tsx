import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Modal } from "@/components";
import { useModal } from "@/hooks";

export const App: FunctionComponent = () => {
  const { show, onClose, onOpen } = useModal();

  return (
    <ThemeProvider theme={theme}>
      <button onClick={onOpen}>Open</button>
      <Modal show={show} onClose={onClose}>
        Modal
      </Modal>
      <div></div>
      <GlobalStyles />
    </ThemeProvider>
  );
};
