import React from 'react';
import { DrawerRight, DrawerRightTypes } from '../components/DrawerRight';
import User from '../../public/img/user.svg';
import Cart from '../../public/img/cart.svg';
import Envato from '../../public/img/envato.svg';
import Signin from '../../public/img/sign-in.svg';

export default {
  title: 'Mobile/DrawerRight',
  component: DrawerRight,
};

export const PrimaryDrawerRight = (args: DrawerRightTypes) => {
  return <DrawerRight {...args} />;
};

PrimaryDrawerRight.args = {
  imgSrcIconRight: User,
  RightMenuItems: [
    { menuTxt: 'Guest Cart', href: '#', iconImgSrc: Cart },
    { menuTxt: 'Create an Envato Account', href: '#', iconImgSrc: Envato },
    { menuTxt: 'Sign In', href: '#', iconImgSrc: Signin },
  ],
};
