import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toggle } from "@/components";

export default {
  title: "Components/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Primary: ComponentStory<typeof Toggle> = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const onToggle = () => setEnabled(!enabled);

  return <Toggle checked={enabled} onChange={onToggle} />;
};
