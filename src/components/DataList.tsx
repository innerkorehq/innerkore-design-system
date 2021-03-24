import React, { FC } from "react";
import {Label} from './Label';

type DataListTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  placeholder:string
};

const BASE_Input = "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_INPUT = `${BASE_Input} border text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input} border text-on-secondary`;

export const DataList: FC<DataListTypes> = ({ outlined,placeholder }) => {
  return (
    <div>
      <Label text="DataList"/>
      <input
        // type="email"
        list="datalistOptions"
        placeholder={placeholder}
        className={outlined ? OUTLINED_INPUT : CONTAINED_INPUT}
      />
      <datalist id="datalistOptions">
        <option value="Mumbai"/>
        <option value="Jaipur"/>
        <option value="Delhi"/>
        <option value="Kolkata"/>
        <option value="Bangalore"/>
      </datalist>
    </div>
  );
};
