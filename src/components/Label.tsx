import React, { FC } from "react";

type LabelTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  text:string
};

const BASE_Input = "p-2 mt-1 my-3";
const CONTAINED_INPUT = `${BASE_Input}  text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input}  text-on-secondary`;

export const Label: FC<LabelTypes> = ({ outlined,text }) => {
  return (
    <div>
      <label  className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}>{text}</label>
    </div>
  );
};
