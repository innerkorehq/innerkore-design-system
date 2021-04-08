import React from 'react';
import { Button, ButtonTypes } from '../../components/Core/Button';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const MediumNormal = (args: ButtonTypes) => {
  return <Button {...args} />;
};

MediumNormal.args = {
  label: 'MediumNormal',
  style: 'normal',
  size: 'medium',
  onClick: function () {
    alert('Button clicked');
  },
  type: 'submit'
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const SmallNormal = (args: ButtonTypes) => {
  return <Button {...args} />;
};

SmallNormal.args = {
  label: 'SmallNormal',
  style: 'normal',
  size: 'small',
  href: 'https://google.com',
  className: 'inline-block'
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const LargeNormal = (args: ButtonTypes) => {
  return <Button {...args} />;
};

LargeNormal.args = {
  label: 'LargeNormal',
  style: 'normal',
  size: 'large',
  href: 'https://google.com',
  className: 'inline-block'
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
