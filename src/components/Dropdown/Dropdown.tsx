import { useDelayUnmount } from "@/hooks";
import React, { FunctionComponent, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { ANIMATION_TIME } from "./constants";
import { PlacementType, CoordinatesType, TriggerType } from "./types";

export type DropdownProps = {
  content: JSX.Element;
  placement?: PlacementType;
  trigger?: TriggerType;
  className?: string;
};

export const Dropdown: FunctionComponent<DropdownProps> = ({
  children,
  content,
  placement = "right",
  trigger = "click",
  className,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<CoordinatesType>({ top: 0, left: 0 });

  const { show, onOpen, onClose, onToggle, closeAnimation } = useDelayUnmount({
    timeout: ANIMATION_TIME,
  });

  const openProps = {
    ...(trigger === "hover" ? { onMouseEnter: onOpen, onMouseLeave: onClose } : { onClick: onToggle }),
  };

  useLayoutEffect(() => {
    const bounding = triggerRef.current?.getBoundingClientRect();
    const hoverWidth = hoverRef.current?.offsetWidth || 0;

    if (!bounding) return;

    const gap = 5;
    const { x, y, width, height } = bounding;
    const verticalTop = x + width / 2 - hoverWidth / 2;

    const positions: Record<PlacementType, CoordinatesType> = {
      right: { top: verticalTop, left: y + height + gap + window.scrollY },
      left: { top: verticalTop, left: y + height + gap + window.scrollY },
    };

    setCoords(positions[placement]);
  }, [triggerRef, placement, show]);

  return (
    <>
      <Container className={className} {...openProps} ref={triggerRef}>
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
  animation: ${fadeInScale} ${ANIMATION_TIME}ms ease-out;
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transform: scale(0.9);
      transition: all ${ANIMATION_TIME}ms ease-out;
    `}
`;
