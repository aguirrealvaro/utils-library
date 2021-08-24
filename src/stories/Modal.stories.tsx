import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "@/components";
import { useDelayUnmount } from "@/hooks";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const { show, onOpen, onClose } = useDelayUnmount();

  return (
    <>
      <button onClick={onOpen}>open modal</button>
      <Modal show={show} onClose={onClose}>
        Modal!
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
