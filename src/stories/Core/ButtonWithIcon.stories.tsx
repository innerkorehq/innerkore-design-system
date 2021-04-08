import React from 'react';
import { ButtonWithIcon, ButtonTypes } from '../../components/Core/ButtonWithIcon';

export default {
  title: 'Core/ButtonWithIcon',
  component: ButtonWithIcon,
  argTypes: {
    label: { control: 'text' },
  },
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const MediumNormal = (args: ButtonTypes) => {
  return <ButtonWithIcon {...args} />;
};

MediumNormal.args = {
  label: 'MediumNormal',
  btnStyle: 'normal',
  size: 'medium',
  onClick: function () {
    alert('button clicked');
  },
  target_blank: true,
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const SmallNormal = (args: ButtonTypes) => {
  return <ButtonWithIcon {...args} />;
};

SmallNormal.args = {
  label: 'SmallNormal',
  btnStyle: 'normal',
  size: 'small',
  href: 'https://google.com',
  className: 'inline-block'
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const LargeNormal = (args: ButtonTypes) => {
  return <ButtonWithIcon {...args} />;
};

LargeNormal.args = {
  label: 'LargeNormal',
  btnStyle: 'normal',
  size: 'large',
  href: 'https://google.com',
  className: 'inline-block'
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
