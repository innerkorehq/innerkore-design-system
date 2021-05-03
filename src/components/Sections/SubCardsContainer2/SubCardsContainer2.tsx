import React, { FC } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import stars from '../../../../public/img/stars.jpg';
// import './SubCardsContainer2.css';

export type MySubCard2Type = {
    MySubCard2Items: MySubCard2ItemsType[];
    btnTxt: string;
};

type MySubCard2ItemsType = {
    imgSrc: string;
};

const { Meta } = Card;


export const MySubCard2: FC<MySubCard2Type> = ({ MySubCard2Items, btnTxt}) => {
    return (
      <div className="bg-gray-200 py-10 lg:py-32">
          <Row gutter={[32, 32]} style={{marginLeft: 0, marginRight: 0}}>
            <Col xl={12} className='xl:order-1'>
                <div className='xl:mr-32'>
                    <h2 className='text-4xl font-normal text-center lg:text-right'>We're the largest theme marketplace in the world</h2>
                    <div className='flex justify-center items-center -ml-16'>
                        <div className='max-w-80 w-44 bg-white p-6 rounded-lg shadow-xl relative z-10'>
                            <img className='h-12' src="https://assets.market-storefront.envato.com/storefront/packs/media/images/home/value-prop-icons/popular-f17ddb16bbcfb47b4d24656ef9bf5fa3.svg" alt=""/>
                            <div className='text-sm text-gray-700 ml-6 lg:ml-0 mt-4'>Home of the most popular themes in the world</div>
                        </div>
                        <div className='max-w-80 w-44 bg-white p-6 mx-8 rounded-lg shadow-xl'>
                            <img className='h-12' src="https://assets.market-storefront.envato.com/storefront/packs/media/images/home/value-prop-icons/popular-f17ddb16bbcfb47b4d24656ef9bf5fa3.svg" alt=""/>
                            <div className='text-sm text-gray-700 ml-6 lg:ml-0 mt-4'>Home of the most popular themes in the world</div>
                        </div>
                        <div className='max-w-80 w-44 bg-white p-6 rounded-lg shadow-xl'>
                            <img className='h-12' src="https://assets.market-storefront.envato.com/storefront/packs/media/images/home/value-prop-icons/popular-f17ddb16bbcfb47b4d24656ef9bf5fa3.svg" alt=""/>
                            <div className='text-sm text-gray-700 ml-6 lg:ml-0 mt-4'>Home of the most popular themes in the world</div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xl={12} className='bg-gray-200 xl:bg-white rounded-lg xl:order-0'>
                <Row gutter={[24, 24]} 
                style={{ borderRadius: 10 }} className='pl-0 xl:pl-24 py-6 pr-3'
                justify= 'center'
                >
                        {MySubCard2Items.map(
                            ({
                                imgSrc,
                            }) => {
                            return (
                                <Col md={12}>
                                    <Card
                                    cover={<a href=''><img alt="example" src={imgSrc} className='relative mx-auto'/></a>}
                                    bodyStyle={{ background: 'white', padding: 9 }}
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
  




