import React from 'react';
import { Topbar, TopbarTypes } from '../components/Topbar';

export default {
  title: 'Topbar',
  component: Topbar,
};

export const primary = (args: TopbarTypes) => {
  return <Topbar {...args} />;
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
