import React, { FC } from 'react';
import { Card } from 'antd';
import stars from '../../../../public/img/stars.jpg';
import './SubCardsContainer.css';

export type MySubCardType = {
};

type MySubCardItemsType = {
 
};

const { Meta } = Card;

export const MySubCard: FC<MySubCardType> = ({}) => { 
  return (
       <Card
        style={{}}
        cover={<a href=''><img alt="example" src="https://themeforest.img.customer.envatousercontent.com/files/331435158/preview20.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f53a15b59e9f7654de4d2d900e954a7d" className='relative mx-auto'/></a>}
        bodyStyle={{ background: 'white', position: 'absolute', bottom: 0, left: 0, width: '100%'}}
        >
        <Meta title="Kalles - Clean, Versatile, Responsive Shopify Theme-RTL Support" description="by The4" avatar={<img src={stars} alt='' className='h-6'></img>} />
        </Card>
    
  );
};
