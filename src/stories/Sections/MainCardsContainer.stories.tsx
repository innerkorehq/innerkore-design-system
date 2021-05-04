import React from 'react';
import {
  MyCard,
  MyCardType,
} from '../../components/Sections/MainCardsContainer/MainCardsContainer';

export default {
  title: 'Cards/MainCardsContainer',
  component: MyCard,
};

export const MainCards = (args: MyCardType) => {
  return <MyCard {...args} />;
};

MainCards.args = {
  MyCardItems: [
    {
      titleHref: '#',
      titleTxt: 'WordPress Themes',
      paraTxt: 'Thousands of WordPress themes',
      link1Href: '#',
      link1Txt: 'Newest',
      link2Href: '#',
      link2Txt: 'BestSellers',
      iconImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/wordpress-38017feb3efbc9d223cfb8472fba3cb8.svg',
      cardImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-wordpress-04e605078599969bc24c2b465b73d1a3.png',
      cardImgAlt: 'WordPress Themes',
    },
    {
      titleHref: '#',
      titleTxt: 'eCommerce Templates',
      paraTxt: 'Beautiful website templates',
      link1Href: '#',
      link1Txt: 'Newest',
      link2Href: '#',
      link2Txt: 'BestSellers',
      iconImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/ecommerce-6764e61d48ed9f67fcef55f6276819b8.svg',
      cardImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-ecommerce-d069e8d98640114a13897ad7475202c8.png',
      cardImgAlt: 'eCommerce Templates',
    },
    {
      titleHref: '#',
      titleTxt: 'Site Templates',
      paraTxt: 'HTML and website templates',
      link1Href: '#',
      link1Txt: 'Newest',
      link2Href: '#',
      link2Txt: 'BestSellers',
      iconImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/site-templates-4b524d1996efd02a14b8a78d6f827e04.svg',
      cardImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-site-templates-e4da8eef2122e7d2c0178b1d5a63251f.png',
      cardImgAlt: 'Site Templates',
    },
    {
      titleHref: '#',
      titleTxt: 'Marketing Templates',
      paraTxt: 'Email, newsletter and landing page templates.',
      link1Href: '#',
      link1Txt: 'Newest',
      link2Href: '#',
      link2Txt: 'BestSellers',
      iconImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/marketing-bfe20e6450d91d1d92e89f512af5cfe8.svg',
      cardImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-marketing-aa0c86ed0c48d27c47350a89b393268a.png',
      cardImgAlt: 'Marketing Templates',
    },
    {
      titleHref: '#',
      titleTxt: 'CMS Templates',
      paraTxt: 'Over 1,700 CMS website templates',
      link1Href: '#',
      link1Txt: 'Newest',
      link2Href: '#',
      link2Txt: 'BestSellers',
      iconImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/cms-themes-69e2462231b345dca78df22eee42c3d0.svg',
      cardImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-cms-themes-dcf193e313c6cc9c0f9b26a394bb3283.png',
      cardImgAlt: 'CMS Templates',
    },
    {
      titleHref: '#',
      titleTxt: 'Blogging',
      paraTxt: 'Blogger templates and themes',
      link1Href: '#',
      link1Txt: 'Newest',
      link2Href: '#',
      link2Txt: 'BestSellers',
      iconImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/blogging-96fbea50c1aa03e434845f5795e8aa2f.svg',
      cardImgSrc:
        'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-blogging-a36c3a96508905ed8b77df66c9e8d4cf.png',
      cardImgAlt: 'Blogging',
    },
  ],
  btnTxt: 'View All Categories',
};
