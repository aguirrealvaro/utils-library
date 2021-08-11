import { useCallback, useEffect, useRef, useState } from "react";

type PhasesType = "unmounted" | "mounting" | "mounted" | "unmounting";

type UseDelayUnmountReturnType = {
  show: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  closeAnimation: boolean;
};

type UseDelayUnmountType = {
  timeout?: number;
  cancelEventsOnAnimations?: boolean;
};

export const useDelayUnmount = (
  { timeout, cancelEventsOnAnimations }: UseDelayUnmountType = {
    timeout: 200,
    cancelEventsOnAnimations: true,
  }
): UseDelayUnmountReturnType => {
  const [phase, setPhase] = useState<PhasesType>("unmounted");
  const timeoutId = useRef<number>(0);

  const onOpen = useCallback(() => {
    if (cancelEventsOnAnimations && phase === "unmounting") return;
    setPhase("mounting");
  }, [cancelEventsOnAnimations, phase]);

  const onClose = useCallback(() => {
    if (cancelEventsOnAnimations && phase === "mounting") return;
    setPhase("unmounting");
  }, [cancelEventsOnAnimations, phase]);

  const onToggle = useCallback(() => {
    if (phase === "mounted") onClose();
    if (phase === "unmounted") onOpen;
  }, [onClose, onOpen, phase]);

  useEffect(() => {
    if (phase === "unmounting") {
      timeoutId.current = window.setTimeout(() => setPhase("unmounted"), timeout);
    } else if (phase === "mounting") {
      timeoutId.current = window.setTimeout(() => setPhase("mounted"), timeout);
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [phase, timeout]);

  const show = phase !== "unmounted";
  const closeAnimation = phase === "unmounting";

  return { show, onOpen, onClose, onToggle, closeAnimation };
};
