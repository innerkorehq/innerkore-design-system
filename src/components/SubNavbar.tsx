import React, { FC } from 'react';
import { Menu } from 'antd';
import './SubNavbar.css'

const { SubMenu } = Menu;

type OptionsType = {
  optionTxt: string;
  href: string;
};

type dropDownItemsType = {
    dropDownTitle: string;
    Options: OptionsType[];
};

export type SubNavbarTypes = {
  Options: OptionsType[];
  dropDownItems: dropDownItemsType[];
};

export const SubNavbar: FC<SubNavbarTypes> = ({ dropDownItems }) => {
    return (
        <Menu mode="horizontal">
            {dropDownItems.map(({dropDownTitle, Options} ) => {
                return (
                    <SubMenu title={dropDownTitle} className="submenu-title">
                        {Options.map(({ optionTxt, href }, index) => {
                            return (
                            <Menu.Item>
                                <a href={href} style={{display: 'block'}} className='menu-item-link'>{optionTxt}</a>
                            </Menu.Item>
                            );
                        })}
                    </SubMenu>
                );
    
            })}

        </Menu>
    );
};

export default SubNavbar;
