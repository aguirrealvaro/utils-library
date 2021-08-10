import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Portal } from "../Portal";

type CoordinatesTypes = {
  top: number;
  left: number;
};

type PlacementType = "top" | "right" | "bottom" | "left";

type TooltipProps = {
  content: string | JSX.Element;
  placement?: PlacementType;
  className?: string;
};

export const Tooltip: FunctionComponent<TooltipProps> = ({
  children,
  content,
  placement = "top",
  className,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<CoordinatesTypes>({ top: 0, left: 0 });
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const openPopover = () => {
    if (!showTooltip) setShowTooltip(true);
  };

  const closePopover = () => {
    if (showTooltip) setShowTooltip(false);
  };

  useEffect(() => {
    const rect = triggerRef.current?.getBoundingClientRect();
    const hoverWidth = hoverRef.current?.offsetWidth || 0;
    const hoverHeight = hoverRef.current?.offsetHeight || 0;

    if (!rect) return;

    const gapX = 5;
    const gapY = 3;

    const positions: Record<PlacementType, CoordinatesTypes> = {
      top: { top: rect.x - rect.width, left: rect.y - hoverHeight - gapY },
      right: { top: rect.x + rect.width + gapX, left: rect.y - rect.height / 2 },
      bottom: { top: rect.x - rect.width, left: rect.y + rect.height + gapY },
      left: { top: rect.x - hoverWidth - gapX, left: rect.y - rect.height / 2 },
    };

    setCoords(positions[placement]);
  }, [triggerRef, placement, showTooltip]);

  return (
    <>
      <Container
        className={className}
        onMouseEnter={openPopover}
        onMouseLeave={closePopover}
        ref={triggerRef}
      >
        {children}
      </Container>
      {showTooltip && (
        <Portal>
          <Content coords={coords} ref={hoverRef}>
            {content}
          </Content>
        </Portal>
      )}
    </>
  );
};

const Container = styled.div`
  align-self: baseline;
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
