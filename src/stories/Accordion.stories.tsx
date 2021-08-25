import React from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "@/components";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Primary: ComponentStory<typeof Accordion> = () => {
  const header = <>header</>;
  const content = <>content</>;

  return <Accordion header={header} content={content} />;
};
