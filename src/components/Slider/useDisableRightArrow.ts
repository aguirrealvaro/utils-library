import { RefObject, useEffect, useState } from "react";

export const useDisableRightArrow = (translate: number, sliderRef: RefObject<HTMLDivElement>): boolean => {
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    const sliderWidth = sliderRef.current?.scrollWidth || 0;
    const clientWidth = sliderRef.current?.clientWidth || 0;
    setDisabled(translate === sliderWidth - clientWidth);
  }, [translate, sliderRef]);

  return disabled;
};
