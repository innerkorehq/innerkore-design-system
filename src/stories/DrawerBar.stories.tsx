import React from 'react';
import { DrawerBar, DrawerBarTypes } from '../components/DrawerBar';

export default {
  title: 'DrawerBar',
  component: DrawerBar,
};

export const PrimaryDrawerBar = (args: DrawerBarTypes) => {
    return <DrawerBar />;
  };
  
//   PrimaryDrawerBar.args = {
//     MenuItems: [
//       { TabName: 'Web Themes and Templates', TabContent: 'Content of tab 1' },
//       { TabName: 'Code', TabContent: 'Content of tab 2' },
//       { TabName: 'Video', TabContent: 'Content of tab 3' },
//       { TabName: 'Audio', TabContent: 'Content of tab 4' },
//     //   { menuTxt: 'Graphics', href: '#' },
//     //   { menuTxt: 'Photos', href: '#' },
//     //   { menuTxt: '3D Files', href: '#' },
//     ],
//   };