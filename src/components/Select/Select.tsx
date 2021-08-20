import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import styled, { css } from "styled-components";
import { Icon } from "@/components";
import { theme } from "@/components/App";
import { useOnClickOutside } from "@/hooks";
import { LabelValue } from "./types";

type SelectProps = {
  placeholder: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  options: LabelValue[];
  disabled?: boolean;
  helpText?: string;
  error?: string;
};

export const Select: FunctionComponent<SelectProps> = ({
  placeholder,
  value,
  onChange,
  options,
  disabled,
  helpText,
  error,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  useOnClickOutside({ ref: containerRef, callback: closeDropdown, prevent: !isOpen });

  useEffect(() => {
    if (value) closeDropdown();
  }, [value, closeDropdown]);

  const valueSelected = options.find((option) => option.value === value)?.label;

  return (
    <Container ref={containerRef}>
      <Button onClick={() => setIsOpen(!isOpen)} disabled={disabled} hasValue={!!value} error={!!error}>
        {value && <Placeholder>{placeholder}</Placeholder>}
        <span>{valueSelected || placeholder}</span>
        <Icon icon="chevron_down" size="10px" color={theme.colors.grey} />
      </Button>
      {isOpen && (
        <Dropdown>
          {options.map((option, i) => {
            const onClick = () => onChange(option.value);
            const isSelected = value === option.value;
            return (
              <Option key={i} onClick={onClick} disabled={option.disabled} isSelected={isSelected}>
                {option.label}
              </Option>
            );
          })}
        </Dropdown>
      )}
      {(helpText || error) && <BottomText error={!!error}>{error || helpText}</BottomText>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Placeholder = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  font-size: 0.72rem;
  top: -8px;
  left: 7px;
  padding: 0 5px;
`;

const Button = styled.button<{ hasValue: boolean; error: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  color: ${({ theme, hasValue }) => theme.colors[hasValue ? "black" : "grey"]};
  width: 100%;
  height: 48px;
  padding: 1rem;
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.red : "rgba(0, 0, 0, 0.36)")};
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    ${Placeholder} {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  &:disabled {
    background: #f3f3f3;
    border: 1px solid transparent;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 1;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background: #fff;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  border-radius: 8px;
  width: 100%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transform: translateY(5px);
`;

const Option = styled.button<{ isSelected: boolean }>`
  padding: 8px 12px;
  margin-bottom: 4px;
  text-align: left;
  &:last-child {
    margin-bottom: 0;
  }
  border-radius: 8px;
  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
        `
      : css`
          &:hover {
            background-color: #f1f1f1;
          }
        `};

  &:disabled {
    background: none;
  }
`;

const BottomText = styled.span<{ error: boolean }>`
  display: block;
  color: ${({ theme, error }) => theme.colors[error ? "red" : "grey"]};
  font-size: 0.75rem;
  margin-top: 0.4rem;
  margin-left: 1rem;
`;
