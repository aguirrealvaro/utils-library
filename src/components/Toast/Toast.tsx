import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { useToast } from "./useToast";

type ToastProps = {
  id: number;
};

export const Toast: FunctionComponent<ToastProps> = ({ children, id }) => {
  const toast = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.remove(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, toast]);

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
