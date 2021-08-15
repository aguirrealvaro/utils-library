import React, { FunctionComponent } from "react";
import { useToast } from "@/components";

export const TC: FunctionComponent = () => {
  const { content } = useToast();

  console.log({ content });

  return <div>hola</div>;
};
