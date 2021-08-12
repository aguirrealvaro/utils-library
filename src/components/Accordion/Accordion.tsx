import React, { useState, useRef, FunctionComponent } from "react";
import styled from "styled-components";
import { Icon } from "@/components";

type AccordionProps = {
  title: string | JSX.Element;
  content: string | JSX.Element;
  disabled?: boolean;
};

export const Accordion: FunctionComponent<AccordionProps> = ({ title, content, disabled }) => {
  const [active, setActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const ref = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setActive(!active);
    setMaxHeight(!active && ref.current ? `${ref.current.scrollHeight}px` : "0px");
  };

  return (
    <div>
      <Button onClick={toggleAccordion} disabled={disabled}>
        <div>{title}</div>
        <CustomIcon icon="chevron_down" active={active} size="14px" />
      </Button>
      <ContentContainer ref={ref} maxHeight={maxHeight}>
        <div>{content}</div>
      </ContentContainer>
    </div>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  width: 100%;
  text-align: left;
  &:disabled {
    opacity: 0.5;
  }
`;
const CustomIcon = styled(Icon)<{ active: boolean }>`
  transition: transform 0.2s ease;
  transform: ${({ active }) => (active ? "rotate(-180deg)" : "rotate(0deg)")};
`;

const ContentContainer = styled.div<{ maxHeight: string }>`
  max-height: ${({ maxHeight }) => maxHeight};
  overflow: hidden;
  transition: max-height 0.2s ease;
`;
