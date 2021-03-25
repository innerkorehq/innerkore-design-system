import React from "react";
import { TextArea } from "../components/TextArea";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "TextArea",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <TextArea className="" outlined={outlined} />;
};
