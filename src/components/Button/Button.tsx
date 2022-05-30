import React, { FunctionComponent, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...restProps }) => {
  return <CustomButton {...restProps}>button</CustomButton>;
};

const CustomButton = styled.button``;
