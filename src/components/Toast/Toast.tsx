import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const Toast: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
