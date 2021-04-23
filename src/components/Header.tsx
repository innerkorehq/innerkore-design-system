import React, { FC } from 'react';
import { Topbar } from '../components/Topbar/Topbar';
import { Navbar} from '../components/Navbar/Navbar';
import { DrawerBar } from '../components/DrawerBar';

export type HeaderType = {
    logo: string;
    menuIconTxt: string;
    dropDownTxt: string;
    Options: OptionsType[];
    TopMenuItems: TopMenuItemsType[];
    MenuItems: MenuItemsType[];
    imgSrcIconLeft: string;
    RightMenuItems: RightMenuItemsType[];
    SelectOptions: SelectOptionsType[];
    Panels: PanelsType[];
    imgSrcIconRight: string;
}
type OptionsType = {
    optionTxt: string;
    href: string;
    logoInOption: string;
};

type MenuItemsType = {
    menuTxt: string;
    href: string;
};

type TopMenuItemsType = {
    menuTxt: string;
    href: string;
};
type RightMenuItemsType = {
    menuTxt: string;
    href: string;
    iconImgSrc: string;
};
  
type SelectOptionsType = {
    optionTxt: string;
    href: string;
};
  
type PanelsType = {
    panelHeader: string;
    PanelChildren: PanelChildrenType[];
}
type PanelChildrenType = {
    panelLink: string;
    href: string;
  }    
  
export const Header: FC<HeaderType> = ({ 
    logo, menuIconTxt, dropDownTxt, Options, TopMenuItems, MenuItems, imgSrcIconLeft, RightMenuItems, SelectOptions, Panels, imgSrcIconRight
}) => {
    
  return (
    <div>
      <Topbar
        logo={logo}
        menuIconTxt={menuIconTxt}
        dropDownTxt={dropDownTxt}
        Options={Options}
        TopMenuItems={TopMenuItems} 
      />
      <Navbar 
        MenuItems={MenuItems}
      />
      <DrawerBar 
        imgSrcIconLeft={imgSrcIconLeft}
        SelectOptions={SelectOptions}
        Panels={Panels}
        imgSrcIconRight={imgSrcIconRight}
        RightMenuItems={RightMenuItems}
      />
    </div>
  );
};