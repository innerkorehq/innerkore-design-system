import React from "react";
import {StepsRange} from "../components/StepsRange";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "StepsRange",
  decorators: [withKnobs]
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <StepsRange outlined={outlined} />
  )
};