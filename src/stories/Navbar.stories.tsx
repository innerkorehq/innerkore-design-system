import React from 'react';
// import { action } from '@storybook/addon-actions';
import { Navbar, NavbarTypes } from '../components/Navbar';
import Icon from '../../public/img/menu.svg';
import BtnIcon from '../../public/img/cart.svg';

export default {
  title: 'Navbar',
  component: Navbar,
};

export const primary = (args: NavbarTypes) => {
  return <Navbar {...args} />;
};

primary.args = {
  NavItems: [
    { navTxt: 'Forums', href: '#' },
    { navTxt: 'Start Selling', href: '#' },
  ],
  logo:
    'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg',
  dropDownIcon: Icon,
  btnIcon: BtnIcon,
  dropDownTxt: 'Our Products',
  btnTxt: 'Sign In',
};
