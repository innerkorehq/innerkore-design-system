import React, { FC, useState } from 'react';
import { Menu } from 'antd';
import './Navbar.css';

type NavMenuItemsType = {
  menuTxt: string;
  href: string;
  key: string;
};

export type NavbarTypes = {
  NavMenuItems: NavMenuItemsType[];
};
export const Navbar: FC<NavbarTypes> = ({ NavMenuItems }) => {
  const [current, setCurrent] = useState('0');
  return (
    <div
      className="hidden xl:flex justify-between items-center bg-gray-900 py-2 px-5 md:px-20 xl:px-30"
      id="navbar"
    >
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        className="bg-gray-900 text-gray-400 border-0"
        style={{ marginLeft: -20 }}
      >
        {NavMenuItems.map(({ menuTxt, href, key }) => {
          return (
            <Menu.Item key={key} className="border-0" onClick={() => setCurrent(key)}>
              <a
                href={href}
                className={`text-gray-400 hover:text-white text-lg py-4 ${
                  key === current ? 'selectedMenuItem' : ''
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
