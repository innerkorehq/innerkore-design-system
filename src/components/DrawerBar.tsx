import React, { FC } from 'react';
import { DrawerRight, DrawerRightTypes } from '../components/DrawerRight';
import { DrawerLeft, DrawerLeftTypes } from '../components/DrawerLeft/DrawerLeft';

export type DrawerBarTypes = {
  imgSrcIconRight: string;
  imgSrcIconLeft: string;
  MenuItems: MenuItemsType[];
  SelectOptions: SelectOptionsType[];
  Panels: PanelsType[];
};
type MenuItemsType = {
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

export const DrawerBar: FC<DrawerBarTypes> = ({ imgSrcIconLeft, SelectOptions, Panels, imgSrcIconRight, MenuItems }) => {
    
  return (
    <div className='flex justify-between bg-gray-800 py-2 block lg:hidden'>
      <DrawerLeft 
        imgSrcIconLeft={imgSrcIconLeft}
        SelectOptions={SelectOptions}
        Panels={Panels}
      />
      <DrawerRight 
        imgSrcIconRight={imgSrcIconRight}
        MenuItems={MenuItems}
      />
    </div>
  );
};
