import React from 'react';
import { MyCard, MyCardType } from '../../components/Cards/Card'

export default {
    title: 'Cards/MyCard',
    component: MyCard,
};
  
export const PrimaryMyCard = (args: MyCardType) => {
    return <MyCard {...args} />;
};

PrimaryMyCard.args ={
    titleHref: '#',
    titleTxt: 'WordPress Themes',
    paraTxt: 'Thousands of WordPress themes',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc: 'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/wordpress-38017feb3efbc9d223cfb8472fba3cb8.svg',
    cardImgSrc: 'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-wordpress-c903c0a5acb77a9e92d5a7db0dbe2565.png',
    cardImgAlt: 'WordPress Themes'

}
  