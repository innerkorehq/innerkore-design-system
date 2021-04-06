import React, { FC } from "react";

type SelectMenuTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
};

const BASE_SELECTMENU =
  "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_SELECTMENU = `${BASE_SELECTMENU} border text-on-secondary`;
const OUTLINED_SELECTMENU = `${BASE_SELECTMENU} border text-on-secondary`;

export const SelectMenu: FC<SelectMenuTypes> = ({ outlined, className }) => {
  return (
    <div>
      <select
        className={`${outlined ? OUTLINED_SELECTMENU : CONTAINED_SELECTMENU} ${className}`}
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};
