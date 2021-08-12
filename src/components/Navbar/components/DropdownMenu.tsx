import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { NavbarItem } from "../types";
import { Icon, Dropdown } from "@/components";

type MainMenuProps = { user: string; items: NavbarItem[] };

export const DropdownMenu: FunctionComponent<MainMenuProps> = ({ user, items }) => {
  const dropdownContent = <div>dropdownContent</div>;
  return (
    <Container>
      <div>
        {items.map(({ label }) => (
          <div key={label}>{label}</div>
        ))}
      </div>
      <Dropdown content={dropdownContent}>
        <Profile>
          <Icon icon="user" size="18px" marginRight="9px" />
          <span>{user}</span>
          <Icon icon="chevron_down" size="12px" marginLeft="9px" />
        </Profile>
      </Dropdown>
    </Container>
  );
};

const Container = styled.div``;

const Profile = styled.button`
  display: flex;
  align-items: center;
`;
