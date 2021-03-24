import React from "react";
import {Checks} from "../components/Checks";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "CheckBox",
  decorators: [withKnobs]
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <Checks value="" outlined={outlined} />
  )
};