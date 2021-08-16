import React, { FunctionComponent } from "react";

type ModalProps = {
  content: string;
};

export const Modal: FunctionComponent<ModalProps> = ({ content }) => <div>{content}</div>;
