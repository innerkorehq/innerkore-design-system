import React, { FC } from "react";
import { Label } from "../Labels/Label";

type MinMaxRangeTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
  /**
   * passing the minimum range of a inoutslider
   */
  minrange: string;
  /**
   * passing the maximum range of the inoutslider
   */
  maxrange: string;
};

const BASE_MRANGE =
  "focus:outline-none w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_MRANGE = `${BASE_MRANGE} border text-on-secondary`;
const OUTLINED_MRANGE = `${BASE_MRANGE} border text-on-secondary`;

export const MinMaxRange: FC<MinMaxRangeTypes> = ({
  outlined,
  className,
  minrange,
  maxrange,
}) => {
  return (
    <div>
      <Label className="" text="Select Range" />
      <input
        type="range"
        min={minrange}
        max={maxrange}
        className={`${outlined ? OUTLINED_MRANGE : CONTAINED_MRANGE} ${className}`}
      />
    </div>
  );
};