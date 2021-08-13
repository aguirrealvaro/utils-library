import styled from "styled-components";
import { HTMLProps } from "react";
import { theme } from "@/components/App";

export interface ToggleProps {
  onChange: HTMLProps<HTMLInputElement>["onChange"];
  checked: boolean;
  disabled?: boolean;
  size?: number;
  color?: string;
}

export const Toggle = styled.input.attrs<ToggleProps>(({ size = 22, color = theme.colors.blue }) => ({
  type: "checkbox",
  size,
  color,
}))<ToggleProps>`
  position: relative;
  width: ${({ size }) => size && `${size * 2}px`};
  height: ${({ size }) => size && `${size}px`};
  appearance: none;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #c6c6c6;
  outline: none;
  border-radius: 100px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  opacity: 1;
  cursor: pointer;
  &:checked {
    background-color: ${({ color }) => color};
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  }
  &:before {
    content: "";
    position: absolute;
    width: ${({ size }) => size && `${size}px`};
    height: ${({ size }) => size && `${size}px`};
    border-radius: 100px;
    top: 0;
    left: 0;
    background: #fff;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    transition: 0.3s;
  }
  &:checked:before {
    left: ${({ size }) => size && `${size}px`};
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
