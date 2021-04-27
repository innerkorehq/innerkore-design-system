import React, { FC } from 'react';
import { Row, Col } from 'antd';


type HeroType = {

}
        
export const Hero: FC<HeroType> = ({}) => {   
    return (
        <Row gutter={[16, 16]} justify='center' align='middle'>
            <Col xl={12}>
                <h1>51,541 WordPress Themes & Website Templates From $2</h1>
                <p>WordPress themes, web templates and more. Brought to you by the largest global community of creatives.</p>
            </Col>
            <Col xl={12}>
                <img src="https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/search-header-e9b1f87ec2352b50a7d1b2da92ee268d.png" alt=""/>
            </Col>
        </Row>
    );
}

export default Hero;

