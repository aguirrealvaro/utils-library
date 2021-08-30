import React, { FunctionComponent, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { useDisableScroll, useOnClickOutside, useOnKeyPress } from "@/hooks";
import { SIZES, SizeType } from ".";
import { ANIMATION_TIME } from "./constants";
import { Icon } from "@/components";

export type ModalProps = {
  show: boolean;
  onClose: () => void;
  size?: SizeType;
  closeOnInteractions?: boolean;
  isUnmounting?: boolean;
  className?: string;
};

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  show,
  onClose,
  size = "md",
  closeOnInteractions = true,
  isUnmounting = false,
  className,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useDisableScroll(show);
  useOnClickOutside({ ref: contentRef, callback: onClose, prevent: !closeOnInteractions || !show });
  useOnKeyPress({ targetKey: "Escape", callback: onClose, prevent: !closeOnInteractions || !show });

  if (!show) return null;

  const Component = (
    <Backdrop show={show} fadeOut={isUnmounting} className={className}>
      <Content size={size} ref={contentRef} fadeOut={isUnmounting}>
        <CloseButton onClick={onClose}>
          <Icon icon="close" color="grey" />
        </CloseButton>
        {children}
      </Content>
    </Backdrop>
  );

  return createPortal(Component, document.body);
};

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const Backdrop = styled.div<{ show: boolean; fadeOut: boolean }>`
  position: fixed;
  font-family: Arial;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  z-index: 1;
  animation: ${fadeIn} ${ANIMATION_TIME}ms ease-out;
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transition: all ${ANIMATION_TIME}ms ease-out;
    `}
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.breakpoint("md")} {
    animation: none;
    align-items: baseline;
  }
`;

const Content = styled.div<{ size: SizeType; fadeOut: boolean }>`
  position: relative;
  width: ${({ size }) => SIZES[size]}px;
  min-height: 100px;
  padding: 2rem;
  animation: ${fadeInScale} ${ANIMATION_TIME}ms ease-out;
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transform: scale(0.9);
      transition: all ${ANIMATION_TIME}ms ease-out;
    `}
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  display: flex;
  flex-direction: column;
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
  line-height: 0;
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px;
  border-radius: 50px;
  transition: background-color ${ANIMATION_TIME}ms linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
