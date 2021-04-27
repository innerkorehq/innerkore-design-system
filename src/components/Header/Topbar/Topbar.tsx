import React, { FC } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, createFromIconfontCN } from '@ant-design/icons';
import './Topbar.css';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
  ],
});

const { SubMenu } = Menu;

type OptionsType = {
  optionTxt: string;
  href: string;
  logoInOption: string;
};

type TopMenuItemsType = {
  menuTxt: string;
  href: string;
};

export type TopbarTypes = {
  logo: string;
  menuIconTxt?: string;
  Options: OptionsType[];
  TopMenuItems: TopMenuItemsType[];
  dropDownTxt?: string;
};

export const Topbar: FC<TopbarTypes> = ({
  logo,
  menuIconTxt,
  dropDownTxt,
  Options,
  TopMenuItems,
}) => {
  return (
    <div className="hidden xl:flex justify-between items-center bg-gray-900 py-2 px-5 md:px-20 xl:px-30">
      <div>
        <img src={logo} alt="" className="h-5" />
      </div>
      <Menu
        mode="horizontal"
        className="bg-gray-900 text-gray-400 border-0"
        style={{ marginRight: -20 }}
      >
        {TopMenuItems.map(({ menuTxt, href }, index) => {
          return (
            <Menu.Item className="border-0">
              <a href={href} className="text-gray-400 hover:text-white">
                {menuTxt}
              </a>
            </Menu.Item>
          );
        })}

        <SubMenu icon={<AppstoreOutlined />} title={dropDownTxt} className="border-0">
          {Options.map(({ optionTxt, href, logoInOption }, index) => {
            return (
              <Menu.Item style={{ height: 'auto', width: '300px' }}>
                <div style={{ margin: 10 }} id="topbar">
                  <img src={logoInOption} alt="" style={{ height: 18, display: 'block' }} />
                  <a href={href} className="option-link" style={{ display: 'block' }}>
                    {optionTxt}
                  </a>
                </div>
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
