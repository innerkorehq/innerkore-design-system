import React, { FC } from 'react';
import { Menu } from 'antd';

type MenuItemsType = {
  menuTxt: string;
  href: string;
};

export type NavbarTypes = {
  MenuItems: MenuItemsType[];
};

export const Navbar: FC<NavbarTypes> = ({ MenuItems }) => {
  return (
    <div className="flex justify-between items-center bg-gray-900 py-2 px-5 md:px-20 xl:px-30">
      <Menu mode="horizontal" className="bg-gray-900 text-gray-400 border-0">
        {MenuItems.map(({ menuTxt, href }, index) => {
          return (
            <Menu.Item className="border-0">
              <a href={href} className="text-gray-400 hover:text-white text-lg">
                {menuTxt}
              </a>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default Navbar;
