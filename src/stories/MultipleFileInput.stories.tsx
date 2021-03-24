import React from "react";
import {MultipleFileInput} from '../components/MultipleFileInput';
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "MultipleFileInput",
  decorators: [withKnobs]
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <MultipleFileInput placeholder="" outlined={outlined} />
  )
};