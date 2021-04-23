import React from 'react';
import { PrimaryTopbar } from './Topbar.stories';
import { PrimaryNavbar } from './Navbar.stories';

export default {
  title: 'Desktop/Header',
};
export const Header = () => (
  <>
    <PrimaryTopbar
      MenuItems={[
        {
          href: '#',
          menuTxt: 'Forums',
        },
        {
          href: '#',
          menuTxt: 'Start Selling',
        },
      ]}
      Options={[
        { optionTxt: 'Digital Assets Subscription', href: '#', logoInOption: 'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-elements-4de52b67c96ca63c1b764d39b573a7af.svg'},
        { optionTxt: 'Hire a freelancer', href: '#', logoInOption: 'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-studio-df1d5447eb8bd2d54ef22aa4b03d160a.svg'},
      ]}
      dropDownTxt="Our Products"
      logo="https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg"
      menuIconTxt="Sign In"
    />
    <PrimaryNavbar
      MenuItems={[
        {
          href: '#',
          menuTxt: 'Web Themes and Templates',
        },
        {
          href: '#',
          menuTxt: 'Code',
        },
        {
          href: '#',
          menuTxt: 'Video',
        },
        {
          href: '#',
          menuTxt: 'Audio',
        },
        {
          href: '#',
          menuTxt: 'Graphics',
        },
        {
          href: '#',
          menuTxt: 'Photos',
        },
        {
          href: '#',
          menuTxt: '3D Files',
        },
      ]}
    />
  </>
);
