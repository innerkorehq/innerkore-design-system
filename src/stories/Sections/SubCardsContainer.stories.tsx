import React from 'react';
import { MySubCard, MySubCardType } from '../../components/Sections/SubCardsContainer/SubCardsContainer';

export default {
  title: 'Cards/SubCardsContainer',
  component: MySubCard,
};

export const SubCards = (args: MySubCardType) => {
  return <MySubCard {...args} />;
};
