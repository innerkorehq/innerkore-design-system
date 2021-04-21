import React from 'react';
import { DrawerBar, DrawerBarTypes } from '../components/DrawerBar';
import User from '../../public/img/user.svg';
import Menu from '../../public/img/drawer-menu.svg';
import Cart from "../../public/img/cart.svg";
import Envato from "../../public/img/envato.svg";
import Signin from "../../public/img/sign-in.svg";

export default {
  title: 'DrawerBar',
  component: DrawerBar,
};

export const PrimaryDrawerBar = (args: DrawerBarTypes) => {
    return <DrawerBar {...args}/>;
  };
  
  PrimaryDrawerBar.args = {
    imgSrcIconLeft: Menu,
    imgSrcIconRight: User,
    MenuItems: [
      { menuTxt: 'Guest Cart', href: '#', iconImgSrc: Cart },
      { menuTxt: 'Create an Envato Account', href: '#', iconImgSrc: Envato },
      { menuTxt: 'Sign In', href: '#', iconImgSrc: Signin },
    ],
  };