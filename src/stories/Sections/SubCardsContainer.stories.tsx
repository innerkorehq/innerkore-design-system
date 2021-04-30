import React from 'react';
import { MySubCard, MySubCardType } from '../../components/Sections/SubCardsContainer/SubCardsContainer';

export default {
  title: 'Cards/SubCardsContainer',
  component: MySubCard,
};

export const SubCards = (args: MySubCardType) => {
  return <MySubCard {...args} />;
};

SubCards.args = {
  MySubCardItems : [
    {
      imgSrc: "https://themeforest.img.customer.envatousercontent.com/files/331435158/preview20.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f53a15b59e9f7654de4d2d900e954a7d",
    },
    {
      imgSrc: 'https://themeforest.img.customer.envatousercontent.com/files/335174136/0_Preview_big.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=fa07ba70bc89d4b589d211fdab649d51',
    },
    {
      imgSrc: 'https://themeforest.img.customer.envatousercontent.com/files/321857191/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5a3a602684c453e99ab69be51385205a',
    },
    {
      imgSrc: 'https://themeforest.img.customer.envatousercontent.com/files/335482892/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=82c0a5a24d0665692743a79105ca5c81',
    }
  ],
  btnTxt: 'View all themes'
}