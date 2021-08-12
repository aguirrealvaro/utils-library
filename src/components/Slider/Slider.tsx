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
  slidesInScreen = 4.2,
  gap = 16,
  callbackLeft,
  callbackRight,
}) => {
  const [translate, setTranslate] = useState<number>(0);
  const [disableRight, setDisabledRight] = useState<boolean>(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const slideWidth = (1200 - gap * (slidesInScreen - 1)) / slidesInScreen;
  //const slidesLength = Children.toArray(children).length;
  //const sliderWidth = slidesLength * slideWidth + gap * (slidesLength - 1);

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
    const card = slideWidth + gap;
    if (direction === "left") {
      const result = translate - card;
      setTranslate(result <= 0 ? 0 : result);
      callbackLeft?.();
    } else {
      const result = translate + card;
      const sliderWidth = sliderRef.current?.scrollWidth || 0;
      const clientWidth = sliderRef.current?.clientWidth || 0;
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
            <Slide width={slideWidth} gap={gap}>
              {child}
            </Slide>
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
  margin: 0 auto;
  transform: ${({ translate }) => `translateX(-${translate}px)`};
  transition: transform 0.4s ease;
`;

const Slide = styled.div<{ width: number; gap: number }>`
  width: ${({ width }) => `${width}px`};
  min-width: ${({ width }) => `${width}px`};
  margin-right: ${({ gap }) => `${gap}px`};
  > div {
    width: 100%;
  }
  &:last-child {
    margin-right: 0;
  }
`;
