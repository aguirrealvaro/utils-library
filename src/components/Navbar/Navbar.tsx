import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Logo, MainMenu, DropdownMenu, Burger, MobileMenu } from "./components";
import { ANIMATION_TIME } from "./constants";
import { NavbarItem } from "./types";
import { useDelayUnmount } from "@/hooks";

type NavbarProps = {
  user: string;
  mainItems: NavbarItem[];
  dropdownItems: NavbarItem[];
  mobileItems: NavbarItem[];
};

export const Navbar: FunctionComponent<NavbarProps> = ({ user, mainItems, dropdownItems }) => {
  const {
    show: showMobileMenu,
    onToggle,
    onClose,
    closeAnimation,
  } = useDelayUnmount({ timeout: ANIMATION_TIME });

  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <Logo />
          <MainMenu items={mainItems} />
          <DropdownMenu user={user} items={dropdownItems} />
          <Burger onClick={onToggle} />
          {showMobileMenu && (
            <MobileMenu showMobileMenu={showMobileMenu} onClose={onClose} closeAnimation={closeAnimation} />
          )}
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
