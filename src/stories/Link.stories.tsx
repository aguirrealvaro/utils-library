import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "@/components";

export default {
  title: "Components/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

export const Primary: ComponentStory<typeof Link> = () => {
  return (
    <Link href="https://www.google.com.ar/" target="_blank">
      Link
    </Link>
  );
};
