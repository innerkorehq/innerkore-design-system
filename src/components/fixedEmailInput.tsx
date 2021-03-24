import React, { FC } from "react";

type FixedEmailInputTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  placeholder:string;
  value:string
};

const BASE_Input = "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_INPUT = `${BASE_Input} border text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input} border text-on-secondary`;

export const FixedEmailInput: FC<FixedEmailInputTypes> = ({ outlined,placeholder,value }) => {
  return (
    <div>
      <input
        type="email"
        value={value}
        placeholder={placeholder}
        className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}
      />
    </div>
  );
};
