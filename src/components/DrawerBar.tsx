import React, { FC, useState } from 'react';
import { Drawer, Button } from 'antd';

export type DrawerBarTypes = {
    imgSrcIconLeft: string;
    imgSrcIconRight: string;
    MenuItems: MenuItemsType[];
};

type MenuItemsType = {
    menuTxt: string;
    href: string;
    iconImgSrc: string;
};

export const DrawerBar: FC<DrawerBarTypes> = ({ imgSrcIconLeft, imgSrcIconRight, MenuItems }) => {
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
      <Button type="primary" onClick={showDrawer1} className='ml-3 bg-gray-700 border-0'>
        <img src={imgSrcIconLeft} alt="" className='block h-4'/>
      </Button>
      <Drawer
        title=
            {<img src='https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg' alt='' style={{height: 15}}></img>      
        }
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible1}
        mask={true}
        drawerStyle={{backgroundColor: '#2d3748'}}
        headerStyle={{backgroundColor: '#2d3748', borderBottom: 0}}
      >
        {/* {MenuItems.map(({ menuTxt, href, iconImgSrc }, index) => {
          return (
              <div>
                  <a href={href} className="text-gray-400 hover:text-white inline">{menuTxt}</a>
                  <img src={iconImgSrc} alt="" className='w-5 h-5 inline-block'/>
              </div>
          );
        })} */}
      </Drawer>

      <Button type="primary" onClick={showDrawer2} className='mr-3 bg-gray-700 border-0'>
        <img src={imgSrcIconRight} alt="" className='block h-4'/>
      </Button>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible2}
        mask={true}
        drawerStyle={{backgroundColor: '#2d3748'}}
        bodyStyle={{padding: 0 }}
      >
       {MenuItems.map(({ menuTxt, href, iconImgSrc }, index) => {
          return (
              <a href={href} style={{display: 'block', padding: '1rem 0', paddingLeft: 15, 
              borderBottom: '1px solid #cbd5e0', color:'#cbd5e0', backgroundColor: '#3d4654'}}>{menuTxt}
                <span style={{float: 'right', paddingRight: 15}}><img src={iconImgSrc} alt="" style={{height:'14px'}}/></span>
              </a>
          );
        })}

      </Drawer>
    </div>
  );
};
