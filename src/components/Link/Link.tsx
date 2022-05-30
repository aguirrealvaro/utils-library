import React, { FunctionComponent, AnchorHTMLAttributes } from "react";
import styled from "styled-components";

type LinkProps = {
  hideUnderline?: boolean;
};

export const Link: FunctionComponent<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  hideUnderline = false,
  ...restProps
}) => {
  return (
    <Anchor hideUnderline={hideUnderline} {...restProps}>
      {children}
    </Anchor>
  );
};

const Anchor = styled.a<{ hideUnderline: boolean }>`
  all: unset;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: ${({ hideUnderline }) => !hideUnderline && "underline"};
`;
