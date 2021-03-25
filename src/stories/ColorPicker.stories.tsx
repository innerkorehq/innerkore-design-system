import React from "react";
import { ColorPicker } from "../components/ColorPicker";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "ColorPicker",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <ColorPicker className="" value="#6200ee" outlined={outlined} />;
};
