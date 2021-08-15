import React, { useState, useRef, FunctionComponent } from "react";
import styled from "styled-components";
import { Icon } from "@/components";
import { ANIMATION_TIME } from ".";

type AccordionProps = {
  header: JSX.Element;
  content: JSX.Element;
  disabled?: boolean;
  className?: string;
};

export const Accordion: FunctionComponent<AccordionProps> = ({ header, content, disabled, className }) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setActive(!active);
  const height = ref.current?.scrollHeight || 0;

  return (
    <div className={className}>
      <Button onClick={toggle} disabled={disabled}>
        <div>{header}</div>
        <Chevron icon="chevron_down" active={active} size="14px" />
      </Button>
      <Content ref={ref} height={height} active={active}>
        {content}
      </Content>
    </div>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
  &:disabled {
    opacity: 0.5;
  }
`;

const Chevron = styled(Icon)<{ active: boolean }>`
  transition: transform 0.2s ease;
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${ANIMATION_TIME}ms ease;
`;

const Content = styled.div<{ height: number; active: boolean }>`
  max-height: ${({ active, height }) => `${active ? height : 0}px`};
  overflow: hidden;
  transition: max-height ${ANIMATION_TIME}ms ease;
`;
