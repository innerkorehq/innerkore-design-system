import React from 'react';
// import { action } from '@storybook/addon-actions';
import { Navbar, NavbarTypes } from '../components/Navbar';
import Icon from '../../public/img/menu.svg';

export default {
  title: 'Navbar',
  component: Navbar,
  argTypes: {
    label: { control: 'text' },
  },
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const primary = (args: NavbarTypes) => {
  return <Navbar {...args} />;
};

primary.args = {
  label: 'See now sds',
  logo:
    'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg',
    icon: Icon
  //   onClick: () => action('clicked'),
};
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
