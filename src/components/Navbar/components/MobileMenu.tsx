import React, { FunctionComponent } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANIMATION_TIME } from "../constants";

type MobileMenuProps = {
  showMobileMenu: boolean;
};

export const MobileMenu: FunctionComponent<MobileMenuProps> = ({ showMobileMenu }) => {
  return (
    <Backdrop>
      <Container showMobileMenu={showMobileMenu}>MobileMenu</Container>
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

const Container = styled.div<{ showMobileMenu: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(209, 196, 196, 0.12);
  animation: ${translate} ${ANIMATION_TIME}ms ease-out;
`;
