import { useEffect } from "react";

export const useOnTabChange = (callback: () => void, deps: any[]) => {
  useEffect(() => {
    const handleDocumentVisibility = () => {
      if (!document.hidden) callback();
    };

    document.addEventListener("visibilitychange", handleDocumentVisibility);
    return () => document.removeEventListener("visibilitychange", handleDocumentVisibility);
  }, deps);
};
