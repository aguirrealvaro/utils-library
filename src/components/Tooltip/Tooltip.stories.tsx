import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip } from "@/components";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Primary: ComponentStory<typeof Tooltip> = () => {
  const content = (
    <>
      content
      <br />
      content
      <br />
      content
      <br />
      content
      <br />
      content
      <br />
      content
      <br />
    </>
  );

  return (
    <Tooltip content={content} placement="right">
      Hover it
    </Tooltip>
  );
};
