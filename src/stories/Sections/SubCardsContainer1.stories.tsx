import React from 'react';
import {
  MySubCard1,
  MySubCard1Type,
} from '../../components/Sections/SubCardsContainer1/SubCardsContainer1';

export default {
  title: 'Cards/SubCardsContainer1',
  component: MySubCard1,
};

export const SubCards = (args: MySubCard1Type) => {
  return <MySubCard1 {...args} />;
};

SubCards.args = {
  MySubCard1Items: [
    {
      imgSrc:
        'https://themeforest.img.customer.envatousercontent.com/files/331435158/preview20.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f53a15b59e9f7654de4d2d900e954a7d',
      imgHref: '#',
      metaTitle: 'Kalles - Clean, Versatile, Responsive Shopify Theme - RTL support',
      metaDes: 'by The4',
    },
    {
      imgSrc:
        'https://themeforest.img.customer.envatousercontent.com/files/335174136/0_Preview_big.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=fa07ba70bc89d4b589d211fdab649d51',
      imgHref: '#',
      metaTitle: 'Discy - Social Questions and Answers WordPress Theme',
      metaDes: 'by 2codeThemes',
    },
    {
      imgSrc:
        'https://themeforest.img.customer.envatousercontent.com/files/321857191/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5a3a602684c453e99ab69be51385205a',
      imgHref: '#',
      metaTitle: 'Avone - Multipurpose Shopify Theme',
      metaDes: 'by adornthemes',
    },
    {
      imgSrc:
        'https://themeforest.img.customer.envatousercontent.com/files/335482892/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=82c0a5a24d0665692743a79105ca5c81',
      imgHref: '#',
      metaTitle: 'Rey - Fashion & Clothing, Furniture',
      metaDes: 'by ThemeFuzz',
    },
  ],
  btnTxt: 'View all themes',
};
