import React from 'react';
import { DrawerLeft, DrawerLeftTypes } from '../components/DrawerLeft';
import Menu from '../../public/img/drawer-menu.svg';

export default {
  title: 'DrawerLeft',
  component: DrawerLeft,
};

export const PrimaryDrawerLeft = (args: DrawerLeftTypes) => {
    return <DrawerLeft {...args}/>;
  };
  
  PrimaryDrawerLeft.args = {
    imgSrcIconLeft: Menu,
    // MenuItems: [
    //   { menuTxt: 'Guest Cart', href: '#', iconImgSrc: Cart },
    //   { menuTxt: 'Create an Envato Account', href: '#', iconImgSrc: Envato },
    //   { menuTxt: 'Sign In', href: '#', iconImgSrc: Signin },
    // ],
  };