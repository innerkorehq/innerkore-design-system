import React from "react";
import { StepsRange } from "../../components/RangeInputs/StepsRange";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "RangeInput/StepsRange",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <StepsRange
      minrange="0"
      maxrange="5"
      steps="0.5"
      className=""
      outlined={outlined}
    />
  );
};
