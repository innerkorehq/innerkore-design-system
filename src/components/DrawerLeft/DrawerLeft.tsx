import React, { FC, useState } from 'react';
import { Drawer, Button } from 'antd';
import { Select } from 'antd';
import { Input, Space } from 'antd';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import './DrawerLeft.css';

const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;

export type DrawerLeftTypes = {
    imgSrcIconLeft: string;
    SelectOptions: SelectOptionsType[];
    PanelHeaders: PanelHeadersType[];
    PanelItems: PanelItemsType[];
};

type SelectOptionsType = {
    optionTxt: string;
    href: string;
};

type PanelHeadersType = {
    panelHeader: string;
}

type PanelItemsType = {
    panelTxt: string;
    href: string;
}

export const DrawerLeft: FC<DrawerLeftTypes> = ({ imgSrcIconLeft, SelectOptions, PanelHeaders, PanelItems }) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
   
    const onClose = () => {
        setVisible(false);
    };

    const [current, setCurrent] = useState('0');

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    
    let title = 
    <>
        <div style={{margin: '1rem 3rem'}}><img src='https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg' alt='' style={{height: 15}}></img></div>     
        <Select defaultValue={[current]}
        onClick={() => setCurrent('' + index)}
        dropdownStyle={{padding: 0}}
        listHeight={400}
        style={{ width: '100%' }}
        size={'large'}
        >
            {SelectOptions.map(({ optionTxt, href}, index) => {
                return (
                    <Option value={'' + index} 
                    style={{backgroundColor: '#2d3748', color:'white', padding: '1rem', margin: 0, fontSize: '1rem'}}
                    >
                    <a href={href} style={{color: 'white'}}>{optionTxt}</a> 
                    </Option>
                );
                })}
        </Select>
        <Space direction="vertical" style={{padding: '20px 0', margin: '0 13px'}}>
            <Search placeholder="Search" style={{ width: 230 }}/>
        </Space>
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
             <Collapse
                bordered={false}
                defaultActiveKey={['0']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
            >
                {PanelHeaders.map((panelHeader) => {
                    return (
                        <Panel header={panelHeader} key="1" className="site-collapse-custom-panel">
                            {PanelItems.map(({panelTxt, href}, index) => {
                                <a href={href}>{panelTxt}</a>
                            })}
                        </Panel>
                    );
                })}

            </Collapse>
        </Drawer>
        </>
      );
    };