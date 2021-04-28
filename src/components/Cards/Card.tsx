import React, { FC } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import './Card.css';

type CardType = {

}

export const MyCard: FC<MyCardType> = ({
}) => {   
    return (
        <div className='bg-gray-200'>

            <Row gutter={[32, 32]}>
                <Col md={12} xl={8}>
                    <Card
                    hoverable
                    className='bg-gray-100 overflow-hidden shadow-sm hover:shadow-xl border-0 cursor-default hover:bg-white'
                    style={{borderRadius: 10}}
                    >
                        <div>
                            <a href="#"><h1 className='text-4xl text-center hover:underline'>WordPress Themes</h1></a>
                            <p className='text-center text-lg mb-2'>Thousands of WordPress themes</p>
                            <div className='text-center text-lg'>
                                <a href="#" className='mr-5 text-blue-600 hover:underline'>Newest</a>
                                <a href="#" className='mr-5 text-blue-600 hover:underline'>BestSellers</a>
                            </div>
                        </div>
                        
                        <a href='#' className='imgWrapper block relative mt-12 -mb-12'>
                            <div className='w-16 h-16 mx-auto top-0 rounded-full' style={{boxShadow: '0 0 0 4px white', transform: 'translateY(50%)'}}>
                                <img src="https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/wordpress-38017feb3efbc9d223cfb8472fba3cb8.svg" alt=""
                                className='rounded-full'
                                />
                            </div>
                            <img src="https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-wordpress-c903c0a5acb77a9e92d5a7db0dbe2565.png" alt=""
                            className='border-4 border-white border-solid shadow-2xl rounded-xl'
                            />
                        </a>
                    </Card>
                </Col>

                <Col md={12} xl={8}></Col>
                <Col md={12} xl={8}></Col>

            </Row>
        </div>
    );
}

