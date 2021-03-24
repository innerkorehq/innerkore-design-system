import React, { FC } from "react";

type TextAreaTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
 
};


const textarea =' focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded'

export const TextArea: FC<TextAreaTypes> = ({ outlined }) => {
  return (
    <div>
         <textarea className={textarea}></textarea>
    </div>
  );
};
