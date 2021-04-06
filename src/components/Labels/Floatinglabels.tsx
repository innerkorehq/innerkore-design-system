import React, { FC } from "react";

type FloatingLabelTypes = {
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
};

const BASE_FLABEL =
  "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_FLABEL = `${BASE_FLABEL}  text-on-secondary`;
const OUTLINED_FLABEL = `${BASE_FLABEL}  text-on-secondary`;

export const FloatingLabel: FC<FloatingLabelTypes> = ({
  outlined,
  placeholder,
  className,
}) => {
  return (
    <div>
      <label htmlFor="namedInput">Floating point</label>
      <input
        type="email"
        id="namedInput"
        placeholder={placeholder}
        className={`${outlined ? OUTLINED_FLABEL : CONTAINED_FLABEL} ${className}`}
      />
    </div>
  );
};
