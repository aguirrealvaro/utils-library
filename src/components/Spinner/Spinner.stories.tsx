import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "@/components";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Primary: ComponentStory<typeof Spinner> = () => {
  return (
    <div>
      <Spinner size="mini" color="blue" background="lightgrey" />
      <Spinner size="default" color="blue" background="lightgrey" />
      <Spinner size="large" color="blue" background="lightgrey" />
    </div>
  );
};
