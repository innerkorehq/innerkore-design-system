import React, { FC } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
  ],
});

const { SubMenu } = Menu;

type OptionsType = {
  optionTxt: string;
  href: string;
};

type MenuItemsType = {
  menuTxt: string;
  href: string;
};

export type TopbarTypes = {
  logo: string;
  menuIconTxt?: string;
  Options: OptionsType[];
  MenuItems: MenuItemsType[];
  dropDownTxt?: string;
};

export const Topbar: FC<TopbarTypes> = ({ logo, menuIconTxt, dropDownTxt, Options, MenuItems }) => {
  return (
    <div className="flex justify-between items-center bg-gray-900 py-2 px-5 md:px-20 xl:px-30">
      <div>
        <img src={logo} alt="" className="h-5" />
      </div>
      <Menu mode="horizontal" className="bg-gray-900 text-gray-400 border-0">
        {MenuItems.map(({ menuTxt, href }, index) => {
          return (
            <Menu.Item className="border-0">
              <a href={href} className="text-gray-400 hover:text-white">
                {menuTxt}
              </a>
            </Menu.Item>
          );
        })}

        <SubMenu
          icon={<AppstoreOutlined />}
          title={dropDownTxt}
          className="border-0 hover:text-white"
        >
          {Options.map(({ optionTxt, href }, index) => {
            return (
              <Menu.Item>
                <a href={href}>{optionTxt}</a>
              </Menu.Item>
            );
          })}
        </SubMenu>

        <Menu.Item className="border-0 hover:text-white bg-gray-800 px-3 rounded">
          <IconFont type="icon-shoppingcart" />
          {menuIconTxt}
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Topbar;
