import React, { FC } from "react";

type SaveButtonTypes = {
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

const BASE_SAVEBUTTON =
  "inline-flex justify-center py-2 px-4 border border-surface shadow-sm text-sm font-medium rounded-md text-surface bg-primary hover:bg-primary-variant focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary";
const CONTAINED_SAVEBUTTON = `${BASE_SAVEBUTTON} bg-teal-400 border border-teal-400 text-white`;
const OUTLINED_SAVEBUTTON = `${BASE_SAVEBUTTON} border border-teal-400 text-teal-400`;

export const SaveButton: FC<SaveButtonTypes> = ({
  onClick,
  label = "Save",
  outlined,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${outlined ? OUTLINED_SAVEBUTTON : CONTAINED_SAVEBUTTON} ${className}`}
    >
      <span>{label}</span>
    </button>
  );
};
