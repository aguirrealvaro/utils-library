import React, { FunctionComponent } from "react";
import { createPortal } from "react-dom";

type ToastProps = {
  //show: boolean;
};

export const Toast: FunctionComponent<ToastProps> = () => {
  const Component = <div>Toast</div>;

  return createPortal(Component, document.querySelector("body")!);
};
