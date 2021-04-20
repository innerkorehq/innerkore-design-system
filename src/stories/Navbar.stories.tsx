import React from 'react';
import { Navbar, NavbarTypes } from '../components/Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

export const primary = (args: NavbarTypes) => {
  return <Navbar {...args} />;
};

primary.args = {
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
