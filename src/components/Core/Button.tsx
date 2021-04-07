import React, { FC } from 'react';

export type ButtonTypes = {
  /** Label of the button */
  label: string;

  /** Style of the Button */
  type: 'normal' | 'outlined' | 'text';

  /** Button click action */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /** Button size */
  size: 'small' | 'medium' | 'large';

  /** Give classes to component */
  className: string;

};

const textClasses = 'rounded outline-none tracking-wider font-bold';
const normalClassses = `${textClasses} bg-teal-400 text-white`;
const outlinedClasses = `${textClasses} border border-teal-400 text-teal-400`;
const smallClasses = 'text-xs px-3 py-1';
const mediumClasses = 'text-md px-4 py-2';
const largeClasses = 'text-xl px-16 py-4';


export const Button: FC<ButtonTypes> = ({
  onClick,
  label = 'Button',
  type = 'normal',
  size = 'medium',
  className, 
}) => {
  let btnSize = mediumClasses;
  if (size === 'small') {
    btnSize = smallClasses;
  } else if (size === 'large') {
    btnSize = largeClasses;
  }

  let styleType = normalClassses;
  if (type === 'text') {
    styleType = textClasses;
  } else if (type === 'outlined') {
    styleType = outlinedClasses;
  }
  
  return (
    <button type="button" onClick={onClick} className={`${btnSize} ${styleType} ${className}`}>
      {label}
    </button>
  );
};

export default Button;
