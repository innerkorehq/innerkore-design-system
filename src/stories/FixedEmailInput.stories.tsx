import React from "react";
import { FixedEmailInput } from "../components/fixedEmailInput";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "FixedEmailInput",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <FixedEmailInput
      placeholder=""
      className=""
      outlined={outlined}
      value="Info@example.com"
    />
  );
};
