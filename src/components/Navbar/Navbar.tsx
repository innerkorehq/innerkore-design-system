import React, { FC, useState } from 'react';
import { Menu } from 'antd';
import './Navbar.css'

type MenuItemsType = {
  menuTxt: string;
  href: string;
};

export type NavbarTypes = {
  MenuItems: MenuItemsType[];
};

export const Navbar: FC<NavbarTypes> = ({ MenuItems }) => {
  const [current, setCurrent] = useState('0');
  return (
    <div className="hidden lg:flex justify-between items-center bg-gray-900 py-2 px-5 md:px-20 xl:px-30">
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        className="bg-gray-900 text-gray-400 border-0"
      >
        {MenuItems.map(({ menuTxt, href }, index) => {
          return (
            <Menu.Item key={'' + index} className="border-0" onClick={() => setCurrent('' + index)}>
              <a
                href={href}
                className={`text-gray-400 hover:text-white text-lg py-4 ${
                  index + '' === current ? 'selectedMenuItem' : ''
                }`}
              >
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
