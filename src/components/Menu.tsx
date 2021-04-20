import React, { FC } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, createFromIconfontCN } from '@ant-design/icons';
import Logo from '../../public/img/envato-market-white.png';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
  ],
});

const { SubMenu } = Menu;

type NavItemsType = {
  navTxt: string;
  href: string;
};

type MenuItemsType = {
  menuTxt: string;
  href: string;
};

export type TopMenuTypes = {
    logo: string;
    menuTxt1: string;
  menuTxt2?: string;
  menuTxt3: string;
  option1Txt: string;
  option2Txt: string;
  NavItems: NavItemsType[];
  MenuItems: MenuItemsType[];
  btnIcon?: string;
  dropDownTxt?: string;
  btnTxt?: string;
};

export const TopMenu: FC<TopMenuTypes> = ({
    logo,
    menuTxt1,
    menuTxt2,
    menuTxt3,
  dropDownTxt,
  option1Txt,
  option2Txt
}) => {
  return (
    <div className="flex justify-between items-center bg-gray-900 py-2 px-5 md:px-20 xl:px-30">
        <div>
            <img src={logo} alt="" className="h-5" />
        </div>
        <Menu mode="horizontal" className="bg-gray-900 text-gray-300 border-0">
          <Menu.Item className='border-0 hover:text-white'>{menuTxt1}</Menu.Item>
          <Menu.Item className='border-0 hover:text-white'>{menuTxt2}</Menu.Item>
          <SubMenu icon={<AppstoreOutlined />} title={dropDownTxt} className='border-0 hover:text-white'>
            <Menu.Item>{option1Txt}</Menu.Item>
            <Menu.Item>{option2Txt}</Menu.Item>
          </SubMenu>
          <Menu.Item className='border-0 hover:text-white'>
            <IconFont type="icon-shoppingcart" />
            {menuTxt3}
          </Menu.Item>
        </Menu>
    </div>
  );
};

export default TopMenu;
