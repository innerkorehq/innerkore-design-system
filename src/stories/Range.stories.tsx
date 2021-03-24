import React from "react";
import {Range} from "../components/Range";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Range",
  decorators: [withKnobs]
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <Range outlined={outlined} />
  )
};