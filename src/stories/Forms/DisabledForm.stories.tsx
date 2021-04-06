import React from "react";
import { DisabledForm } from "../../components/Forms/DisabledForm";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Forms/DisabledForm",
  decorators: [withKnobs],
};

export const primary = () => {
  return <DisabledForm className="" onClick={action("clicked")} />;
};
