import React from "react";
import { Range } from "../../components/RangeInputs/Range";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "RangeInput/Range",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <Range className="" outlined={outlined} />;
};
