import React, { FC, useState } from 'react';
import { Drawer, Button } from 'antd';
import { Select } from 'antd';
const { Option } = Select;

export type DrawerLeftTypes = {
    imgSrcIconLeft: string;
    imgSrcIconRight: string;
    SelectOptions: SelectOptionsType[];
};

type SelectOptionsType = {
    optionTxt: string;
};

export const DrawerLeft: FC<DrawerLeftTypes> = ({ imgSrcIconLeft, SelectOptions }) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
   
    const onClose = () => {
        setVisible(false);
    };

    const [current, setCurrent] = useState('0');
    
    let title = 
    <>
        <div style={{margin: '1rem 3rem'}}><img src='https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg' alt='' style={{height: 15}}></img></div>     
        <Select defaultValue={[current]} onClick={() => setCurrent('' + index)} style={{ width: '100%'}}>
            {SelectOptions.map(({ optionTxt}, index) => {
                return (
                    <Option value={'' + index}>{optionTxt}</Option>
                );
                })}
        </Select>
    </>
    return (
        <>
          <Button type="primary" onClick={showDrawer} className='ml-3 bg-gray-700 border-0'>
            <img src={imgSrcIconLeft} alt="" className='block h-4'/>
        </Button>
        <Drawer
        title={title}
            
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        mask={true}
        drawerStyle={{backgroundColor: '#2d3748'}}
        headerStyle={{backgroundColor: '#2d3748', borderBottom: 0, padding: 0}}
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
        </>
      );
    };