import React from 'react';
// import { action } from '@storybook/addon-actions';
import { TopMenu, TopMenuTypes } from '../components/Menu';
import Icon from '../../public/img/menu.svg';
import btnIcon from '../../public/img/cart.svg';

export default {
  title: 'TopMenu',
  component: TopMenu,
};

export const primary = (args: TopMenuTypes) => {
  return <TopMenu {...args} />;
};

primary.args = {
  MenuItems: [
    { menuTxt: 'Forums', href: '#' },
    { menuTxt: 'Start Selling', href: '#' },
  ],
  logo:
    'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg',

  dropDownTxt: 'Our Products',
  Options: [
    { optionTxt: 'Digital Assets Subscription', href: '#' },
    { optionTxt: 'Hire a freelancer', href: '#' },
  ],
  menuIconTxt: 'Sign In',
};
