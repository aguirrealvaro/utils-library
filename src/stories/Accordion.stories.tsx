import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "@/components";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Primary: ComponentStory<typeof Accordion> = () => {
  const header = <>header</>;
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

  return <Accordion header={header} content={content} />;
};
