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
          <Row gutter={[32, 32]}>
              <Col xxl={12} style={{backgroundColor: 'white'}}>
                    <Row gutter={[24, 24]} style={{ padding: 24, borderRadius: 10, paddingLeft: 80, border: '1px dashed gray'}}>
                            {MySubCardItems.map(
                                ({
                                    imgSrc,
                                }) => {
                                return (
                                    <Col xl={12}>
                                        <Card
                                        cover={<a href=''><img alt="example" src={imgSrc} className='relative mx-auto'/></a>}
                                        bodyStyle={{ background: 'white', position: 'absolute', bottom: 0, left: 0, width: '100%'}}
                                        >
                                        <Meta title="Kalles - Clean, Versatile, Responsive Shopify Theme-RTL Support" description="by The4" avatar={<img src={stars} alt='' className='w-40'></img>} />
                                        </Card>
                                    </Col>
                                );
                                },
                            )}
                    </Row>
              </Col>
              <Col xxl={12}>
                  <div className='ml-16 mr-64'>
                    <h2 className='text-4xl'>Unique themes and templates for every budget and every project.</h2>
                    <Button type="primary" size='large' className='mt-2 rounded-md'>{btnTxt}</Button>
                </div>
              </Col>
          </Row>
      </div>
    );
  };
  




