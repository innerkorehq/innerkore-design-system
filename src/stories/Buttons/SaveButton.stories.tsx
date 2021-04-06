import React from "react";
import { SaveButton } from "../../components/Buttons/SaveButton";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Buttons/SaveButton",
  decorators: [withKnobs],
};

export const primary = () => {
  const label = text("Label", "Submit");
  const outlined = boolean("Oultined", false);
  return (
    <SaveButton
      className=""
      onClick={action("clicked")}
      outlined={outlined}
      label={label}
    />
  );
};
