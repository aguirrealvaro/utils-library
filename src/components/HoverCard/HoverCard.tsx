import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { Portal } from "../Portal";

type PlacementType = "top" | "right" | "bottom" | "left";

type HoverCardProps = {
  content: string | JSX.Element;
  placement?: PlacementType;
};

export const HoverCard: FunctionComponent<HoverCardProps> = ({ children, content, placement = "bottom" }) => {
  const [showPopover, setShowPopover] = useState<boolean>(false);

  const openPopover = () => setShowPopover(true);
  const closePopover = () => setShowPopover(false);

  return (
    <>
      <div onMouseEnter={openPopover} onMouseLeave={closePopover}>
        {children}
      </div>
      {showPopover && (
        <Portal>
          <Content>{content}</Content>
        </Portal>
      )}
    </>
  );
};

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.7rem;
  background-color: #707070;
  color: #fff;
  border-radius: 4px;
  font-size: 0.8rem;
  max-width: 150px;
  word-wrap: break-word;
  white-space: normal;
`;
