import React, { FunctionComponent, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { useDisableScroll, useOnClickOutside } from "../../hooks";
import { ANIMATION_TIME, SIZES } from "./constants";
import { useClosingAnimation } from "./useClosingAnimation";
import { SizeType } from "./types";

export type ModalProps = {
  show: boolean;
  onClose: () => void;
  size?: SizeType;
  closeOnOutside?: boolean;
};

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  show,
  onClose,
  size = "md",
  closeOnOutside = true,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const { handleClose, isClosing } = useClosingAnimation(onClose);
  useDisableScroll(show);
  useOnClickOutside({ ref: contentRef, callback: handleClose, prevent: !closeOnOutside || !show });

  if (!show) return null;

  return (
    <Backdrop isClosing={isClosing}>
      <Content size={size} ref={contentRef} isClosing={isClosing}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        {children}
      </Content>
    </Backdrop>
  );
};

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const fadeOut = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const fadeOutScale = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.9);}
`;

const Backdrop = styled.div<{ isClosing: boolean }>`
  position: fixed;
  font-family: Arial;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 1;
  animation: ${fadeIn} ${ANIMATION_TIME}ms linear;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isClosing }) =>
    isClosing &&
    css`
      animation: ${fadeOut} ${ANIMATION_TIME}ms linear;
    `};
  ${({ theme }) => theme.breakpoint("md")} {
    animation: none;
    align-items: baseline;
  }
`;

const Content = styled.div<{ size: SizeType; isClosing: boolean }>`
  position: relative;
  width: ${({ size }) => SIZES[size]}px;
  min-height: 100px;
  padding: 2rem;
  animation: ${fadeInScale} ${ANIMATION_TIME}ms ease-out;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  display: flex;
  flex-direction: column;
  ${({ isClosing }) =>
    isClosing &&
    css`
      animation: ${fadeOutScale} ${ANIMATION_TIME}ms linear;
    `};
  ${({ theme }) => theme.breakpoint("md")} {
    border-radius: 0;
    width: 100%;
    margin: 0;
    min-height: 100vh;
    animation: none;
    padding: 4rem 2rem;
  }
`;

const CloseButton = styled.button`
  font-size: 30px;
  line-height: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 1rem;
  line-height: 15px;
  border-radius: 50%;
  color: grey;
`;
