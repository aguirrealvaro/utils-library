import React, { FunctionComponent, ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Spinner } from "../Spinner";

const ANIMATION_TIME = 300;

type KindType = "contained" | "outlined" | "text";

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  kind?: KindType;
};

export const Button: FunctionComponent<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  block,
  isLoading,
  kind = "contained",
  ...restProps
}) => {
  return (
    <CustomButton block={block || false} kind={kind} {...restProps}>
      {isLoading ? <Spinner size={25} /> : children}
    </CustomButton>
  );
};

const CustomButton = styled.button<{ block: boolean; kind: KindType }>`
  width: ${({ block }) => (block ? "100%" : "auto")};
  height: 50px;
  padding: 0 1rem;
  border-radius: 0.5rem;
  transition: all ${ANIMATION_TIME}ms ease;
  ${({ kind, theme }) => {
    if (kind === "contained") {
      return css`
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.blue};
      `;
    }
    if (kind === "outlined") {
      return css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.blue};
        border: 1px solid ${theme.colors.blue};
        &:hover {
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
        }
      `;
    }
    if (kind === "text") {
      return css`
        color: ${theme.colors.blue};
        border: 1px solid transparent;
        &:hover {
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.blue};
        }
      `;
    }
  }}
`;
