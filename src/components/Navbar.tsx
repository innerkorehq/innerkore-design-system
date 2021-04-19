import React, { FC } from 'react';
import { Menu } from 'antd';

export type NavbarTypes = {
      /**
       * Label of the button
       */
      label: string;
      logo: string;
};

export const Navbar: FC<NavbarTypes> = ({ label, logo }) => {
    return (
      <div className='bg-black flex justify-between items-center'>
        <div>
          <img src={logo} alt="" className='h-5'/>
        </div>
        <Menu mode="horizontal" className='bg-black text-gray-500 border-0'>
          <Menu.Item key="home" className='border-0'>{label}</Menu.Item>
          <Menu.Item key="about" className='border-0'>About</Menu.Item>
          <Menu.Item key="features" className='border-0'>Features</Menu.Item>
          <Menu.Item key="how it works" className='border-0'>How it works</Menu.Item>
        </Menu>
      </div>
    );
}

export default Navbar;
