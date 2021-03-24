import React from "react";
import {RadioButtons} from '../components/RadioButtons'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "RadioButtons",
  decorators: [withKnobs]
};

export const primary = () => {
  const label = text("Label", "check me out");
  const outlined = boolean("Oultined", false);
  return (
    <RadioButtons outlined={outlined} value=""/>
  )
};