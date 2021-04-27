import React from 'react';
import { Hero, HeroType } from '../../components/Hero/Hero'

export default {
    title: 'Hero/Hero',
    component: Hero,
  };
  
  export const PrimaryHero = (args: HeroType) => {
    return <Hero {...args} />;
  };
  