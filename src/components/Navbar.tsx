import React, { FC, ReactNode } from 'react';
import { Dropdown, Menu, Button } from 'antd';
// import Icon from '../../public/img/menu.png';

export type NavbarTypes = {
  /**
   * Label of the button
   */
  label: string;
  logo: string;
  icon: string;
};

const menu = (
    <Menu>
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

export const Navbar: FC<NavbarTypes> = ({ label, logo, icon }) => {
  return (
    <div className="bg-black flex justify-between items-center lg:items-center py-2 px-5 md:px-20 xl:px-30">
      <div>
        <img src={logo} alt="" className="h-5" />
      </div>
      <Menu mode="horizontal" className="bg-black text-gray-500 border-0">
        <Menu.Item key="home" className="border-0">
          {label}
        </Menu.Item>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <Button className='text-gray-500 border-0'><img src={icon} alt='' className='h-4 inline mr-5'/>bottomLeft</Button>
        </Dropdown>
        {/* <Menu.Item key="features" className="border-0">
          <img src={icon} alt='' className='h-4 inline mr-3'/>Features
        </Menu.Item> */}
        <Menu.Item key="how it works" className="border-0">
          How it works
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
