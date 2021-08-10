import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Portal } from "..";
import { PlacementType, CoordinatesType } from "./types";

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

  const [coords, setCoords] = useState<CoordinatesType>({ top: 0, left: 0 });
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const openPopover = () => {
    if (!showTooltip) setShowTooltip(true);
  };

  const closePopover = () => {
    if (showTooltip) setShowTooltip(false);
  };

  useEffect(() => {
    const bounding = triggerRef.current?.getBoundingClientRect();
    const hoverWidth = hoverRef.current?.offsetWidth || 0;
    const hoverHeight = hoverRef.current?.offsetHeight || 0;

    if (!bounding) return;

    const gapX = 5;
    const gapY = 3;

    const { x, y, width, height } = bounding;

    const positions: Record<PlacementType, CoordinatesType> = {
      top: { top: x - width, left: y - hoverHeight - gapY + window.scrollY },
      right: { top: x + width + gapX, left: y - height / 2 + window.scrollY },
      bottom: { top: x - width, left: y + height + gapY + window.scrollY },
      left: { top: x - hoverWidth - gapX, left: y - height / 2 + window.scrollY },
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

const Content = styled.div<{ coords: CoordinatesType }>`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 0.8rem;
  transform: ${({ coords }) => `translate(${coords.top}px, ${coords.left}px)`};
`;
