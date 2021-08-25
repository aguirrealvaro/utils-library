import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputField } from "@/components";

export default {
  title: "Components/InputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

export const Primary: ComponentStory<typeof InputField> = () => {
  const [name, setName] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return (
    <InputField
      placeholder="Placeholder"
      inputId="input-id"
      onChange={onChange}
      value={name}
      helpText="Help text"
    />
  );
};
