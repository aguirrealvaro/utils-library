import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon, ALL_ICONS } from "@/components/Icon";
import styled from "styled-components";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Primary: ComponentStory<typeof Icon> = () => {
  return (
    <Container>
      {ALL_ICONS.map((icon) => (
        <Icon icon={icon} key={icon} marginRight="10px" />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
