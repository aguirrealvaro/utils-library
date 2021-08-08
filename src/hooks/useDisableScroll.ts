import { useLayoutEffect } from "react";

export const useDisableScroll = (flag: boolean): void => {
  useLayoutEffect(() => {
    document.body.style.overflowY = flag ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [flag]);
};
