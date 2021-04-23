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
    Panels: PanelsType[];
};

type SelectOptionsType = {
    optionTxt: string;
    href: string;
};

type PanelsType = {
    panelHeader: string;
    PanelChildren: PanelChildrenType[];
}

type PanelChildrenType = {
    panelLink: string;
    href: string;
}

export const DrawerLeft: FC<DrawerLeftTypes> = ({ imgSrcIconLeft, SelectOptions, Panels }) => {

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
                    style={{backgroundColor: '#2c2e33', color:'white', padding: '1rem', margin: 0, fontSize: '1rem'}}
                    >
                    <a href={href} style={{color: 'white'}}>{optionTxt}</a> 
                    </Option>
                );
                })}
        </Select>
        <Space direction="vertical" style={{padding: '20px 0', margin: '0 13px'}}>
            <Search placeholder="Search" style={{ width: 230 }} />
        </Space>
    </>

    return (
        <>
          <Button type="primary" onClick={showDrawer} className='ml-3 bg-gray-700 border-0 hover:bg-blue-400'>
            <img src={imgSrcIconLeft} alt="" className='block h-4'/>
        </Button>
        <Drawer
        title={title}
            
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        mask={true}
        drawerStyle={{backgroundColor: '#2c2e33'}}
        headerStyle={{backgroundColor: '#2c2e33', borderBottom: 0, padding: 0}}
        >
             <Collapse
                bordered={false}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 270 : 90} />}
                expandIconPosition={'right'}
                className="site-collapse-custom-collapse"
                style={{background: '#333843'}}
            >
                {Panels.map(({panelHeader, PanelChildren}, index) => {
                    return (
                        <Panel header={panelHeader} key={'' + index} className="site-collapse-custom-panel" style={{color: 'white', fontSize: '1rem'}}>
                            {PanelChildren.map(({panelLink, href}, index) => {
                                return <a href={href} style={{display: 'block', color: 'white', fontSize: '1rem', padding: '1rem 0.5rem 1rem 1.5rem'} }>{panelLink}</a>
                            })}
                        </Panel>
                    );
                })}

            </Collapse>
        </Drawer>
        </>
      );
    };