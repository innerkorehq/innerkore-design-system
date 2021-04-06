import React, { FC } from 'react';

export type ButtonTypes = {
  /* Label of the button */
  label: string;

  /* Button type */
  type: string;

  /* Button click action */
  onClick(): void;

  fontSize: string;
  color: string;
  bgColor: string;
  padding: string;
  borderRadius: string;
};

export const Button: FC<ButtonTypes> = ({
  onClick,
  label = 'Button',
  type,
  fontSize = 'text-xs',
  color = 'text-white',
  bgColor = 'bg-purple-600',
  padding = 'py-3 px-8',
  borderRadius = 'rounded-md',
}) => {
  return (
    <button
      onClick={onClick}
      type={type ? 'button' : 'submit'}
      className={`font-bold ${fontSize} ${color} ${bgColor} ${padding} ${borderRadius}`}
    >
      {label}
    </button>
  );
};

export default Button;
