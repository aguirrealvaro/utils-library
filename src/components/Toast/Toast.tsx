import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ToastType } from "./types";
import { useToast } from "./useToast";

const ANIMATION_TIME = 200;
const DURATION_TIME = 3000;

export const Toast: FunctionComponent<ToastType> = ({ children, id, permanent }) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timeoutRef = useRef<number>(0);

  const toast = useToast();

  useEffect(() => {
    if (permanent) return;

    timeoutRef.current = window.setTimeout(() => {
      setIsClosing(true);
      timeoutRef.current = window.setTimeout(() => {
        setIsClosing(false);
        toast.remove(id);
      }, ANIMATION_TIME);
    }, DURATION_TIME);
  }, [id, toast, permanent]);

  const closeToast = () => {
    setIsClosing(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      toast.remove(id);
    }, ANIMATION_TIME);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Container onClick={closeToast} isClosing={isClosing}>
      {children}
    </Container>
  );
};

const translate = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
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
  animation: ${translate} ${ANIMATION_TIME}ms linear;
  ${({ isClosing }) =>
    isClosing &&
    css`
      transform: translateX(100%);
      transition: transform ${ANIMATION_TIME}ms linear;
    `}
`;
