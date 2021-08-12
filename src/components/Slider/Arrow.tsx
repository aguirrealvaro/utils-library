import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Icon } from "@/components";
import { IconType } from "@/components/Icon";
import { Direction } from ".";

type ArrowProps = {
  direction: Direction;
  handleArrow: (direction: Direction) => void;
  disabled: boolean;
};

export const Arrow: FunctionComponent<ArrowProps> = ({ direction, handleArrow, disabled }) => {
  return (
    <Button onClick={() => handleArrow(direction)} direction={direction} disabled={disabled}>
      <Icon icon={`chevron_${direction}` as IconType} size="18px" color="#666666" />
    </Button>
  );
};

const Button = styled.button<{ direction: Direction }>`
  align-self: baseline;
  line-height: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) =>
    css`
      padding: 17px;
      background: #fff;
      box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
      border-radius: 50%;
      ${direction === "left"
        ? css`
            left: -32px;
          `
        : css`
            right: -32px;
          `}
    `}
  &:disabled {
    display: none;
  }
`;
