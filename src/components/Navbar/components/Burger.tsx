import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Icon } from "@/components";

export const Burger: FunctionComponent = () => {
  return (
    <CustomButton>
      <Icon icon="burger" />
    </CustomButton>
  );
};

const CustomButton = styled.button`
  line-height: 0px;
  display: none;
  ${({ theme }) => theme.breakpoint("lg")} {
    display: block;
  }
`;
