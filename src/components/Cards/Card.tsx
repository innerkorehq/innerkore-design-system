import React, { FC } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';

// const { Meta } = Card;

type CardType = {

}

export const MyCard: FC<MyCardType> = ({
}) => {   
    return (
        <div className='border-content'>

            <Row gutter={[32, 32]}>
                <Col lg={8}>
                    <Card title="Card title" bordered={false}>
                        <a href='#' className='block relative'>

                            <div className='w-16 h-16 mx-auto top-0 rounded-full' style={{boxShadow: '0 0 0 4px white', transform: 'translateY(50%)'}}>
                                <img src="https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/wordpress-38017feb3efbc9d223cfb8472fba3cb8.svg" alt=""
                                style={{}}
                                className='w-16'
                                />
                            </div>

                            <img src="https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-wordpress-c903c0a5acb77a9e92d5a7db0dbe2565.png" alt=""
                            className='border-4 border-white border-solid shadow-lg border-content'
                            style={{borderRadius: '15px'}}
                            />
                            
                        </a>
                    </Card>
                </Col>

                <Col lg={8}></Col>
                <Col lg={8}></Col>

            </Row>
        </div>
    );
}

