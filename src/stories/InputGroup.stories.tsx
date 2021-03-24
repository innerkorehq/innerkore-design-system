import React from "react";
import {InputGroup} from '../components/InputGroup';
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "InputGroup",
  decorators: [withKnobs]
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <InputGroup placeholder="" outlined={outlined} />
  )
};