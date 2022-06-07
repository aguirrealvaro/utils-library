import React, { FunctionComponent, useEffect, useLayoutEffect, useRef, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { useDelayUnmount, useOnClickOutside } from "@/hooks";
import { PlacementType, CoordinatesType, TriggerType } from ".";

const ANIMATION_TIME = 200;

export type DropdownProps = {
  content: ReactNode;
  placement?: PlacementType;
  trigger?: TriggerType;
  className?: string;
};

export const Dropdown: FunctionComponent<DropdownProps> = ({
  children,
  content,
  placement = "left",
  trigger = "click",
  className,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<CoordinatesType>({ top: 0, left: 0 });

  const { show, onOpen, onClose, onToggle, isUnmounting } = useDelayUnmount({
    timeout: ANIMATION_TIME,
  });

  const openProps = {
    ...(trigger === "hover" ? { onMouseEnter: onOpen, onMouseLeave: onClose } : { onClick: onToggle }),
  };

  useOnClickOutside({ ref: dropdownRef, callback: onClose, prevent: !show || trigger === "hover" });

  useLayoutEffect(() => {
    const bounding = triggerRef.current?.getBoundingClientRect();
    const dropdownWidth = dropdownRef.current?.offsetWidth || 0;

    if (!bounding) return;

    const gap = 7;
    const { x, y, width, height } = bounding;

    const positions: Record<PlacementType, CoordinatesType> = {
      right: { top: x + width - dropdownWidth, left: y + height + gap + window.scrollY },
      left: { top: x, left: y + height + gap + window.scrollY },
      center: { top: x + width / 2 - dropdownWidth / 2, left: y + height + gap + window.scrollY },
    };

    setCoords(positions[placement]);
  }, [triggerRef, placement, show]);

  useEffect(() => {
    window.addEventListener("resize", onClose);
    return () => window.removeEventListener("resize", onClose);
  }, [onClose]);

  return (
    <>
      <Container className={className} {...openProps} ref={triggerRef}>
        {children}
      </Container>
      {show &&
        createPortal(
          <Content coords={coords} ref={dropdownRef} fadeOut={isUnmounting}>
            {content}
          </Content>,
          document.body
        )}
    </>
  );
};

const Container = styled.div`
  align-self: baseline;
  display: inline-block;
`;

const fadeInDow = keyframes`
  from { opacity: 0; transform: translateY(-5%); }
  to { opacity: 1; transform: translateY(0);}
`;

const Content = styled.div<{ coords: CoordinatesType; fadeOut: boolean }>`
  position: absolute;
  top: ${({ coords }) => coords.left}px;
  left: ${({ coords }) => coords.top}px;
  animation: ${fadeInDow} ${ANIMATION_TIME}ms ease-out;
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transform: translateY(-5%);
      transition: all ${ANIMATION_TIME}ms ease-out;
    `}
`;
