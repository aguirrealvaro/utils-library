import React, { FunctionComponent } from "react";
import styled from "styled-components";

export type IconType = "burger" | "close";

type IconProps = {
  icon: IconType;
  size?: string;
  color?: string;
  marginRight?: string;
  marginLeft?: string;
  className?: string;
};

export const Icon: FunctionComponent<IconProps> = ({
  icon,
  color = "#000",
  size = "20px",
  marginRight,
  marginLeft,
  className,
}) => (
  <SVG
    className={className}
    width={size}
    height={size}
    viewBox={viewBox[icon]}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    marginRight={marginRight}
    marginLeft={marginLeft}
  >
    {getPath(icon, color)}
  </SVG>
);

const viewBox: Record<IconType, string> = {
  burger: "0 0 448 512",
  close: "0 0 320 512",
};

const getPath = (name: IconType, color: string) => {
  switch (name) {
    case "burger":
      return (
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
          fill={color}
        />
      );
    case "close":
      return (
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
          fill={color}
        />
      );
  }
};

const SVG = styled.svg<{ marginRight?: string; marginLeft?: string }>`
  margin-right: ${({ marginRight }) => marginRight};
  margin-left: ${({ marginLeft }) => marginLeft};
`;
