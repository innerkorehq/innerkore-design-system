import React from "react";
import {FloatingLabel} from "../components/Floatinglabels";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Floatinglabel",
  decorators: [withKnobs]
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <FloatingLabel placeholder="" outlined={outlined} />
  )
};