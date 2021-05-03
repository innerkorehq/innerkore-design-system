import React, { FC } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import './MainCardsContainer.css';

export type MyCardType = {
  MyCardItems: MyCardItemsType[];
  btnTxt: string;
};

type MyCardItemsType = {
  titleTxt: string;
  titleHref: string;
  paraTxt: string;
  link1Href: string;
  link1Txt: string;
  link2Href: string;
  link2Txt: string;
  iconImgSrc: string;
  cardImgSrc: string;
  cardImgAlt: string;
};

export const MyCard: FC<MyCardType> = ({ MyCardItems, btnTxt }) => {
  return (
    <div className="bg-gray-200 px-5 md:px-20 xl:px-30 py-10 lg:py-32">
      <Row gutter={[32, 32]}>
        {MyCardItems.map(
          ({
            titleHref,
            titleTxt,
            paraTxt,
            link1Href,
            link1Txt,
            link2Href,
            link2Txt,
            iconImgSrc,
            cardImgSrc,
            cardImgAlt,
          }) => {
            return (
              <Col md={12} xxl={8}>
                <Card
                  hoverable
                  className="bg-gray-100 overflow-hidden shadow-sm hover:shadow-xl border-0 cursor-default hover:bg-white rounded-xl h-410px"
                >
                  <div>
                    <a href={titleHref}>
                      <h1 className="text-4xl text-center hover:underline">{titleTxt}</h1>
                    </a>
                    <p className="text-center text-lg mb-2">{paraTxt}</p>
                    <div className="text-center text-lg">
                      <a href={link1Href} className="mr-5 text-blue-600 hover:underline">
                        {link1Txt}
                      </a>
                      <a href={link2Href} className="mr-5 text-blue-600 hover:underline">
                        {link2Txt}
                      </a>
                    </div>
                  </div>

                  <a href="#" className="imgWrapper block relative mt-12 -mb-12">
                    <div
                      className="w-16 h-16 mx-auto top-0 rounded-full"
                      style={{ boxShadow: '0 0 0 4px white', transform: 'translateY(50%)' }}
                    >
                      <img src={iconImgSrc} alt="" className="rounded-full" />
                    </div>
                    <img
                      src={cardImgSrc}
                      alt={cardImgAlt}
                      className="border-4 border-white border-solid shadow-2xl rounded-xl"
                    />
                  </a>
                </Card>
              </Col>
            );
          },
        )}
      </Row>
      <Button type="primary" size='large' className='mt-16 mx-auto block rounded-md'>{btnTxt}</Button>

    </div>
  );
};
