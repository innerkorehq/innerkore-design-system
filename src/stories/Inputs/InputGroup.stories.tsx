import React from "react";
import { InputGroup } from "../../components/Inputs/InputGroup";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Inputs/InputGroup",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <InputGroup outlined={outlined} />;
};
