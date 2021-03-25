import React, { FC } from "react";
import { Label } from "./Label";

type CheckBoxTypes = {
  /**
   * Label of the button
   */
  label: string;
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
};

const checkbox = "flex items-center";
const Check_button = "h-4 w-4 text-primary rounded";
const CONTAINED_Check = `${Check_button} border`;
const OUTLINED_check = `${Check_button} border border-on-secondary`;

export const CheckBox: FC<CheckBoxTypes> = ({
  label = "Check me out",
  outlined,
  className,
}) => {
  return (
    <div className={checkbox}>
      <input
        type="checkbox"
        className={`${outlined ? OUTLINED_check : CONTAINED_Check}${className}`}
      />
      <Label className="" text="checkboxes" />
    </div>
  );
};
