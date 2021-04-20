import React, { FC, ReactNode } from 'react';
import { Dropdown, Menu, Button } from 'antd';
// import Icon from '../../public/img/menu.png';

type NavItemsType = {
  navTxt: string;
  href: string;
};

type MenuItemsType = {
  menuTxt: string;
  href: string;
};

export type NavbarTypes = {
  logo: string;
  dropDownIcon?: string;
  NavItems: NavItemsType[];
  MenuItems: MenuItemsType[];
  btnIcon?: string;
  dropDownTxt?: string;
  btnTxt?: string;
};

const menu = (
  <Menu>
    {/* {MenuItems.map(({ menuTxt, href }, index) => {
      return (
        <Menu.Item className="border-0">  
          <a href={href} target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-white'>{menuTxt}</a>
        </Menu.Item>
      );
    })} */}
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export const Navbar: FC<NavbarTypes> = ({
  NavItems,
  logo,
  dropDownIcon,
  btnIcon,
  dropDownTxt,
  btnTxt,
}) => {
  return (
    <div className="bg-black flex justify-between items-center lg:items-center py-2 px-5 md:px-20 xl:px-30">
      <div>
        <img src={logo} alt="" className="h-5" />
      </div>
      <Menu mode="horizontal" className="bg-black text-gray-500 border-0">
        {NavItems.map(({ navTxt, href }, index) => {
          return (
            <Menu.Item className="border-0">
              <a href={href} className="text-gray-500 hover:text-white">
                {navTxt}
              </a>
            </Menu.Item>
          );
        })}

        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Button className="text-gray-500 border-0 bg-black hover:text-white hover:text-white">
            <img src={dropDownIcon} alt="" className="h-4 inline mr-3" />
            {dropDownTxt}
          </Button>
        </Dropdown>

        <Menu.Item className="border-0 hover:text-white">
          <img src={btnIcon} alt="" className="h-5 inline mr-3" />
          {btnTxt}
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
