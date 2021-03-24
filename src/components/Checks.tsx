import React, { FC, useState } from "react";
import {Label} from './Label';

type ChecksTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  value:string
};

const CheckDiv =' flex inline'
const BASE_Input = "focus:outline-none focus:shadow-outline p-2 border border-on-secondary rounded mt-1";
const CONTAINED_INPUT = `${BASE_Input} border text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input} border text-on-secondary`;

export const Checks: FC<ChecksTypes> = ({ outlined,value}) => {
    const [state, setstate] = useState(true)
  return (
    <div>
        <div className={CheckDiv}>
      <input
        type="Checkbox"
        value={value}
        checked={state}
        onChange={()=>setstate(!state)}
        className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}
      />
      <Label text="Default Checkbox"/>
      </div>
      <div className={CheckDiv}>
      <input
        type="Checkbox"
        value={value}
        className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}
      />
      <Label text="Default Checkbox"/>
      </div>
    </div>
  );
};
