import React, { FC, useState } from "react";
import {Label} from './Label';

type RadioButtonsTypes = {
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

export const RadioButtons: FC<RadioButtonsTypes> = ({ outlined,value}) => {
    const [state, setstate] = useState('r1')
  return (
    <div>
        <div className={CheckDiv}>
      <input
        type="radio"
        value={'r1'}
        className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}
        checked={state==='r1'?true:false}
        onChange={(e)=>setstate(e.target.value)}
      />
      <Label text="Default radiobutton 1"/>
      </div>
      <div className={CheckDiv}>
      <input
        type="radio"
        className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}
        value={'r2'}
        checked={state==='r2'?true:false}
        onChange={(e)=>setstate(e.target.value)}
      />
      <Label text="Default radiobutton 2"/>
      </div>
    </div>
  );
};
