import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "@/components";
import { useDelayUnmount } from "@/hooks";
import styled from "styled-components";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Primary: ComponentStory<typeof Modal> = (args) => {
  const { show, onOpen, onClose, isUnmounting } = useDelayUnmount();

  return (
    <>
      <Button onClick={onOpen}>open modal</Button>
      <Modal show={show} onClose={onClose} isUnmounting={isUnmounting}>
        Modal
      </Modal>
    </>
  );
};

const Button = styled.button`
  align-self: baseline;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
