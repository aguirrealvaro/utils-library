import { useEffect, useRef, useState } from "react";
import { ANIMATION_TIME } from "./constants";

type UseClosingAnimationReturnType = {
  handleClose: () => void;
  isClosing: boolean;
};

export const useClosingAnimation = (onClose: () => void): UseClosingAnimationReturnType => {
  const timeoutRef = useRef<number>(0);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleClose = () => {
    setIsClosing(true);

    timeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, ANIMATION_TIME);
  };

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  return { handleClose, isClosing };
};
