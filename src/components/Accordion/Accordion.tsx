import React, { useState, useRef, FunctionComponent } from "react";
import styled from "styled-components";
import { Icon } from "@/components";
import { ANIMATION_TIME } from "./constants";

type AccordionProps = {
  title: string | JSX.Element;
  content: string | JSX.Element;
  disabled?: boolean;
};

export const Accordion: FunctionComponent<AccordionProps> = ({ title, content, disabled }) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setActive(!active);
  const height = ref.current?.scrollHeight || 0;

  return (
    <div>
      <Button onClick={toggle} disabled={disabled}>
        <div>{title}</div>
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
  margin-bottom: 0.5rem;
  width: 100%;
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
