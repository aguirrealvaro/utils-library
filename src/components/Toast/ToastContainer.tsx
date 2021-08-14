import React, { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

type ToastContainerProps = {
  content: string;
};

export const ToastContainer: FunctionComponent<ToastContainerProps> = ({ content }) => {
  const Component = <Container>{content}</Container>;

  return createPortal(Component, document.querySelector("root-portal")!);
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;
