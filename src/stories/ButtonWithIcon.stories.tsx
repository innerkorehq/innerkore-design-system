import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonWithIcon, ButtonTypes } from '../components/ButtonWithIcon';

export default {
  title: 'ButtonWithIcon',
  component: ButtonWithIcon,
  argTypes: {
    label: { control: 'text' },
    outlined: { control: 'boolean' },
    onClick: { action: 'clicked' }
  },
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const primary = (args: ButtonTypes) => {
  return <ButtonWithIcon {...args} />;
};

primary.args = {
  label: 'Button with icon',
  outlined: false,
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
