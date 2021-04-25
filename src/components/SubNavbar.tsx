import React, { FC } from 'react';
import { Menu } from 'antd';
import './SubNavbar.css';

const { SubMenu } = Menu;

type SubNavOptionsType = {
  optionTxt: string;
  href: string;
};

type dropDownItemsType = {
  dropDownTitle: string;
  SubNavOptions: SubNavOptionsType[];
};

export type SubNavbarTypes = {
  SubNavOptions: SubNavOptionsType[];
  dropDownItems: dropDownItemsType[];
};

export const SubNavbar: FC<SubNavbarTypes> = ({ dropDownItems }) => {
  return (
    <Menu mode="horizontal">
      {dropDownItems.map(({ dropDownTitle, SubNavOptions }) => {
        return (
          <SubMenu title={dropDownTitle} className="submenu-title">
            {SubNavOptions.map(({ optionTxt, href }, index) => {
              return (
                <Menu.Item>
                  <a href={href} style={{ display: 'block' }} className="menu-item-link">
                    {optionTxt}
                  </a>
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      })}
    </Menu>
  );
};

export default SubNavbar;
