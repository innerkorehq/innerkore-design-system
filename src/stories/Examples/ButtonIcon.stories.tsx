import React from 'react';
import { ButtonIcon, ButtonTypes } from '../../components/Examples/ButtonIcon';

export default {
  title: 'Examples/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    label: { control: 'text' },
    outlined: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const primary = (args: ButtonTypes) => {
  return <ButtonIcon {...args} />;
};

primary.args = {
  label: 'Button with icon',
  outlined: false,
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
