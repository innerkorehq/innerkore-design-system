import React from 'react';
import { Button, ButtonTypes } from '../../components/Core/Button';

export default {
  title: 'Core/Button/Small',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const Outlined = (args: ButtonTypes) => {
  return <Button {...args} />;
};

Outlined.args = {
  label: 'Default',
  type: 'outlined',
  size: 'large'
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

export const Light = (args: ButtonTypes) => {
  return <Button {...args} />;
};

Light.args = {
  ...Default.args,
  label: 'Light',
  color: 'text-purple-600',
  bgColor: 'bg-purple-200',
};
export const White = (args: ButtonTypes) => {
  return <Button {...args} />;
};

White.args = {
  ...Default.args,
  label: 'White',
  color: 'text-purple-600',
  bgColor: 'bg-white',
};
