import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

type SizeType = "mini" | "default" | "large";

type SpinnerProps = {
  color?: string;
  background?: string;
  size?: SizeType;
  fullHeight?: boolean;
  className?: string;
};

export const Spinner: FunctionComponent<SpinnerProps> = ({
  color = "black",
  background = "rgba(255, 255, 255, 0.75)",
  size = "default",
  fullHeight = false,
  className,
}) => {
  return (
    <Container fullHeight={fullHeight} className={className}>
      <Loader color={color} background={background} size={size} />
    </Container>
  );
};

const Container = styled.div<{ fullHeight?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: ${({ fullHeight }) => fullHeight && "100vh"};
`;

const sizes: Record<SizeType, number> = {
  mini: 20,
  default: 30,
  large: 40,
};

const Loader = styled.div<SpinnerProps>`
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
  ${({ size, color, background }) => {
    const numberSize = size ? sizes[size] : 30;
    const borderSize = (numberSize * 3.9) / 32;

    return css`
      border: ${borderSize}px solid ${background};
      border-top: ${borderSize}px solid ${color};
      width: ${numberSize}px;
      height: ${numberSize}px;
    `;
  }};
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
