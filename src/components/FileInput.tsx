import React, { FC } from "react";
import {Label} from "./Label";

type FileInputTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  placeholder:string
};

const BASE_Input = "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_INPUT = `${BASE_Input} border text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input} border text-on-secondary`;

export const FileInput: FC<FileInputTypes> = ({ outlined,placeholder }) => {
  return (
    <div>
        <Label text="Default file imput example"/>
      <input
        type="file"
        placeholder={placeholder}
        className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}
      />
    </div>
  );
};
