import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Portal } from "../Portal";

type CoordinatesTypes = {
  left: number;
  top: number;
};

type PlacementType = "top" | "right" | "bottom" | "left";

type HoverCardProps = {
  content: string | JSX.Element;
  placement?: PlacementType;
};

export const HoverCard: FunctionComponent<HoverCardProps> = ({ children, content, placement = "bottom" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<CoordinatesTypes>({ left: 0, top: 0 });
  const [showPopover, setShowPopover] = useState<boolean>(true);

  const openPopover = () => setShowPopover(true);
  const closePopover = () => setShowPopover(false);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + window.scrollY,
    });
  }, [ref]);

  return (
    <>
      <Children onMouseEnter={openPopover} onMouseLeave={closePopover} ref={ref}>
        {children}
      </Children>
      {showPopover && (
        <Portal>
          <Content coords={coords}>{content}</Content>
        </Portal>
      )}
    </>
  );
};

const Children = styled.div`
  align-self: baseline;
`;

const Content = styled.div<{ coords: CoordinatesTypes }>`
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
  transform: ${({ coords }) => `translate(${coords.top}px, ${coords.left}px)`};
`;
