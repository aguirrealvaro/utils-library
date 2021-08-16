import React, { FunctionComponent } from "react";
import { useToast } from "@/components";

export const TC: FunctionComponent = () => {
  const { open } = useToast();

  const onClick = () => {
    open("hola", { permanent: true });
  };

  return <button onClick={onClick}>new toast</button>;
};
