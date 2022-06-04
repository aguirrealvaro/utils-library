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
  onClick,
  block,
  isLoading,
  kind = "contained",
  size = "default",
  variant = "default",
  ...restProps
}) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;
    onClick?.(e);
  };

  return (
    <CustomButton
      block={block}
      kind={kind}
      size={size}
      variant={variant}
      onClick={handleOnClick}
      {...restProps}
    >
      {isLoading ? <Spinner size="mini" /> : children}
    </CustomButton>
  );
};

const CustomButton = styled.button<{ block?: boolean; kind: KindType; size: SizeType; variant: VariantType }>`
  width: ${({ block }) => (block ? "100%" : "auto")};
  border-radius: 0.5rem;
  transition: all ${ANIMATION_TIME}ms ease;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
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
        padding: 0.25rem 0.5rem;
        font-size: 12px;
      `;
    }
    if (size === "compact") {
      return css`
        padding: 0.5rem 1rem;
        font-size: 14px;
      `;
    }
    if (size === "default") {
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 17px;
      `;
    }
    if (size === "large") {
      return css`
        padding: 1rem 2rem;
        font-size: 18px;
      `;
    }
  }}
`;
