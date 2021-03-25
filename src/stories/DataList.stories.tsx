import React from "react";
import { DataList } from "../components/DataList";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "DataList",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return (
    <DataList
      className=""
      value={["Kolkata", "Jaipur", "Mumbai", "Pune", "Bagalore"]}
      placeholder="Type to search"
      outlined={outlined}
    />
  );
};
