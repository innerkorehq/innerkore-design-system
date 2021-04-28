import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { SearchInput } from '../Hero/SearchInput';
import './Hero.css';

export type HeroType = {
    headingTxt: string;
    paraTxt: string;
    imgSrc: string;
    imgAlt: string;
    btnTxt: string;
    placeholder: string;
}
        
export const Hero: FC<HeroType> = ({headingTxt, paraTxt, imgSrc, imgAlt, placeholder, btnTxt
}) => {   
    return (
        <div className='px-5 md:px-20 xl:px-30 bg-gray-200 py-10 lg:py-32' id='hero'>
            <Row gutter={[48, 48]} justify='center' align='middle'>
                <Col xl={12}>
                    <h1 className='text-xl lg:text-5xl font-bold text-gray-800 text-center lg:text-left my-2' style={{lineHeight: '50px'}}>{headingTxt}</h1>
                    <p className='text-xl text-gray-700 text-center lg:text-left mt-2'>{paraTxt}</p>
                    <div className='mt-8'>
                        <SearchInput placeholder={placeholder} btnTxt={btnTxt}/>
                    </div>
                    
                </Col>
                <Col xl={12}>
                    <img src={imgSrc} alt={imgAlt}/>
                </Col>
            </Row>
        </div>
    );
}

export default Hero;

