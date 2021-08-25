import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon, IconType } from "@/components/Icon";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const icons: IconType[] = ["burger", "chevron_down"];

export const Primary: ComponentStory<typeof Icon> = () => {
  return (
    <>
      {icons.map((icon) => (
        <Icon icon={icon} key={icon} />
      ))}
    </>
  );
};
