import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from ".";
import { ToastProvider } from "@/components/Toast";
import { useDelayUnmount } from "@/hooks";
import { Modal } from "../Modal";

export const App: FunctionComponent = () => {
  const { show, onClose, onOpen, isUnmounting } = useDelayUnmount();

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <button onClick={onOpen}>open</button>
        <Modal show={show} onClose={onClose} isUnmounting={isUnmounting}>
          modal!
        </Modal>
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
};
