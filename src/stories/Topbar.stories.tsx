import React from 'react';
import { Topbar, TopbarTypes } from '../components/Topbar';

export default {
  title: 'Topbar',
  component: Topbar,
};

// const Template = (args: TopbarTypes) => <Topbar {...args} />

// export const PrimaryTopbar = Template.bind({})
// PrimaryTopbar.args = {
//   MenuItems: [
//     { menuTxt: 'Forums', href: '#' },
//     { menuTxt: 'Start Selling', href: '#' },
//   ],
//   logo:
//     'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg',

//   dropDownTxt: 'Our Products',
//   Options: [
//     { optionTxt: 'Digital Assets Subscription', href: '#' },
//     { optionTxt: 'Hire a freelancer', href: '#' },
//   ],
//   menuIconTxt: 'Sign In',
// }


export const PrimaryTopbar = (args: TopbarTypes) => {
  return <Topbar {...args} />;
};

PrimaryTopbar.args = {
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
