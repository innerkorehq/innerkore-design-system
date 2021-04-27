import React from 'react';
import { Hero, HeroType } from '../../components/Hero/Hero'

export default {
    title: 'Hero/Hero',
    component: Hero,
  };
  
  export const PrimaryHero = (args: HeroType) => {
    return <Hero {...args} />;
  };

  PrimaryHero.args ={
    headingTxt: '51,541 WordPress Themes & Website Templates From $2',
    paraTxt: 'WordPress themes, web templates and more. Brought to you by the largest global community of creatives.',
    imgSrc: 'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/search-header-e9b1f87ec2352b50a7d1b2da92ee268d.png',
    imgAlt: 'Surfing and water sports theme'
  }
  