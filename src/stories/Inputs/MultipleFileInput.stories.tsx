import React from "react";
import { MultipleFileInput } from "../../components/Inputs/MultipleFileInput";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Inputs/MultipleFileInput",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <MultipleFileInput className="" placeholder="" outlined={outlined} />;
};
