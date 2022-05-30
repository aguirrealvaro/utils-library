import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@/components";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => {
  return (
    <div>
      <div>
        <Button kind="contained">Contained</Button>
        <Button kind="outlined">Outlined</Button>
        <Button kind="text">Outlined</Button>
      </div>
      <div>
        <Button size="mini">Mini</Button>
        <Button size="compact">Compact</Button>
        <Button size="default">Default</Button>
        <Button size="large">Large</Button>
      </div>
    </div>
  );
};
