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
    SelectOptions: [{optionTxt: 'Web Themes & Template', href: '#'}, {optionTxt: 'Code', href: '#'}, {optionTxt: 'Video', href: '#'}, {optionTxt: 'Audio', href: '#'}, {optionTxt: 'Photos', href: '#'}, {optionTxt: '3D Files', href: '#'}],
    // PanelHeaders: ['Header 1', 'Header 2', 'Header 3'],
    // PanelItems: [
    //   { panelTxt: 'Guest Cart', href: '#' },
    //   { panelTxt: 'Create an Envato Account', href: '#' },
    //   { panelTxt: 'Sign In', href: '#'}
    // ]
    PanelHeaders: [{'Header 1': {panelTxt: 'Guest Cart', href: '#'},},]
  };