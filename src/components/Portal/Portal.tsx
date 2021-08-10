import { FunctionComponent, useEffect } from "react";
import { createPortal } from "react-dom";

export const Portal: FunctionComponent = ({ children }) => {
  const mount = document.querySelector("body");
  const el = document.createElement("div");

  useEffect(() => {
    mount?.appendChild(el);
    return () => {
      mount?.removeChild(el);
    };
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
