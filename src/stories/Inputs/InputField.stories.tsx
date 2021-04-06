import React from "react";
import { InputField } from "../../components/Inputs/InputField";
// import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Inputs/InputField",
  decorators: [withKnobs],
};

export const primary = () => {
  //   const label = text("Label", "Save Now");
  const outlined = boolean("Oultined", false);
  return (
    <InputField className="" type="email" placeholder="" outlined={outlined} />
  );
};
