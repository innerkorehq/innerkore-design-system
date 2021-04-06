import React, { FC } from "react";
import { Label } from "../Labels/Label";

type StepsRangeTypes = {
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
  /**
   * passing the steps in the inputslider
   */
  steps: string;
};

const BASE_STEPRANGE =
  "focus:outline-none w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_STEPRANGE = `${BASE_STEPRANGE} border text-on-secondary`;
const OUTLINED_STEPRANGE = `${BASE_STEPRANGE} border text-on-secondary`;

export const StepsRange: FC<StepsRangeTypes> = ({
  outlined,
  className,
  minrange,
  maxrange,
  steps,
}) => {
  return (
    <div>
      <Label className="" text="Select Range" />
      <input
        type="range"
        min={minrange}
        max={maxrange}
        step={steps}
        className={`${outlined ? OUTLINED_STEPRANGE : CONTAINED_STEPRANGE} ${className}`}
      />
    </div>
  );
};
