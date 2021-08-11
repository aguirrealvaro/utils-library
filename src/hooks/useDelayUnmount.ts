import { useCallback, useEffect, useState } from "react";

type PhasesType = "unmounted" | "mounting" | "mounted" | "unmounting";

type UseDelayUnmountReturnType = {
  show: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  closeAnimation: boolean;
};

export const useDelayUnmount = (
  timeout = 200,
  cancelEventsInAnimations = true
): UseDelayUnmountReturnType => {
  const [phase, setPhase] = useState<PhasesType>("unmounted");

  const onOpen = useCallback(() => {
    if (cancelEventsInAnimations && phase === "unmounting") return;
    setPhase("mounting");
  }, [cancelEventsInAnimations, phase]);

  const onClose = useCallback(() => {
    if (cancelEventsInAnimations && phase === "mounting") return;
    setPhase("unmounting");
  }, [cancelEventsInAnimations, phase]);

  const onToggle = () => {
    if (phase === "mounted") onClose();
    if (phase === "unmounted") onOpen;
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

  return { show, onOpen, onClose, onToggle, closeAnimation };
};
