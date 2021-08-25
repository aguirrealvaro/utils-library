import React from "react";
import { useToast } from "@/components";
import styled from "styled-components";

export default {
  title: "Components/Toast",
};

export const Primary = () => {
  const toast = useToast();

  return <Button onClick={() => toast.open("Open toast")}>Open toast</Button>;
};

const Button = styled.button`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
