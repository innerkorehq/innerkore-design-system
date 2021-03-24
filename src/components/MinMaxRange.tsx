import React, { FC } from "react";
import { Label } from "./Label";

type MinMaxRangeTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
};

const BASE_Input = "focus:outline-none w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_INPUT = `${BASE_Input} border text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input} border text-on-secondary`;

export const MinMaxRange: FC<MinMaxRangeTypes> = ({ outlined}) => {
  return (
    <div>
        <Label text="Select Range"/>
      <input
        type="range"
        min="0"
        max="5"
        className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}
      />
    </div>
  );
};
