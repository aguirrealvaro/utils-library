import React, { FunctionComponent, ChangeEvent } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "./constants";

type InputProps = {
  inputId: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  helpText?: string | JSX.Element;
  error?: string;
  disabled?: boolean;
  pattern?: string;
  className?: string;
};

export const InputField: FunctionComponent<InputProps> = ({
  pattern,
  placeholder,
  name,
  value,
  onChange,
  helpText,
  inputId,
  error,
  disabled = false,
  className,
}) => {
  const onValidChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    if (e.target.validity.valid) onChange?.(e);
  };

  const inputProps = {
    placeholder: " ",
    value,
    onChange: onValidChange,
    name,
    type: "text",
    pattern,
    disabled,
    inputId,
    error: !!error,
  };

  return (
    <div className={className}>
      <InputContainer disabled={disabled} error={!!error}>
        <Input {...inputProps} />
        <Label htmlFor={inputId}>{placeholder}</Label>
      </InputContainer>
      {(helpText || error) && <Bottom error={!!error}>{error || helpText}</Bottom>}
    </div>
  );
};

const InputContainer = styled.div<{
  disabled: boolean;
  error: boolean;
}>`
  position: relative;
  padding: 0 1rem;
  height: 48px;
  border-radius: 4px;
  ${({ error }) =>
    error
      ? css`
          border: 1px solid ${COLORS.RED};
        `
      : css`
          border: 1px solid rgba(0, 0, 0, 0.36);
          &:focus-within {
            border: 1px solid ${COLORS.BLUE};
            border-radius: 4px;
          }
        `};
  ${({ disabled }) =>
    disabled &&
    css`
      background: #f3f3f3;
      border: 1px solid transparent;
      ${Label} {
        background: none;
      }
    `};
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  padding: 0 0.25rem;
  background-color: white;
  transition: 0.2s;
  pointer-events: none;
  color: ${COLORS.GREY};
`;

const Input = styled.input<{ error: boolean }>`
  height: 100%;
  top: 0;
  left: 0;
  &:focus + label {
    top: -0.15rem;
    left: 0.8rem;
    color: ${({ error }) => COLORS[error ? "RED" : "BLUE"]};
    font-size: 0.73rem;
    font-weight: 500;
  }
  &:not(:placeholder-shown) {
    &:not(:focus) {
      + label {
        top: -0.15rem;
        left: 0.8rem;
        font-size: 0.73rem;
        font-weight: 500;
        color: ${({ error }) => COLORS[error ? "RED" : "BLUE"]};
      }
    }
  }
  width: 100%;
  &:disabled {
    cursor: not-allowed;
  }
`;

const Bottom = styled.div<{ error: boolean }>`
  font-size: 13px;
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error }) => COLORS[error ? "RED" : "GREY"]};
`;
