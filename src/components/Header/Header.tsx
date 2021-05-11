import React, { FC } from 'react';
import { Topbar } from './Topbar/Topbar';
import { Navbar } from './Navbar/Navbar';
import { DrawerBar } from './DrawerBar';
import { SubNavbar } from './SubNavbar/SubNavbar';

export type HeaderType = {
  logo: string;
  menuIconTxt: string;
  dropDownTxt: string;
  Options: OptionsType[];
  TopMenuItems: TopMenuItemsType[];
  NavMenuItems: NavMenuItemsType[];
  imgSrcIconLeft: string;
  RightMenuItems: RightMenuItemsType[];
  SelectOptions: SelectOptionsType[];
  Panels: PanelsType[];
  imgSrcIconRight: string;
  DropDownItems: DropDownItemsType[];
};

type OptionsType = {
  optionTxt: string;
  href: string;
  logoInOption: string;
};

type NavMenuItemsType = {
  menuTxt: string;
  href: string;
  key: string;
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
  key: string;
};

type PanelChildrenType = {
  panelLink: string;
  href: string;
};

type SubNavOptionsType = {
  optionTxt: string;
  href: string;
};

type DropDownItemsType = {
  dropDownTitle: string;
  SubNavOptions: SubNavOptionsType[];
};

export type SubNavbarTypes = {
  DropDownItems: DropDownItemsType[];
};

export const Header: FC<HeaderType> = ({
  logo,
  menuIconTxt,
  dropDownTxt,
  Options,
  TopMenuItems,
  NavMenuItems,
  imgSrcIconLeft,
  RightMenuItems,
  SelectOptions,
  Panels,
  imgSrcIconRight,
  DropDownItems,
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
      <Navbar NavMenuItems={NavMenuItems} />
      <DrawerBar
        imgSrcIconLeft={imgSrcIconLeft}
        SelectOptions={SelectOptions}
        Panels={Panels}
        imgSrcIconRight={imgSrcIconRight}
        RightMenuItems={RightMenuItems}
        logo={logo}
      />
      <div className="mt-2">
        <SubNavbar DropDownItems={DropDownItems} />
      </div>
    </div>
  );
};
