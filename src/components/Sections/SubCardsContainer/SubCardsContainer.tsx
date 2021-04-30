import React, { FC } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import stars from '../../../../public/img/stars.jpg';
import './SubCardsContainer.css';

export type MySubCardType = {
    MySubCardItems: MySubCardItemsType[];
    btnTxt: string;
};

type MySubCardItemsType = {
    imgSrc: string;
};

const { Meta } = Card;


export const MySubCard: FC<MySubCardType> = ({ MySubCardItems, btnTxt}) => {
    return (
      <div className="bg-gray-200 py-10 lg:py-32">
          <Row gutter={[32, 32]} style={{marginLeft: 0, marginRight: 0}}>
            <Col xl={12} className='xl:order-1'>
                <div className='xl:ml-16 xl:mr-64 text-center xl:text-left'>
                    <h2 className='text-4xl font-normal'>Unique themes and templates for every budget and every project.</h2>
                    <Button type="primary" size='large' className='mt-2 rounded-md hidden xl:block'>{btnTxt}</Button>
                </div>
            </Col>
            <Col xl={12} className='bg-gray-200 xl:bg-white rounded-lg xl:order-0'>
                <Row gutter={[24, 24]} 
                style={{ borderRadius: 10 }} className='pl-0 xl:pl-24 py-6 pr-3'
                justify= 'center'
                >
                        {MySubCardItems.map(
                            ({
                                imgSrc,
                            }) => {
                            return (
                                <Col md={12}>
                                    <Card
                                    cover={<a href=''><img alt="example" src={imgSrc} className='relative mx-auto'/></a>}
                                    bodyStyle={{ background: 'white', position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'none'}}
                                    >
                                    <Meta title="Kalles - Clean, Versatile, Responsive Shopify Theme-RTL Support" description="by The4" avatar={<img src={stars} alt='' className='w-40'></img>} />
                                    </Card>
                                </Col>
                            );
                            },
                        )}
                </Row>
            </Col>
              
            <Col xl={0} className='mx-auto order-3'>
                <Button type="primary" size='large' className='mt-2 mx-auto block rounded-md xl:hidden'>{btnTxt}</Button>
            </Col>
          </Row>
      </div>
    );
  };
  




