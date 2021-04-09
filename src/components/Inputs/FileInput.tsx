import React, { FC } from "react";
import { Label } from "../Labels/Label";

type FileInputTypes = {
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

const BASE_FILEInput =
  "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_FILEINPUT = `${BASE_FILEInput} border text-on-secondary`;
const OUTLINED_FILEINPUT = `${BASE_FILEInput} border text-on-secondary`;

export const FileInput: FC<FileInputTypes> = ({
  outlined,
  placeholder,
  className,
}) => {
  return (
    <div>
      <Label className="" text="Default file imput example" />
      <input
        type="file"
        placeholder={placeholder}
        className={`${outlined ? OUTLINED_FILEINPUT : CONTAINED_FILEINPUT} ${className}`}
      />
    </div>
  );
};
