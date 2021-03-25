import React from "react";
import { CheckBox } from "../components/CheckBox";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "CheckBox",
  decorators: [withKnobs],
};

export const primary = () => {
  const label = text("Label", "check me out");
  const outlined = boolean("Oultined", false);
  return <CheckBox className="" outlined={outlined} label={label} />;
};
