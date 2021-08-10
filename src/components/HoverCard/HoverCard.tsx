import React, { Fragment, FunctionComponent, useEffect, useRef, useState } from "react";
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
  className?: string;
};

export const HoverCard: FunctionComponent<HoverCardProps> = ({
  children,
  content,
  placement = "top",
  className,
}) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<CoordinatesTypes>({ top: 0, left: 0 });
  const [showPopover, setShowPopover] = useState<boolean>(true);

  const openPopover = () => setShowPopover(true);
  const closePopover = () => setShowPopover(false);

  useEffect(() => {
    const rect = childrenRef.current?.getBoundingClientRect();

    if (!rect) return;

    const gapX = 5;
    const gapY = 3;
    const contentWidth = contentRef.current?.offsetWidth || 0;
    const contentHeight = contentRef.current?.offsetHeight || 0;

    const positions: Record<PlacementType, CoordinatesTypes> = {
      top: { top: rect.y - rect.width, left: rect.x - contentHeight - gapY },
      right: { top: rect.y + rect.width + gapX, left: rect.x - rect.height / 2 },
      bottom: { top: rect.y - rect.width, left: rect.x + rect.height + gapY },
      left: { top: rect.y - contentWidth - gapX, left: rect.x - rect.height / 2 },
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
    <div className={className}>
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
    </div>
  );
};

const Children = styled.div`
  display: inline-block;
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
