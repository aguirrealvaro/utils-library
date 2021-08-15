import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { paths, viewBox, IconType } from ".";
import { theme } from "@/components/App";

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
  color = theme.colors.black,
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
    {paths[icon](color)}
  </SVG>
);

const SVG = styled.svg<{ marginRight?: string; marginLeft?: string }>`
  margin-right: ${({ marginRight }) => marginRight};
  margin-left: ${({ marginLeft }) => marginLeft};
`;
