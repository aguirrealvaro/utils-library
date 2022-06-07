import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ExclamationTooltip } from "@/components";

export default {
  title: "Components/ExclamationTooltip",
  component: ExclamationTooltip,
} as ComponentMeta<typeof ExclamationTooltip>;

export const Primary: ComponentStory<typeof ExclamationTooltip> = () => {
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

  return <ExclamationTooltip content={content} placement="right" />;
};
