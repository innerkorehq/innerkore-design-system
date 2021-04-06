import React, { FC } from "react";
import { Label } from "../Labels/Label";

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

const BASE_RANGE =
  "focus:outline-none w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_RANGE = `${BASE_RANGE} border text-on-secondary`;
const OUTLINED_RANGE = `${BASE_RANGE} border text-on-secondary`;

export const Range: FC<RangeTypes> = ({ outlined, className }) => {
  return (
    <div>
      <Label className="" text="Select Range" />
      <input
        type="range"
        className={`${outlined ? OUTLINED_RANGE : CONTAINED_RANGE} ${className}`}
      />
    </div>
  );
};
