import React, { FC } from 'react';

export type ButtonTypes = {
  /* Label of the button */
  label: string;

  /* Button type */
  type: 'normal' | 'outlined' | 'text';

  /* Button click action */
  onClick(): void;

  /* Button size type*/
  size: 'small' | 'medium' | 'large';
};

const textClasses = 'rounded outline-none font-normal tracking-wider font-bold';
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
}) => {
  let fontSize = mediumClasses;
  if (size === 'small') {
    fontSize = smallClasses;
  } else if (size === 'large') {
    fontSize = largeClasses;
  }

  let StyleType = normalClassses;
  if (type === 'text') {
    StyleType = textClasses;
  } else if (type === 'outlined') {
    StyleType = outlinedClasses;
  }

  return (
    <button type='button' onClick={onClick} className={`${fontSize} ${StyleType}`}>
      {label}
    </button>
  );
};

export default Button;
