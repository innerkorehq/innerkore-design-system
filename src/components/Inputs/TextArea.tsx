import React, { FC } from "react";

type TextAreaTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
};

const textarea =
  " focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded";

export const TextArea: FC<TextAreaTypes> = ({ outlined, className }) => {
  return (
    <div>
      <textarea className={`${textarea} ${className}`}></textarea>
    </div>
  );
};
