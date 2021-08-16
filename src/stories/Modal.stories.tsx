import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";

export default {
  title: "Example/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: "Modal 1",
};

export const Secondary = Template.bind({});
Secondary.args = {
  content: "Modal 2",
};
