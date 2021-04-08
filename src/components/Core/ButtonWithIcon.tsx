import React, { FC } from 'react';
import normalIcon from '../../../public/img/click.svg';
import outlinedIcon from '../../../public/img/click-outlined.svg';

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

  /** Icon to right side of the button text */
  iconRight?: string;

  /** Icon to left side of the button text */
  iconLeft?: string;

};


const textClasses = 'rounded outline-none tracking-wider font-bold';
const normalClassses = `${textClasses} bg-teal-400 text-white`;
const outlinedClasses = `${textClasses} border border-teal-400 text-teal-400`;
const smallClasses = 'text-xs px-3 py-1';
const mediumClasses = 'text-md px-4 py-2';
const largeClasses = 'text-xl px-16 py-4';

export const ButtonWithIcon: FC<ButtonTypes> = ({
  onClick,
  btnType,
  label = 'Button',
  btnStyle = 'normal',
  size = 'medium',
  className,
  href,
  target_blank,
  iconLeft = normalIcon,
  iconRight
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
        <img src={iconLeft} className='inline h-6 mr-3' alt=''/>{label}<img src={iconRight} className='inline h-6' alt=''/>
      </a>
    );
  } else {
    return (
      <button       
        type={btnType ? btnType : 'button'}
        onClick={onClick} className={btnVariables}>
        <img src={iconLeft} className='inline h-8' alt=''/>{label}<img src={iconRight} className='inline h-8' alt=''/>
      </button>
    );
  }
};

export default ButtonWithIcon;
