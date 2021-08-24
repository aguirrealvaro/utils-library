import { useState, useEffect } from "react";

type UseWindowResizeType = {
  isWindowResize: boolean;
};

export const useWindowResize = (size = 900): UseWindowResizeType => {
  const [isWindowResize, setIsWindowResize] = useState<boolean>(window.innerWidth <= size);

  useEffect(() => {
    const updateWindowWidth = () => {
      if (!isWindowResize && window.innerWidth <= size) setIsWindowResize(true);
      else if (isWindowResize && window.innerWidth > size) setIsWindowResize(false);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isWindowResize, size]);

  return { isWindowResize };
};
