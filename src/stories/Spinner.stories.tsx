import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "@/components";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Primary: ComponentStory<typeof Spinner> = () => {
  return <Spinner size={30} color="blue" background="lightgrey" />;
};
