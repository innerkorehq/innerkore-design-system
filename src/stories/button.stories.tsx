import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    outlined: { control: 'boolean' },
  },
};

export const primary = (args: any) => {
  return <Button onClick={action('clicked')} {...args} />;
};
primary.args = { label: 'See now', outlined: false };
