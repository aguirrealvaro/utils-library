import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { Modal } from "@/components";
import { useModal } from "@/hooks";
import { Icon } from "../Icon";

export const App: FunctionComponent = () => {
  const { show, onClose, onOpen } = useModal();

  return (
    <ThemeProvider theme={theme}>
      <Icon icon="burger" />
      <button onClick={onOpen}>Open Modal</button>
      <Modal show={show} onClose={onClose}>
        Modal
      </Modal>
      <GlobalStyles />
    </ThemeProvider>
  );
};
