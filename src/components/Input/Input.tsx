import React, { FunctionComponent, ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type InputProps = {
  helpText?: ReactNode;
  error?: string;
  className?: string;
  inputId?: string;
};

export const Input: FunctionComponent<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  onChange,
  helpText,
  error,
  className,
  disabled,
  inputId,
  ...restProps
}) => {
  const onValidChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) onChange?.(e);
  };

  const inputProps = {
    placeholder: " ",
    onChange: onValidChange,
    error: !!error,
    ...restProps,
  };

  return (
    <div className={className}>
      <InputContainer disabled={disabled || false} error={!!error}>
        <CustomInput id={inputId} {...inputProps} />
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
  font-family: "Arial";
  position: relative;
  padding: 0 1rem;
  height: 48px;
  border-radius: 4px;
  ${({ error, theme }) =>
    error
      ? css`
          border: 1px solid ${theme.colors.red};
        `
      : css`
          border: 1px solid rgba(0, 0, 0, 0.36);
          &:focus-within {
            border: 1px solid ${theme.colors.blue};
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
  color: ${({ theme }) => theme.colors.grey};
`;

const CustomInput = styled.input<{ error: boolean }>`
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  height: 100%;
  top: 0;
  left: 0;
  &:focus + label {
    top: -0.15rem;
    left: 0.8rem;
    color: ${({ error, theme }) => theme.colors[error ? "red" : "blue"]};
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
        color: ${({ error, theme }) => theme.colors[error ? "red" : "blue"]};
      }
    }
  }
  width: 100%;
  &:disabled {
    cursor: not-allowed;
  }
`;

const Bottom = styled.div<{ error: boolean }>`
  font-family: "Arial";
  font-size: 13px;
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) => theme.colors[error ? "red" : "grey"]};
`;
