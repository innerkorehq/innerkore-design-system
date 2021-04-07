import React, { FC } from 'react';

export type ButtonTypes = {
  /** Label of the button */
  label: string;

  /** Type attribute of button*/
  btnType?: 'button' | 'submit';

  /** Style of the Button */
  btnStyle: 'normal' | 'outlined' | 'text';

  /** Button click action */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /** Button size */
  size: 'small' | 'medium' | 'large';

  /** Add classes to component */
  className?: string;

  /** Add href to anchor tag */
  href?: string;

  /** Open link in new tab */
  target_blank?: boolean;
};

const textClasses = 'rounded outline-none tracking-wider font-bold';
const normalClassses = `${textClasses} bg-teal-400 text-white`;
const outlinedClasses = `${textClasses} border border-teal-400 text-teal-400`;
const smallClasses = 'text-xs px-3 py-1';
const mediumClasses = 'text-md px-4 py-2';
const largeClasses = 'text-xl px-16 py-4';

export const Button: FC<ButtonTypes> = ({
  onClick,
  btnType,
  label = 'Button',
  btnStyle = 'normal',
  size = 'medium',
  className,
  href,
  target_blank,
}) => {
  let btnSize = mediumClasses;
  if (size === 'small') {
    btnSize = smallClasses;
  } else if (size === 'large') {
    btnSize = largeClasses;
  }

  let styleType = normalClassses;
  if (btnStyle === 'text') {
    styleType = textClasses;
  } else if (btnStyle === 'outlined') {
    styleType = outlinedClasses;
  }

  let btnVariables = `${btnSize} ${styleType} ${className}`;
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={btnVariables}
        target={target_blank ? '_blank' : undefined}
      >
        {label}
      </a>
    );
  } else {
    return (
      <button       
        type={btnType ? btnType : 'button'}
        onClick={onClick} className={btnVariables}>
        {label}
      </button>
    );
  }
};

export default Button;
