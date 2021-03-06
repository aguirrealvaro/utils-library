import { useCallback, useEffect, useRef, useState } from "react";

type PhasesType = "unmounted" | "mounting" | "mounted" | "unmounting";

type UseDelayUnmountReturnType = {
  show: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isUnmounting: boolean;
};

type UseDelayUnmountType = {
  timeout?: number;
};

export const useDelayUnmount = (
  { timeout }: UseDelayUnmountType = { timeout: 200 }
): UseDelayUnmountReturnType => {
  const [phase, setPhase] = useState<PhasesType>("unmounted");
  const timeoutId = useRef<number>(0);

  const onOpen = useCallback(() => {
    if (phase === "mounting" || phase === "mounted") return;
    setPhase("mounting");
  }, [phase]);

  const onClose = useCallback(() => {
    if (phase === "unmounting" || phase === "unmounted") return;
    setPhase("unmounting");
  }, [phase]);

  const onToggle = useCallback(() => {
    if (phase === "mounting" || phase === "mounted") onClose();
    if (phase === "unmounting" || phase === "unmounted") onOpen();
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

  useEffect(() => {
    window.addEventListener("resize", onClose);
    return () => window.removeEventListener("resize", onClose);
  }, [onClose]);

  const show = phase !== "unmounted";
  const isUnmounting = phase === "unmounting";

  return { show, onOpen, onClose, onToggle, isUnmounting };
};
