import React, { FunctionComponent, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Portal } from "../Portal";

type CoordinatesTypes = {
  top: number;
  left: number;
};

type PlacementType = "top" | "right" | "bottom" | "left";

type HoverCardProps = {
  content: string | JSX.Element;
  placement?: PlacementType;
};

export const HoverCard: FunctionComponent<HoverCardProps> = ({ children, content, placement = "right" }) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<CoordinatesTypes>({ top: 0, left: 0 });
  const [showPopover, setShowPopover] = useState<boolean>(true);

  const openPopover = () => setShowPopover(true);
  const closePopover = () => setShowPopover(false);

  useLayoutEffect(() => {
    const rect = childrenRef.current?.getBoundingClientRect();

    if (!rect) return;

    const gap = 5;
    const contentWidth = contentRef.current?.offsetWidth || 0;

    const positions: Record<PlacementType, CoordinatesTypes> = {
      top: { top: 0, left: 0 },
      right: { top: rect.y + rect.width + gap, left: rect.x - rect.height / 2 },
      bottom: { top: 0, left: 0 },
      left: { top: rect.y - contentWidth - gap, left: rect.x - rect.height / 2 },
    };

    setCoords(positions[placement]);

    /* setCoords({
      top: rect.y + window.scrollY,
      left: rect.x + rect.width / 2,
    }); */

    console.log({ rect });
  }, [childrenRef, placement]);

  console.log({ coords });

  return (
    <>
      <Children /* onMouseEnter={openPopover} onMouseLeave={closePopover} */ ref={childrenRef}>
        {children}
      </Children>
      {showPopover && (
        <Portal>
          <Content coords={coords} ref={contentRef}>
            {content}
          </Content>
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
