import React from 'react';
import { Navbar, NavbarTypes } from '../components/Navbar/Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

// const Template = (args: NavbarTypes) => <Navbar {...args} />

// export const PrimaryNavbar = Template.bind({})
// PrimaryNavbar.args = {
//     MenuItems: [
//         { menuTxt: 'Web Themes and Templates', href: '#' },
//         { menuTxt: 'Code', href: '#' },
//         { menuTxt: 'Video', href: '#' },
//         { menuTxt: 'Audio', href: '#' },
//         { menuTxt: 'Graphics', href: '#' },
//         { menuTxt: 'Photos', href: '#' },
//         { menuTxt: '3D Files', href: '#' },
//       ]
// }

export const PrimaryNavbar = (args: NavbarTypes) => {
  return <Navbar {...args} />;
};

PrimaryNavbar.args = {
  MenuItems: [
    { menuTxt: 'Web Themes and Templates', href: '#' },
    { menuTxt: 'Code', href: '#' },
    { menuTxt: 'Video', href: '#' },
    { menuTxt: 'Audio', href: '#' },
    { menuTxt: 'Graphics', href: '#' },
    { menuTxt: 'Photos', href: '#' },
    { menuTxt: '3D Files', href: '#' },
  ],
};
