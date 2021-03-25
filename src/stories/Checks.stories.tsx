import React from "react";
import { Checks } from "../components/Checks";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Checks",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <Checks className="" outlined={outlined} />;
};
