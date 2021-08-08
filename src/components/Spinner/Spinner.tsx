import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

type SpinnerProps = {
  color?: string;
  background?: string;
  size?: number;
  fullHeight?: boolean;
};

export const Spinner: FunctionComponent<SpinnerProps> = ({
  color = "black",
  background = "rgba(0, 0, 0, 0.15)",
  size,
  fullHeight = false,
}) => (
  <Container fullHeight={fullHeight}>
    <Loader color={color} background={background} size={size} />
  </Container>
);

const Container = styled.div<{ fullHeight?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: ${({ fullHeight }) => fullHeight && "100vh"};
`;

const Loader = styled.div<SpinnerProps>`
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
  ${({ size, color, background }) => {
    const borderSize = size ? (size * 3.9) / 32 : 3.9;
    return css`
      border: ${borderSize}px solid ${background};
      border-top: ${borderSize}px solid ${color};
      width: ${size || 32}px;
      height: ${size || 32}px;
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
