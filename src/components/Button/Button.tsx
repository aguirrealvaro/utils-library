import React, { FunctionComponent, ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Spinner } from "../Spinner";

const ANIMATION_TIME = 300;

type KindType = "contained" | "outlined" | "text";
type SizeType = "mini" | "compact" | "default" | "large";

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  kind?: KindType;
  size?: SizeType;
};

export const Button: FunctionComponent<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  block,
  isLoading,
  kind = "contained",
  size = "default",
  ...restProps
}) => {
  return (
    <CustomButton block={block || false} kind={kind} size={size} {...restProps}>
      {isLoading ? <Spinner size={25} /> : children}
    </CustomButton>
  );
};

const CustomButton = styled.button<{ block: boolean; kind: KindType; size: SizeType }>`
  width: ${({ block }) => (block ? "100%" : "auto")};
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
  ${({ size }) => {
    if (size === "mini") {
      return css`
        padding: 0 0.5rem;
        height: 2rem;
      `;
    }
    if (size === "compact") {
      return css`
        padding: 0 1rem;
        height: 2.5rem;
      `;
    }
    if (size === "default") {
      return css`
        padding: 0 1.5rem;
        height: 3rem;
      `;
    }
    if (size === "large") {
      return css`
        padding: 0 2rem;
        height: 3.5rem;
      `;
    }
  }}
`;
