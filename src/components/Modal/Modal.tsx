import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useDisableScroll, useOnClickOutside } from "@/hooks";
import { ANIMATION_TIME, SIZES } from "./constants";
import { SizeType } from "./types";
import { Icon, Portal } from "@/components";

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
  const [delayed, setDelayed] = useState<boolean>(false);

  useEffect(() => {
    if (show) setDelayed(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setDelayed(false);
  };

  const contentRef = useRef<HTMLDivElement>(null);

  useDisableScroll(delayed);
  useOnClickOutside({ ref: contentRef, callback: onClose, prevent: !closeOnOutside || !delayed });

  if (!delayed) return null;

  return (
    <Backdrop onAnimationEnd={onAnimationEnd} show={show}>
      <Content size={size} ref={contentRef} show={show}>
        <CloseButton onClick={onClose}>
          <Icon icon="close" color="grey" />
        </CloseButton>
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

const Backdrop = styled.div<{ show: boolean }>`
  position: fixed;
  font-family: Arial;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 1;
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} ${ANIMATION_TIME}ms linear;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.breakpoint("md")} {
    animation: none;
    align-items: baseline;
  }
`;

const Content = styled.div<{ size: SizeType; show: boolean }>`
  position: relative;
  width: ${({ size }) => SIZES[size]}px;
  min-height: 100px;
  padding: 2rem;
  animation: ${({ show }) => (show ? fadeInScale : fadeOutScale)} ${ANIMATION_TIME}ms linear;
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
