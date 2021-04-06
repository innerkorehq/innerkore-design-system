import React from "react";
import { FloatingLabel } from "../../components/Labels/Floatinglabels";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Labels/Floatinglabel",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <FloatingLabel className="" placeholder="" outlined={outlined} />;
};
