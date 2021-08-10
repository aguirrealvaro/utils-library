import { FunctionComponent, useEffect } from "react";
import { createPortal } from "react-dom";

export const Portal: FunctionComponent = ({ children }) => {
  const body = document.querySelector("body");
  const element = document.createElement("div");

  useEffect(() => {
    body?.appendChild(element);
    return () => {
      body?.removeChild(element);
    };
  }, [element, body]);

  return createPortal(children, element);
};

export default Portal;
