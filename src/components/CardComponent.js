/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Card, Tooltip, Button, message } from 'antd';
import {
  ShoppingCartOutlined,
  EyeOutlined,
  HeartOutlined,
  PlusSquareTwoTone,
  MinusSquareTwoTone,
} from '@ant-design/icons';
import { navigate } from '@reach/router';
import styled from '@emotion/styled';
import LazyLoad from 'react-lazyload';

const { Meta } = Card;

const CardComponent = ({ product }) => {
  const [count, setCount] = useState(0);
  const [offer, setOffer] = useState(0);

  const cardOnClick = (e) => {
    console.log(e.target.dataset.key);
    if (e.target.dataset.key === 'show')
      navigate(`/product/showcase/${product._id}`);
    else if (e.target.dataset.key === 'cart')
      message.success('Item added to cart');
    else if (e.target.dataset.key === 'favorite')
      message.error('You must be logged in');
    else if (e.target.dataset.key === 'plus') setCount((value) => value + 1);
    else if (e.target.dataset.key === 'negative') {
      if (count === 0) return;
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (product.price.offer !== '') {
      const percent = Math.round(
        ((Number(product.price.regular) - Number(product.price.offer)) /
          Number(product.price.regular)) *
          100
      );

      setOffer(percent);
    }
  }, [product.price]);

  // const handleCardButtonClick = (e) => {
  //   console.log(e.target.dataset.key);
  // };

  const titleAndDescription = (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        margin: 'auto',
        padding: '1rem',
      }}
    >
      <p>{product.name}</p>
      {product.price.offer === '' ? (
        <h3>{`৳ ${product.price.regular}`}</h3>
      ) : (
        <>
          <s>{`৳${product.price.regular}`}</s>
          <h2
            style={{ color: '#f5222d' }}
          >{`৳ ${product.price.offer}`}</h2>{' '}
        </>
      )}

      <section
        style={{
          display: 'flex',
          flexBasis: '100%',
          justifyContent: 'space-between',
          margin: 10,
        }}
      >
        <Button
          type="primary"
          icon={
            <MinusSquareTwoTone
              style={{ fontSize: 30, pointerEvents: 'none' }}
            />
          }
          style={{ background: 'transparent', border: 'none' }}
          data-key="negative"
        />
        <p>{count}</p>
        <Button
          type="primary"
          icon={
            <PlusSquareTwoTone
              style={{ fontSize: 30, pointerEvents: 'none' }}
            />
          }
          style={{ background: 'transparent', border: 'none' }}
          data-key="plus"
        />
      </section>
    </div>
  );

  return (
    <Article displayoffer={offer > 0}>
      <div className="mask">
        <p>{offer > 0 ? offer : 0}%</p>
      </div>
      <StyledCard
        onClick={cardOnClick}
        hoverable
        cover={
          <LazyLoad height={200} offset={100}>
            <img
              alt="example"
              src={`${process.env.REACT_APP_DOMAIN.concat(
                product?.cover?.thumbnail
              )}`}
              // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              style={{ width: '100%', height: 160 }}
            />
          </LazyLoad>
        }
        actions={[
          <Tooltip title="Add to cart" placement="bottom">
            <Button
              data-key="cart"
              type="primary"
              shape="circle"
              icon={
                <ShoppingCartOutlined
                  style={{
                    fontSize: '25px',
                    margin: 'auto',
                    pointerEvents: 'none',
                  }}
                />
              }
              size="large"
            />
          </Tooltip>,
          <Tooltip
            title="See Product"
            placement="bottom"
            style={{ pointerEvents: 'none' }}
          >
            <Button
              data-key="show"
              shape="circle"
              style={{ background: 'rgb(130, 174, 216)' }}
              icon={
                <EyeOutlined
                  style={{
                    fontSize: '25px',
                    margin: 'auto',
                    color: '#fff',
                    pointerEvents: 'none',
                  }}
                />
              }
              size="large"
            />
          </Tooltip>,
          <Tooltip title="Add to favorite" placement="bottom">
            <Button
              data-key="favorite"
              type="primary"
              shape="circle"
              icon={
                <HeartOutlined
                  style={{
                    fontSize: '25px',
                    margin: 'auto',
                    pointerEvents: 'none',
                  }}
                />
              }
              size="large"
              danger
            />
          </Tooltip>,
        ]}
      >
        {titleAndDescription}
      </StyledCard>
    </Article>
  );
};

const Article = styled.article`
  margin: 10px;
  max-width: 300px;
  word-break: break-all;
  margin: 1rem;
  position: relative;

  & .mask {
    background: #52c41a;
    width: 40px;
    height: 21px;
    position: absolute;
    top: 5px;
    z-index: 1;
    right: 10px;
    text-align: center;

    display: block;
    border-radius: 12px;
    display: ${(props) => (props.displayoffer ? 'block' : 'none')};

    /* :hover {
      widows: 150px;
      height: 150px;
    } */
  }
`;

const StyledCard = styled(Card)`
  p {
    margin: auto;
  }
  & div:nth-of-type(2) {
    width: 250px;
    margin: auto;
    height: 210px;
  }

  @media (max-width: 360px) {
    & div:nth-of-type(2) {
      width: 230px;
    }
  }
  @media (max-width: 330px) {
    & div:nth-of-type(2) {
      width: 200px;
      height: 240;
    }
  }

  @media (max-width: 313px) {
    & div:nth-of-type(2) {
      width: 180px;
      height: 240px;
    }
  }
`;

export default CardComponent;
