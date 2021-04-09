import React, { FC } from "react";
import { Label } from "../Labels/Label";

type DataListTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * placeholder is the text you want to show indide the inputfield
   */
  placeholder: string;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
  /**
   * passing the array data to the datalist
   */
  value: [];
};

const BASE_DATALIST =
  "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_DATALIST = `${BASE_DATALIST} border text-on-secondary`;
const OUTLINED_DATALIST = `${BASE_DATALIST} border text-on-secondary`;

export const DataList: FC<DataListTypes> = ({
  outlined,
  placeholder,
  className,
  value,
}) => {
  return (
    <div>
      <Label className="" text="DataList" />
      <input
        list="datalistOptions"
        placeholder={placeholder}
        className={`${
          outlined ? OUTLINED_DATALIST : CONTAINED_DATALIST
        } ${className}`}
      />
      <datalist id="datalistOptions">
        {value.map((item, index) => {
          return <option value={item} />;
        })}
      </datalist>
    </div>
  );
};
