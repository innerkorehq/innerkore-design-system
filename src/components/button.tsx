import React, { FC } from "react";

type ButtonTypes = {
  /**
   * Label of the button
   */
  label: string;
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * Button click action
   */
  onClick(): void;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
};

const BASE_BUTTON =
  "rounded outline-none shadow py-3 px-12 font-normal uppercase xl:tracking-wider text-lg bg-primary text-surface ";
const CONTAINED_BUTTON = `${BASE_BUTTON}  border border-secondary`;
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-on-secondary`;

export const Button: FC<ButtonTypes> = ({
  onClick,
  label = "Some label",
  outlined,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}${className}`}
    >
      <span>{label}</span>
    </button>
  );
};
