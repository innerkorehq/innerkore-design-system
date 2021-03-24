import React, { FC } from 'react';

type CheckBoxTypes = {
  /**
   * Label of the button
  */
  label: string;
  /**
   * Boolean value to define the button style 
  */
  outlined?: boolean;
}

const checkbox ='flex items-center'
const Label = 'ml-2 text-sm text-on-secondary'
const Check_button = 'h-4 w-4 text-primary rounded'
const CONTAINED_Check = `${Check_button} border`
const OUTLINED_check = `${Check_button} border border-on-secondary`

export const CheckBox:FC<CheckBoxTypes> = ({label = "Check me out", outlined }) => {
  return (
   <div className={checkbox}>
       <input 
       type="checkbox"
       className={outlined ? OUTLINED_check : CONTAINED_Check}
       />
       <label className={Label}>{label}</label>
   </div>
  )
};