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
    { menuTxt: 'Web Themes and Templates', href: '#', key: 'key1' },
    { menuTxt: 'Code', href: '#', key: 'key2' },
    { menuTxt: 'Video', href: '#', key: 'key2' },
    { menuTxt: 'Audio', href: '#', key: 'key3' },
    { menuTxt: 'Graphics', href: '#', key: 'key4' },
    { menuTxt: 'Photos', href: '#', key: 'key5' },
    { menuTxt: '3D Files', href: '#', key: 'key6' },
  ],
};
