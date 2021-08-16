import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { ToastType } from "./types";
import { useToast } from "./useToast";

export const Toast: FunctionComponent<ToastType> = ({ children, id, permanent }) => {
  const toast = useToast();

  useEffect(() => {
    if (permanent) return;
    const timer = setTimeout(() => {
      toast.remove(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, toast, permanent]);

  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
