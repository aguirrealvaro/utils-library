import React, { FunctionComponent, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANIMATION_TIME } from "../constants";
import { useOnClickOutside } from "@/hooks";

type MobileMenuProps = {
  showMobileMenu: boolean;
  onClose: () => void;
  closeAnimation: boolean;
};

export const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  showMobileMenu,
  onClose,
  closeAnimation,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref, callback: onClose, prevent: !showMobileMenu });

  return (
    <Backdrop>
      <Container closeAnimation={closeAnimation} ref={ref}>
        MobileMenu
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

const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} ${ANIMATION_TIME}ms ease-out;
  transition: all 200ms linear;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
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
  ${({ closeAnimation }) =>
    closeAnimation &&
    css`
      transform: translateX(100%);
      transition: transform ${ANIMATION_TIME}ms ease-out;
    `}
`;
