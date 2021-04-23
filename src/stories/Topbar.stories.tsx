import React from 'react';
import { Topbar, TopbarTypes } from '../components/Topbar/Topbar';

export default {
  title: 'Desktop/Topbar',
  component: Topbar,
};

export const PrimaryTopbar = (args: TopbarTypes) => {
  return <Topbar {...args} />;
};

PrimaryTopbar.args = {
  TopMenuItems: [
    { menuTxt: 'Forums', href: '#' },
    { menuTxt: 'Start Selling', href: '#' },
  ],
  logo:
    'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg',

  dropDownTxt: 'Our Products',
  Options: [
    { optionTxt: 'Digital Assets Subscription', href: '#', logoInOption: 'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-elements-4de52b67c96ca63c1b764d39b573a7af.svg'},
    { optionTxt: 'Hire a freelancer', href: '#', logoInOption: 'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-studio-df1d5447eb8bd2d54ef22aa4b03d160a.svg'},
  ],
  menuIconTxt: 'Sign In',
};
