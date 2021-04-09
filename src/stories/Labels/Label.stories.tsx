import React from "react";
import { Label } from "../../components/Labels/Label";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Labels/Label",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <Label className="" text="label text" outlined={outlined} />;
};
