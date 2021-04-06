import React from 'react';
import { Button, ButtonTypes } from '../components/button';

export default {
  title: 'Button/Large',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const Default = (args: ButtonTypes) => {
  return <Button {...args} />;
};

Default.args = {
  label: 'Default',
  padding: 'py-4 px-16',
  fontSize: 'text-xl',
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
