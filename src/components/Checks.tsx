import React, { FC, useState } from "react";
import { Label } from "./Label";

type ChecksTypes = {
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
const BASE_CHECK =
  "focus:outline-none focus:shadow-outline p-2 border border-on-secondary rounded mt-1";
const CONTAINED_CHECK = `${BASE_CHECK} border text-on-secondary`;
const OUTLINED_CHECK = `${BASE_CHECK} border text-on-secondary`;

export const Checks: FC<ChecksTypes> = ({ outlined, className }) => {
  const [state, setstate] = useState(true);
  return (
    <div>
      <div className={CheckDiv}>
        <input
          type="Checkbox"
          checked={state}
          onChange={() => setstate(!state)}
          className={`${
            outlined ? OUTLINED_CHECK : CONTAINED_CHECK
          }${className}`}
        />
        <Label className="" text="Default Checkbox" />
      </div>
      <div className={CheckDiv}>
        <input
          type="Checkbox"
          className={`${
            outlined ? OUTLINED_CHECK : CONTAINED_CHECK
          }${className}`}
        />
        <Label className="" text="Default Checkbox" />
      </div>
    </div>
  );
};
