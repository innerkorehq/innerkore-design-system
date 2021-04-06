import React, { FC } from "react";
import { Label } from "../Labels/Label";

type MultipleFileInputTypes = {
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

const BASE_MULTIPLEInput =
  "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_MULTIPLEINPUT = `${BASE_MULTIPLEInput} border text-on-secondary`;
const OUTLINED_MULTIPLEINPUT = `${BASE_MULTIPLEInput} border text-on-secondary`;

export const MultipleFileInput: FC<MultipleFileInputTypes> = ({
  outlined,
  placeholder,
  className,
}) => {
  return (
    <div>
      <Label className="" text="Default file imput example" />
      <input
        type="file"
        multiple
        placeholder={placeholder}
        className={`${outlined ? OUTLINED_MULTIPLEINPUT : CONTAINED_MULTIPLEINPUT} ${className}`}
      />
    </div>
  );
};
