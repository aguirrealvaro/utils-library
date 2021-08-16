import React, { FunctionComponent, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ToastType } from "./types";
import { useToast } from "./useToast";

const ANIMATION_TIME = 200;

export const Toast: FunctionComponent<ToastType> = ({ children, id, permanent }) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const toast = useToast();

  useEffect(() => {
    if (permanent) return;

    setIsClosing(true);
    const timer = setTimeout(() => {
      toast.remove(id);
      setIsClosing(false);
    }, ANIMATION_TIME);

    return () => {
      clearTimeout(timer);
    };
  }, [id, toast, permanent]);

  const closeToast = () => {
    setIsClosing(true);
    setTimeout(() => {
      toast.remove(id);
      setIsClosing(false);
    }, ANIMATION_TIME);
  };

  return (
    <Container onClick={closeToast} isClosing={isClosing}>
      {children}
    </Container>
  );
};

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const Container = styled.div<{ isClosing: boolean }>`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }

  animation: ${fadeInScale} ${ANIMATION_TIME}ms ease-out;
  ${({ isClosing }) =>
    isClosing &&
    css`
      opacity: 0;
      transform: scale(0.9);
      transition: all ${ANIMATION_TIME}ms ease-out;
    `}
`;
