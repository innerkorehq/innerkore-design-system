import React from 'react';
import { NavTabs, NavTabsTypes } from '../components/NavTabs';

export default {
  title: 'NavTabs',
  component: NavTabs,
};

export const PrimaryNavTabs = (args: NavTabsTypes) => {
    return <NavTabs {...args} />;
  };
  
  PrimaryNavTabs.args = {
    MenuItems: [
      { TabName: 'Web Themes and Templates', TabContent: 'Content of tab 1' },
      { TabName: 'Code', TabContent: 'Content of tab 2' },
      { TabName: 'Video', TabContent: 'Content of tab 3' },
      { TabName: 'Audio', TabContent: 'Content of tab 4' },
    //   { menuTxt: 'Graphics', href: '#' },
    //   { menuTxt: 'Photos', href: '#' },
    //   { menuTxt: '3D Files', href: '#' },
    ],
  };