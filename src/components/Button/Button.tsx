import React, { FunctionComponent, ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Spinner } from "../Spinner";

const ANIMATION_TIME = 300;

type KindType = "contained" | "outlined" | "text";
type SizeType = "mini" | "compact" | "default" | "large";
type VariantType = "default" | "positive" | "negative" | "warning" | "neutral";

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  kind?: KindType;
  size?: SizeType;
  variant?: VariantType;
};

export const Button: FunctionComponent<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  block,
  isLoading,
  kind = "contained",
  size = "default",
  variant = "default",
  ...restProps
}) => {
  return (
    <CustomButton block={block} kind={kind} size={size} variant={variant} {...restProps}>
      {isLoading ? <Spinner /> : children}
    </CustomButton>
  );
};

const CustomButton = styled.button<{ block?: boolean; kind: KindType; size: SizeType; variant: VariantType }>`
  width: ${({ block }) => (block ? "100%" : "auto")};
  border-radius: 0.5rem;
  transition: all ${ANIMATION_TIME}ms ease;
  &:disabled {
    cursor: not-allowed;
  }
  ${({ kind, theme, variant }) => {
    const variantColors: Record<VariantType, string> = {
      default: "blue",
      positive: "green",
      negative: "red",
      warning: "yellow",
      neutral: "black",
    };

    if (kind === "contained") {
      return css`
        background-color: ${theme.colors[variantColors[variant]]};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors[variantColors[variant]]};
      `;
    }
    if (kind === "outlined") {
      return css`
        background-color: ${theme.colors.white};
        color: ${theme.colors[variantColors[variant]]};
        border: 1px solid ${theme.colors[variantColors[variant]]};
        &:hover {
          background-color: ${theme.colors[variantColors[variant]]};
          color: ${theme.colors.white};
        }
      `;
    }
    if (kind === "text") {
      return css`
        color: ${theme.colors[variantColors[variant]]};
        border: 1px solid transparent;
        &:hover {
          background-color: ${theme.colors[variantColors[variant]]};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors[variantColors[variant]]};
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
