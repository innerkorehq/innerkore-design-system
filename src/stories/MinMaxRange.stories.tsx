import React from "react";
import {MinMaxRange} from "../components/MinMaxRange";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "MinMaxRange",
  decorators: [withKnobs]
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <MinMaxRange outlined={outlined} />
  )
};