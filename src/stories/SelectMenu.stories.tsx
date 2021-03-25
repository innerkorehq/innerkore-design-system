import React from "react";
import { SelectMenu } from "../components/SelectMenu";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "SelectMenu",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <SelectMenu className="" outlined={outlined} />;
};
