import React from 'react';
import { Navbar, NavbarTypes } from '../../components/Header/Navbar/Navbar';

export default {
  title: 'Header/Desktop/Navbar',
  component: Navbar,
};

export const PrimaryNavbar = (args: NavbarTypes) => {
  return <Navbar {...args} />;
};

PrimaryNavbar.args = {
  NavMenuItems: [
    { menuTxt: 'Web Themes and Templates', href: 'https://www.google.com/' },
    { menuTxt: 'Code', href: '#' },
    { menuTxt: 'Video', href: '#' },
    { menuTxt: 'Audio', href: '#' },
    { menuTxt: 'Graphics', href: '#' },
    { menuTxt: 'Photos', href: '#' },
    { menuTxt: '3D Files', href: '#' },
  ],
};
