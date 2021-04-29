import React, { FC } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import './Card.css';

export type MyCardType = {
    titleTxt: string;
    titleHref: string;
    paraTxt: string;
    link1Href: string;
    link1Txt: string;
    link2Href: string;
    link2Txt: string;
    iconImgSrc: string;
    cardImgSrc: string;
    cardImgAlt: string;
}

export const MyCard: FC<MyCardType> = ({ titleTxt, titleHref, paraTxt, link1Href, link1Txt, link2Href, link2Txt, iconImgSrc, cardImgSrc, cardImgAlt
}) => {   
    return (
        <div className='bg-gray-200'>

            <Row gutter={[32, 32]}>
                <Col md={12} xl={8}>
                    <Card
                    hoverable
                    className='bg-gray-100 overflow-hidden shadow-sm hover:shadow-xl border-0 cursor-default hover:bg-white rounded-xl'
                    >
                        <div>
                            <a href={titleHref}><h1 className='text-4xl text-center hover:underline'>{titleTxt}</h1></a>
                            <p className='text-center text-lg mb-2'>{paraTxt}</p>
                            <div className='text-center text-lg'>
                                <a href={link1Href} className='mr-5 text-blue-600 hover:underline'>{link1Txt}</a>
                                <a href={link2Href} className='mr-5 text-blue-600 hover:underline'>{link2Txt}</a>
                            </div>
                        </div>
                        
                        <a href='#' className='imgWrapper block relative mt-12 -mb-12'>
                            <div className='w-16 h-16 mx-auto top-0 rounded-full' style={{boxShadow: '0 0 0 4px white', transform: 'translateY(50%)'}}>
                                <img src={iconImgSrc} alt="" className='rounded-full' />
                            </div>
                            <img src={cardImgSrc} alt={cardImgAlt} className='border-4 border-white border-solid shadow-2xl rounded-xl' />
                        </a>
                    </Card>
                </Col>

                <Col md={12} xl={8}></Col>
                <Col md={12} xl={8}></Col>

            </Row>
        </div>
    );
}

