import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "@/components";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = () => {
  const [name, setName] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return <Input placeholder="Placeholder" onChange={onChange} value={name} helpText="Help text" />;
};
