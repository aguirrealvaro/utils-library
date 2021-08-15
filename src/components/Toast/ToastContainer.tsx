import React, { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Toast } from "./Toast";

type ToastContainerProps = {
  toasts: string[];
};

export const ToastContainer: FunctionComponent<ToastContainerProps> = ({ toasts }) => {
  const Component = (
    <Container>
      {toasts.map((toast, i) => (
        <Toast key={i}>{toast}</Toast>
      ))}
    </Container>
  );

  return createPortal(Component, document.body);
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;
