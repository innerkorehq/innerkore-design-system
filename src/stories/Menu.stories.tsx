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
//   navItems: [
//     { navTxt: 'Forums', href: '#' },
//     { navTxt: 'Start Selling', href: '#' },
//   ],
  logo:
    'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg',
    menuTxt1: 'Forums',
    menuTxt2: 'Start Selling',
    dropDownTxt: 'Our Products',
    menuTxt3: 'Sign In',
    option1Txt: 'Digital Assets Subscription',
    option2Txt: 'Hire a freelancer',

};
