import React from "react";
import { useDelayUnmount } from "@/hooks";
import { DEFAULT_ANIMATION_TIME } from "./constants";
import { Toast } from "./Toast";

type UseToastManagerReturnType = {
  open: () => void;
};

export const useToastManager = (): UseToastManagerReturnType => {
  const { show } = useDelayUnmount({ timeout: DEFAULT_ANIMATION_TIME });

  const open = () => {
    return <Toast show={show} />;
  };

  return { open };
};
