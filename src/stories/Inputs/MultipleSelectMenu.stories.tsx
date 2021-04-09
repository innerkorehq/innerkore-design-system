import React from "react";
import { MultipleSelectMenu } from "../../components/Inputs/MultipleSelectMenu";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Inputs/MultipleSelectMenu",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <MultipleSelectMenu className="" outlined={outlined} />;
};
