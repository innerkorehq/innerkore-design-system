import React from "react";
import { Form } from "../../components/Forms/Form";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Forms/Form",
  decorators: [withKnobs],
};

export const primary = () => {
  return <Form onClick={action("clicked")} />;
};
