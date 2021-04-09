import React, { FC } from "react";
import { Label } from "../Labels/Label";

type ColorPickerTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
  /**
   * value adds a initial color to acolor picker
   */
  value: string;
};

const BASE_COLOR =
  "focus:outline-none focus:shadow-outline h-10 w-10 p-1 border border-on-secondary rounded mt-1";
const CONTAINED_COLOR = `${BASE_COLOR} border text-on-secondary`;
const OUTLINED_COLOR = `${BASE_COLOR} border text-on-secondary`;

export const ColorPicker: FC<ColorPickerTypes> = ({
  outlined,
  value,
  className,
}) => {
  return (
    <div>
      <Label className="" text="Pick a color" />
      <input
        type="color"
        value={value}
        className={`${outlined ? OUTLINED_COLOR : CONTAINED_COLOR} ${className}`}
      />
    </div>
  );
};
