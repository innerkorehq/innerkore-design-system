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
  type: 'normal',
  size: 'medium',
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const SmallNormal = (args: ButtonTypes) => {
  return <Button {...args} />;
};

SmallNormal.args = {
  label: 'SmallNormal',
  type: 'normal',
  size: 'small',
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const LargeNormal = (args: ButtonTypes) => {
  return <Button {...args} />;
};

LargeNormal.args = {
  label: 'LargeNormal',
  type: 'normal',
  size: 'large',
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
