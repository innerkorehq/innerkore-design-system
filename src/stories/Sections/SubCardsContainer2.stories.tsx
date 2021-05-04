import React from 'react';
import {
  MySubCard2,
  MySubCard2Type,
} from '../../components/Sections/SubCardsContainer2/SubCardsContainer2';

export default {
  title: 'Cards/SubCardsContainer2',
  component: MySubCard2,
};

export const SubCards = (args: MySubCard2Type) => {
  return <MySubCard2 {...args} />;
};

SubCards.args = {
  MySubCard2Items: [
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
  title: 'Were the largest theme marketplace in the world',
  card1Txt: 'Home of the most popular themes in the world',
  card1ImgSrc:
    'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/value-prop-icons/popular-f17ddb16bbcfb47b4d24656ef9bf5fa3.svg',
  card2Txt: 'Clear documentation and theme support available',
  card2ImgSrc:
    'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/value-prop-icons/support-eaac5e66c8a5454ed083346094e404cd.svg',
  card3Txt: 'Quality reviewed creators and items',
  card3ImgSrc:
    'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/value-prop-icons/quality-1b3c0c21025219fdff69803474a2e018.svg',
};
