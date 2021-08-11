import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Portal } from "..";
import { ANIMATION_TIME } from "./constants";
import { PlacementType, CoordinatesType, TriggerType } from "./types";

type TooltipProps = {
  content: string | JSX.Element;
  placement?: PlacementType;
  trigger?: TriggerType;
  className?: string;
};

export const Tooltip: FunctionComponent<TooltipProps> = ({
  children,
  content,
  placement = "right",
  trigger = "hover",
  className,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<CoordinatesType>({ top: 0, left: 0 });
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const openTooltip = () => {
    if (!showTooltip) setShowTooltip(true);
  };

  const closeTooltip = () => {
    if (showTooltip) setShowTooltip(false);
  };

  const togglePopover = () => setShowTooltip(!showTooltip);

  const hoverProps = {
    ...(trigger === "hover"
      ? { onMouseEnter: openTooltip, onMouseLeave: closeTooltip }
      : { onClick: togglePopover }),
  };

  useEffect(() => {
    const bounding = triggerRef.current?.getBoundingClientRect();
    const hoverWidth = hoverRef.current?.offsetWidth || 0;
    const hoverHeight = hoverRef.current?.offsetHeight || 0;

    if (!bounding) return;

    const gapX = 7;
    const gapY = 5;

    const { x, y, width, height } = bounding;

    const verticalTop = x + width / 2 - hoverWidth / 2;
    const horizontalLeft = y - height / 2 + window.scrollY;

    const positions: Record<PlacementType, CoordinatesType> = {
      top: { top: verticalTop, left: y - hoverHeight - gapY + window.scrollY },
      right: { top: x + width + gapX + window.scrollX, left: horizontalLeft },
      bottom: { top: verticalTop, left: y + height + gapY + window.scrollY },
      left: { top: x - hoverWidth - gapX + window.scrollX, left: horizontalLeft },
    };

    setCoords(positions[placement]);
  }, [triggerRef, placement, showTooltip]);

  return (
    <>
      <Container className={className} {...hoverProps} ref={triggerRef}>
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

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const Content = styled.div<{ coords: CoordinatesType }>`
  position: absolute;
  top: ${({ coords }) => coords.left}px;
  left: ${({ coords }) => coords.top}px;
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 0.8rem;
  animation: ${fadeInScale} ${ANIMATION_TIME}ms ease-out;
`;
