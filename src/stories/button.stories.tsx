import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonTypes } from '../components/button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    outlined: { control: 'boolean' },
  },
};

export const primary = (args: ButtonTypes) => {
  return <Button {...args} />;
};
primary.args = {
  label: 'See now',
  outlined: false,
  onClick: () => action('clicked'),
};
