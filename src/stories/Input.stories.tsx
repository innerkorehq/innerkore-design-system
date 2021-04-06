import React from 'react';
import { Input, InputTypes } from '../components/Input';

export default {
  title: 'Form/Input',
  component: Input,
};

export const Small = (args: InputTypes) => {
  return <Input {...args} />;
};

Small.args = {
  size: 'h-8 text-sm',
  placeholder: 'Small size',
};

export const Medium = (args: InputTypes) => {
  return <Input {...args} />;
};

Medium.args = {
  size: 'h-10 text-base',
  placeholder: 'Medium size',
};

export const Large = (args: InputTypes) => {
  return <Input {...args} />;
};

Large.args = {
  size: 'h-12 text-xl',
  placeholder: 'Large size',
};
