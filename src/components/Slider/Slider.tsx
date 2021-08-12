import React, { FunctionComponent, Children, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Arrow } from ".";
import { Direction } from "./types";

type SliderProps = {
  slidesInScreen?: number;
  gap?: number;
  callbackLeft?: () => void;
  callbackRight?: () => void;
};

export const Slider: FunctionComponent<SliderProps> = ({
  children,
  gap = 16,
  callbackLeft,
  callbackRight,
}) => {
  const [translate, setTranslate] = useState<number>(0);
  const [disableRight, setDisabledRight] = useState<boolean>(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sliderWidth = sliderRef.current?.scrollWidth || 0;
    const clientWidth = sliderRef.current?.clientWidth || 0;
    setDisabledRight(translate === sliderWidth - clientWidth);
  }, [translate, sliderRef]);

  useEffect(() => {
    const resetDisableRight = () => {
      if (disableRight) setDisabledRight(false);
    };
    window.addEventListener("resize", resetDisableRight);
    return () => window.removeEventListener("resize", resetDisableRight);
  }, [disableRight]);

  const handleArrow = (direction: Direction) => {
    const sliderWidth = sliderRef.current?.scrollWidth || 0;
    const clientWidth = sliderRef.current?.clientWidth || 0;

    if (direction === "left") {
      const result = translate - clientWidth;
      setTranslate(result <= 0 ? 0 : result);
      callbackLeft?.();
    } else {
      const result = translate + clientWidth;
      const limit = sliderWidth - clientWidth;
      setTranslate(result >= limit ? limit : result);
      callbackRight?.();
    }
  };

  return (
    <Container>
      <Overflow>
        <SlideContainer translate={translate} ref={sliderRef}>
          {Children.map(children, (child) => (
            <Slide gap={gap}>{child}</Slide>
          ))}
        </SlideContainer>
      </Overflow>
      <Arrow direction="left" handleArrow={handleArrow} disabled={translate === 0} />
      <Arrow direction="right" handleArrow={handleArrow} disabled={disableRight} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Overflow = styled.div`
  overflow: hidden;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SlideContainer = styled.div<{ translate?: any; width?: number }>`
  display: flex;
  transform: ${({ translate }) => `translateX(-${translate}px)`};
  transition: transform 0.4s ease;
`;

const Slide = styled.div<{ gap: number }>`
  margin-right: ${({ gap }) => `${gap}px`};
  &:last-child {
    margin-right: 0;
  }
`;
