import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "@/components";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

export const Primary: ComponentStory<typeof Select> = () => {
  const [option, setOption] = useState<string | undefined>(undefined);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3", disabled: true },
    { label: "Option 4", value: "option4" },
  ];

  return <Select value={option} options={options} onChange={setOption} placeholder="Choose option" />;
};
