import React, { FC } from "react";

type LabelTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * this is the text you want to show on a label
   */
  text: string;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
};

const BASE_LABEL = "p-2 mt-1 my-3";
const CONTAINED_LABEL = `${BASE_LABEL}  text-on-secondary`;
const OUTLINED_LABEL = `${BASE_LABEL}  text-on-secondary`;

export const Label: FC<LabelTypes> = ({ outlined, text, className }) => {
  return (
    <div>
      <label
        className={`${outlined ? OUTLINED_LABEL : CONTAINED_LABEL} ${className}`}
      >
        {text}
      </label>
    </div>
  );
};
