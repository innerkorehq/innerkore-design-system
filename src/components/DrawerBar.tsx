import React, { FC } from 'react';
import { DrawerRight, DrawerRightTypes } from '../components/DrawerRight';
import { DrawerLeft, DrawerLeftTypes } from '../components/DrawerLeft/DrawerLeft';

export type DrawerBarTypes = {
  imgSrcIconRight: string;
  imgSrcIconLeft: string;
  RightMenuItems: RightMenuItemsType[];
  SelectOptions: SelectOptionsType[];
  Panels: PanelsType[];
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
};

type PanelChildrenType = {
  panelLink: string;
  href: string;
};

export const DrawerBar: FC<DrawerBarTypes> = ({
  imgSrcIconLeft,
  SelectOptions,
  Panels,
  imgSrcIconRight,
  RightMenuItems,
}) => {
  return (
    <div className="flex xl:hidden justify-between bg-gray-800 py-2">
      <DrawerLeft imgSrcIconLeft={imgSrcIconLeft} SelectOptions={SelectOptions} Panels={Panels} />
      <DrawerRight imgSrcIconRight={imgSrcIconRight} RightMenuItems={RightMenuItems} />
    </div>
  );
};
