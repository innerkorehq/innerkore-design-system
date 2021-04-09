import React from "react";
import { RadioButtons } from "../../components/Buttons/RadioButtons";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Buttons/RadioButtons",
  decorators: [withKnobs],
};

export const primary = () => {
  const label = text("Label", "check me out");
  const outlined = boolean("Oultined", false);
  return <RadioButtons className="" outlined={outlined} />;
};
