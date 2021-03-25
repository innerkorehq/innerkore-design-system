import React from "react";
import { FileInput } from "../components/FileInput";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "FileInput",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <FileInput className="" placeholder="" outlined={outlined} />;
};
