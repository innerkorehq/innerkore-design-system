import React from "react";
import { Button } from '../components/button';
import { action } from '@storybook/addon-actions';

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: 'text' },
    outlined: { control: 'boolean' },
  },
};

export const primary = (args) => {
  const label = "See now";
  const outlined = false;
  return (
    <Button onClick={action('clicked')} {...args} />
  )
};