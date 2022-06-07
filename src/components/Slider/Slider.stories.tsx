import React from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Slider } from "@/components";

export default {
  title: "Components/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

export const Primary: ComponentStory<typeof Slider> = () => {
  const array = [...Array(50).keys()];

  return (
    <Slider>
      {array.map((item, i) => (
        <Container key={i}>{item}</Container>
      ))}
    </Slider>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 2px 20px;
  border-radius: 10px;
  width: 80px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  text-align: center;
`;
