import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { NavbarItem } from "../types";
import { Icon, Dropdown } from "@/components";

type MainMenuProps = { user: string; items: NavbarItem[] };

export const DropdownMenu: FunctionComponent<MainMenuProps> = ({ user, items }) => {
  const dropdownContent = (
    <div>
      {items.map(({ label }, i) => (
        <div key={i}>{label}</div>
      ))}
    </div>
  );

  return (
    <Dropdown content={dropdownContent} placement="right">
      <Profile>
        <Icon icon="user" size="18px" marginRight="9px" />
        <span>{user}</span>
        <Icon icon="chevron_down" size="12px" marginLeft="9px" />
      </Profile>
    </Dropdown>
  );
};

const Profile = styled.button`
  display: flex;
  align-items: center;
`;
