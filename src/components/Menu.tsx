import React, { FC } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
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
  dropDownIcon?: string;
  NavItems: NavItemsType[];
  MenuItems: MenuItemsType[];
  btnIcon?: string;
  dropDownTxt?: string;
  btnTxt?: string;
};

export const TopMenu: FC<TopMenuTypes> = ({
  NavItems,
  logo,
  dropDownIcon,
  btnIcon,
  dropDownTxt,
  btnTxt,
}) => {
  return (
    <>
      <Menu mode="horizontal" className="bg-gray-900 text-gray-300">
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="11">
          <IconFont type="icon-shoppingcart" />
          Option 11
        </Menu.Item>
      </Menu>
    </>
  );
};

export default TopMenu;
