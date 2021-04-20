import React from 'react';
import {PrimaryTopbar} from '../stories/Topbar.stories';
import {PrimaryNavbar} from '../stories/Navbar.stories';

export default {
    title: 'Form/Subscription'
}
export const Header = () => (
    <>
        <PrimaryTopbar 
               MenuItems={[
                {
                  href: '#',
                  menuTxt: 'Forums'
                },
                {
                  href: '#',
                  menuTxt: 'Start Selling'
                }
              ]}
              Options={[
                {
                  href: '#',
                  optionTxt: 'Digital Assets Subscription'
                },
                {
                  href: '#',
                  optionTxt: 'Hire a freelancer'
                }
              ]}
              dropDownTxt="Our Products"
              logo="https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg"
              menuIconTxt="Sign In"
        />
        <PrimaryNavbar 
        MenuItems={[
            {
              href: '#',
              menuTxt: 'Web Themes and Templates'
            },
            {
              href: '#',
              menuTxt: 'Code'
            },
            {
              href: '#',
              menuTxt: 'Video'
            },
            {
              href: '#',
              menuTxt: 'Audio'
            },
            {
              href: '#',
              menuTxt: 'Graphics'
            },
            {
              href: '#',
              menuTxt: 'Photos'
            },
            {
              href: '#',
              menuTxt: '3D Files'
            }
          ]}
          />

    </>
)