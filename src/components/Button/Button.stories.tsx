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
        <Button kind="text">Text</Button>
      </div>
      <div>
        <Button size="mini">Mini</Button>
        <Button size="compact">Compact</Button>
        <Button size="default">Default</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="default">Default</Button>
        <Button variant="positive">Positive</Button>
        <Button variant="negative">Negative</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="neutral">Neutral</Button>
      </div>
      <div>
        <Button variant="default" kind="outlined">
          Default
        </Button>
        <Button variant="positive" kind="outlined">
          Positive
        </Button>
        <Button variant="negative" kind="outlined">
          Negative
        </Button>
        <Button variant="warning" kind="outlined">
          Warning
        </Button>
        <Button variant="neutral" kind="outlined">
          Neutral
        </Button>
      </div>
    </div>
  );
};
