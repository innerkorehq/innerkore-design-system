import React from "react";
import { MinMaxRange } from "../components/MinMaxRange";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "MinMaxRange",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <MinMaxRange minrange="0" maxrange="5" className="" outlined={outlined} />
  );
};
