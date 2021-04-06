import React, { FC, useState } from "react";
import { Label } from "../Labels/Label";

type RadioButtonsTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
};

const CheckDiv = " flex inline";
const BASE_Radio =
  "focus:outline-none focus:shadow-outline p-2 border border-on-secondary rounded mt-1";
const CONTAINED_Radio = `${BASE_Radio} border text-on-secondary`;
const OUTLINED_Radio = `${BASE_Radio} border text-on-secondary`;

export const RadioButtons: FC<RadioButtonsTypes> = ({
  outlined,
  className,
}) => {
  const [state, setstate] = useState("r1");
  return (
    <div>
      <div className={CheckDiv}>
        <input
          type="radio"
          value={"r1"}
          className={`${
            outlined ? OUTLINED_Radio : CONTAINED_Radio
          } ${className}`}
          checked={state === "r1" ? true : false}
          onChange={(e) => setstate(e.target.value)}
        />
        <Label className="" text="Default radiobutton 1" />
      </div>
      <div className={CheckDiv}>
        <input
          type="radio"
          className={`${
            outlined ? OUTLINED_Radio : CONTAINED_Radio
          } ${className}`}
          value={"r2"}
          checked={state === "r2" ? true : false}
          onChange={(e) => setstate(e.target.value)}
        />
        <Label className="" text="Default radiobutton 2" />
      </div>
    </div>
  );
};
