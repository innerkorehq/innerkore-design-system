import React, { FC } from "react";
import { Label } from "./Label";

type RangeTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
};

const BASE_Input =
  "focus:outline-none w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_INPUT = `${BASE_Input} border text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input} border text-on-secondary`;

export const Range: FC<RangeTypes> = ({ outlined, className }) => {
  return (
    <div>
      <Label className="" text="Select Range" />
      <input
        type="range"
        className={`${outlined ? OUTLINED_INPUT : CONTAINED_INPUT}${className}`}
      />
    </div>
  );
};
