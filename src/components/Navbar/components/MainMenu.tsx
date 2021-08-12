import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { NavbarItem } from "../types";

type MainMenuProps = { items: NavbarItem[] };

export const MainMenu: FunctionComponent<MainMenuProps> = ({ items }) => (
  <Container>
    {items
      .filter(({ show = true }) => show)
      .map(({ label, onClick, disabled = false }, i) => (
        <Item key={i} onClick={onClick} disabled={disabled}>
          {label}
        </Item>
      ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoint("lg")} {
    display: none;
  }
`;

const Item = styled.button`
  margin-right: 2rem;
  &:last-child {
    margin-right: 0rem;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
