import React, { FC, useState } from 'react';
import { Drawer, Button } from 'antd';

export type DrawerBarTypes = {
    imgSrcIconLeft: string;
    imgSrcIconRight: string;

  };


export const DrawerBar: FC<DrawerBarTypes> = ({ imgSrcIconLeft, imgSrcIconRight }) => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const showDrawer1 = () => {
        setVisible1(true);
        setVisible2(false);
    };
    const showDrawer2 = () => {
        setVisible2(true);
        setVisible1(false);
    };
    const onClose = () => {
        setVisible1(false);
        setVisible2(false);
    };

  return (
    <div className='flex justify-between bg-gray-800 py-2 block lg:hidden'>
      <Button type="primary" onClick={showDrawer1} className='ml-4 bg-gray-700 border-0'>
        <img src={imgSrcIconLeft} alt="" className='block h-5'/>
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible1}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      <Button type="primary" onClick={showDrawer2} className='mr-4 bg-gray-700 border-0'>
        <img src={imgSrcIconRight} alt="" className='block h-5'/>
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible2}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
