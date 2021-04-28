import React from 'react';
import { MyCard, MyCardType } from '../../components/Cards/Card'

export default {
    title: 'Cards/MyCard',
    component: MyCard,
};
  
export const PrimaryMyCard = (args: MyCardType) => {
    return <MyCard {...args} />;
};

  