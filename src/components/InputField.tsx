import React, { FC } from "react";

type InputFieldTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * placeholder is the text we want to show inside InputField
   */
  placeholder: string;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
  /**
   * declaring the type if input we want
   */
  type: string;
};

const BASE_Input =
  "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_INPUT = `${BASE_Input} border text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input} border text-on-secondary`;

export const InputField: FC<InputFieldTypes> = ({
  outlined,
  placeholder,
  className,
  type,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`${outlined ? OUTLINED_INPUT : CONTAINED_INPUT}${className}`}
      />
    </div>
  );
};
