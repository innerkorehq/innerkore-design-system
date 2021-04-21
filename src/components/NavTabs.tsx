import React, { FC, useState } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

type MenuItemsType = {
  TabName: string;
  TabContent: string;
};

export type NavTabsTypes = {
  MenuItems: MenuItemsType[];
};

export const NavTabs: FC<NavTabsTypes> = ({ MenuItems }) => {
  const [current, setCurrent] = useState('0');
  return (
    // <div className="flex justify-between items-center bg-gray-800 py-2 px-5 md:px-20 xl:px-30">
      <Tabs defaultActiveKey={current} className='text-gray-400 bg-gray-800' >
      {MenuItems.map(({ TabName, TabContent }, index) => {
          return (
            <TabPane tab={TabName} key={'' + index} className={`bg-white py-0 ${ index + '' === current ? 'selectedMenuItem' : ''}`}>
              {TabContent}
          </TabPane>
          );
        })}
      </Tabs>
    // </div>
  );
};

export default NavTabs;
