import React, { FC } from "react";
import {Label} from "./Label";

type ColorPickerTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
};

const BASE_Input = "focus:outline-none focus:shadow-outline h-10 w-10 p-1 border border-on-secondary rounded mt-1";
const CONTAINED_INPUT = `${BASE_Input} border text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input} border text-on-secondary`;

export const ColorPicker: FC<ColorPickerTypes> = ({ outlined }) => {
  return (
    <div>
        <Label text="Pick a color"/>
      <input
        type="color"
        value="#6200ee"
        className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}
      />
    </div>
  );
};
