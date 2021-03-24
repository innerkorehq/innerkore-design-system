import React, { FC } from "react";

type SelectMenuTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
};

const BASE_Input =
  "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_INPUT = `${BASE_Input} border text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input} border text-on-secondary`;

export const SelectMenu: FC<SelectMenuTypes> = ({ outlined}) => {
  return (
    <div>
      <select
        className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};
