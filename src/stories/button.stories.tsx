import React from 'react';
import { action } from '@storybook/addon-actions';
import { AppButton } from '../components/Button/button';

export default {
  title: 'Button',
  component: AppButton,
  // argTypes: {
  //   label: { control: 'text' },
  //   outlined: { control: 'boolean' },
  // },
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const primary = () => {
  return <AppButton />;
};

// primary.args = {
//   label: 'See now',
//   outlined: false,
//   onClick: () => action('clicked'),
// };
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
