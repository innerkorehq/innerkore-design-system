import React, { FC } from 'react';
// import Click from '../../../public/img/click-outlined.svg'

export type ButtonTypes = {
  /** Label of the button */
  label: string;

  /** Type attribute of button*/
  type: 'button' | 'submit' | 'reset';

  /** Style of the Button */
  style: 'normal' | 'outlined' | 'text';

  /** Button click action */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /** Button size */
  size: 'small' | 'medium' | 'large';

  /** Add classes to component */
  className?: string;

  /** Add href to anchor tag */
  href?: string;

  /** Open link in new tab */
  target: '_blank' | '_self' | '_parent' | '_top';

  /** Add icon path to the button */
  icon?: string;

  /** Specify icon alignment */
  align?: 'left' |'right';

};

const textStyles = 'rounded outline-none tracking-wider font-bold';
const normalStyles = `${textStyles} bg-teal-400 text-white`;
const outlinedStyles = `${textStyles} border border-teal-400 text-teal-400`;
const smallStyles = 'text-xs px-3 py-1';
const mediumStyles = 'text-md px-4 py-2';
const largeStyles = 'text-xl px-16 py-4';

export const Button: FC<ButtonTypes> = ({
  onClick,
  type,
  label = 'Button',
  style = 'normal',
  size = 'medium',
  className,
  href,
  target,
  align = 'left',
  icon
}) => {
  let btnSize = mediumStyles;
  if (size === 'small') {
    btnSize = smallStyles;
  } else if (size === 'large') {
    btnSize = largeStyles;
  }

  let styleType = normalStyles;
  if (style === 'text') {
    styleType = textStyles;
  } else if (style === 'outlined') {
    styleType = outlinedStyles;
  }

  let iconStyles = 'h-3'
  if (size === 'medium') {
    iconStyles = 'h-4';
  } else if (size === 'large'){
    iconStyles = 'h-8';
  }

  let btnStyles = `${btnSize} ${styleType} ${className}`;
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={btnStyles}
        target={target}
      >
        {icon && align === 'left'? <img src={icon} alt='' className={`inline ${iconStyles} mr-3`}/> : null }
        {label}
        {icon && align === 'right'? <img src={icon} alt='' className={`inline ${iconStyles} ml-3`}/> : null }
      </a>
    );
  } else if (type == 'submit') {
    return (
      <input 
        type= 'submit' value={label}
        onClick={onClick} className={btnStyles}>
      </input>
    );
  }   
  
  else {
    return (
      <button       
        type={type ? type : 'button'}
        onClick={onClick} className={btnStyles}
        target={target}
      >
        {icon && align === 'left'? <img src={icon} alt='' className={`inline ${iconStyles} mr-3`}/> : null }
        {label}
        {icon && align === 'right'? <img src={icon} alt='' className={`inline ${iconStyles} ml-3`}/> : null }
      </button>
    );
  }
};

export default Button;
