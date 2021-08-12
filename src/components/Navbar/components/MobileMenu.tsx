import React, { FunctionComponent, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANIMATION_TIME } from "../constants";
import { useOnClickOutside } from "@/hooks";
import { Icon } from "@/components/Icon";
import { NavbarItem } from "../types";

type MobileMenuProps = {
  showMobileMenu: boolean;
  onClose: () => void;
  closeAnimation: boolean;
  items: NavbarItem[];
};

export const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  showMobileMenu,
  onClose,
  closeAnimation,
  items,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref, callback: onClose, prevent: !showMobileMenu });

  return (
    <Backdrop closeAnimation={closeAnimation}>
      <Container closeAnimation={closeAnimation} ref={ref}>
        <CloseButton onClick={onClose}>
          <Icon icon="close" />
        </CloseButton>
        {items
          .filter(({ show = true }) => show)
          .map(({ label, onClick, disabled = false }, i) => (
            <Item key={i} onClick={onClick} disabled={disabled}>
              {label}
            </Item>
          ))}
      </Container>
    </Backdrop>
  );
};

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const translate = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const Backdrop = styled.div<{ closeAnimation: boolean }>`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} ${ANIMATION_TIME}ms ease-out;
  transition: all 200ms linear;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  ${({ closeAnimation }) =>
    closeAnimation &&
    css`
      opacity: 0;
      transition: opacity ${ANIMATION_TIME}ms ease-out;
    `}
`;

const Container = styled.div<{ closeAnimation: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(209, 196, 196, 0.12);
  animation: ${translate} ${ANIMATION_TIME}ms ease-out;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ closeAnimation }) =>
    closeAnimation &&
    css`
      transform: translateX(100%);
      transition: transform ${ANIMATION_TIME}ms ease-out;
    `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 2.1rem;
  line-height: 0px;
  padding: 6px;
  border-radius: 5px;
  transition: background-color 200ms linear;
  background-color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Item = styled.button`
  display: block;
  margin: 0 auto 2rem;
  &:last-child {
    margin-bottom: 0rem;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
