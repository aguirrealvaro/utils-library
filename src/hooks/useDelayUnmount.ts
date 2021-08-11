import { useEffect, useState } from "react";

type PhasesType = "unmounted" | "mounting" | "mounted" | "unmounting";

type UseDelayUnmountReturnType = {
  show: boolean;
  onOpen: () => void;
  onClose: () => void;
  closeAnimation: boolean;
};

export const useDelayUnmount = (timeout = 200): UseDelayUnmountReturnType => {
  const [phase, setPhase] = useState<PhasesType>("unmounted");

  const onOpen = () => {
    if (phase === "unmounting") return;
    setPhase("mounting");
  };

  const onClose = () => {
    if (phase === "mounting") return;
    setPhase("unmounting");
  };

  useEffect(() => {
    let timeoutId: number;

    if (phase === "unmounting") {
      timeoutId = window.setTimeout(() => setPhase("unmounted"), timeout);
    } else if (phase === "mounting") {
      timeoutId = window.setTimeout(() => setPhase("mounted"), timeout);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [phase, timeout]);

  const show = phase !== "unmounted";
  const closeAnimation = phase === "unmounting";

  return { show, onOpen, onClose, closeAnimation };
};
