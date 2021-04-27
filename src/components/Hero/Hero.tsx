import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { SearchInput } from '../Hero/SearchInput'


type HeroType = {

}
        
export const Hero: FC<HeroType> = ({}) => {   
    return (
        <div className='px-5 md:px-20 xl:px-30 bg-gray-200 py-10 lg:py-32'>
            <Row gutter={[48, 48]} justify='center' align='middle'>
                <Col xl={12}>
                    <h1 className='text-xl lg:text-5xl font-bold text-gray-800 text-center lg:text-left my-2'>51,541 WordPress Themes & Website Templates From $2</h1>
                    <p className='text-xl text-gray-700 text-center lg:text-left pt-0 mt-0'>WordPress themes, web templates and more. Brought to you by the largest global community of creatives.</p>
                    <div className='mt-8'>
                        <SearchInput />
                    </div>
                    
                </Col>
                <Col xl={12}>
                    <img src="https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/search-header-e9b1f87ec2352b50a7d1b2da92ee268d.png" alt=""/>
                </Col>
            </Row>
        </div>
    );
}

export default Hero;

