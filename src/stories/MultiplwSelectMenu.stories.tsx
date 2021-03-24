import React from "react";
import {MultipleSelectMenu} from "../components/MultipleSelectMenu";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "MultipleSelectMenu",
  decorators: [withKnobs]
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <MultipleSelectMenu outlined={outlined} />
  )
};