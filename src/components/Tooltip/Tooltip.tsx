import { useDelayUnmount } from "@/hooks";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
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

  const { show, onOpen, onClose, onToggle, closeAnimation } = useDelayUnmount({
    timeout: ANIMATION_TIME,
    cancelEventsOnAnimations: false,
  });

  const hoverProps = {
    ...(trigger === "hover" ? { onMouseEnter: onOpen, onMouseLeave: onClose } : { onClick: onToggle }),
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
  }, [triggerRef, placement, show]);

  return (
    <>
      <Container className={className} {...hoverProps} ref={triggerRef}>
        {children}
      </Container>
      {show &&
        createPortal(
          <Content coords={coords} ref={hoverRef} fadeOut={closeAnimation}>
            {content}
          </Content>,
          document.querySelector("body")!
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

const Content = styled.div<{ coords: CoordinatesType; fadeOut: boolean }>`
  position: absolute;
  top: ${({ coords }) => coords.left}px;
  left: ${({ coords }) => coords.top}px;
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 0.8rem;
  animation: ${fadeInScale} ${ANIMATION_TIME}ms ease-out;
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transform: scale(0.9);
      transition: all ${ANIMATION_TIME}ms ease-out;
    `}
`;
