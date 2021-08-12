import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Logo, MainMenu } from "./components";
import { NavbarItem } from "./types";

type NavbarProps = {
  user: string;
  mainItems: NavbarItem[];
  dropdownItems: NavbarItem[];
  mobileItems: NavbarItem[];
};

export const Navbar: FunctionComponent<NavbarProps> = ({ user, mainItems, dropdownItems, mobileItems }) => {
  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <Logo />
          <MainMenu items={mainItems} />
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
