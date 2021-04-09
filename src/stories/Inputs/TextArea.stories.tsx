import React from "react";
import { TextArea } from "../../components/Inputs/TextArea";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Inputs/TextArea",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <TextArea className="" outlined={outlined} />;
};
