import React, { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Toast, ToastType } from ".";

type ToastContainerProps = {
  toasts: ToastType[];
};

export const ToastContainer: FunctionComponent<ToastContainerProps> = ({ toasts }) => {
  const Component = (
    <Container>
      {toasts.map((props) => {
        const { id, content } = props;
        return (
          <Toast key={id} {...props}>
            {content} {id}
          </Toast>
        );
      })}
    </Container>
  );

  return createPortal(Component, document.body);
};

const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;
