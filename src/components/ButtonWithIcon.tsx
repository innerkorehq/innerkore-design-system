import React, { FC } from 'react';
import ContainedIcon from './click.svg';
import OutlinedIcon from './click-outlined.svg';

export type ButtonTypes = {
  /**
   * Label of the button
   */
  label: string;
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * Button type
   */
  type: string;
  /**
   * Button click action
   */
  onClick(): void;
};

const BASE_BUTTON =
  'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg';
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-teal-400 border border-teal-400 text-white`;
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-teal-400 text-teal-400`;

export const ButtonWithIcon: FC<ButtonTypes> = ({
  onClick,
  label = 'Some label',
  outlined,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type ? 'button' : 'submit'}
      className={outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}
    >
      <img className="inline mr-2 h-6" src={outlined ? OutlinedIcon : ContainedIcon} alt="" />
      {label}
    </button>
  );
};

export default ButtonWithIcon;
