import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { NavbarItem } from "../types";
import { Icon, Dropdown } from "@/components";

type MainMenuProps = { user: string; items: NavbarItem[] };

export const DropdownMenu: FunctionComponent<MainMenuProps> = ({ user, items }) => {
  const dropdownContent = (
    <DropdownContent>
      {items
        .filter(({ show = true }) => show)
        .map(({ label, onClick, disabled = false }, i) => (
          <Item key={i} onClick={onClick} disabled={disabled}>
            {label}
          </Item>
        ))}
    </DropdownContent>
  );

  return (
    <Container>
      <Dropdown content={dropdownContent} placement="right">
        <Profile>
          <Icon icon="user" size="18px" marginRight="9px" />
          <span>{user}</span>
          <Icon icon="chevron_down" size="12px" marginLeft="9px" />
        </Profile>
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.breakpoint("lg")} {
    display: none;
  }
`;

const Profile = styled.button`
  display: flex;
  align-items: center;
`;

const DropdownContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 9px;
  padding: 1.2rem;
`;

const Item = styled.button`
  display: block;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0rem;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
