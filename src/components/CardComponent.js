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
import CardBodyComponent from './CardBodyComponent';

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
        Number(product.price.regular) - Number(product.price.offer)
      );

      setOffer(percent);
    }
  }, [product.price]);

  // const handleCardButtonClick = (e) => {
  //   console.log(e.target.dataset.key);
  // };

  return (
    <Article displayoffer={offer > 0}>
      <div className="mask">
        <p>{offer > 0 ? `৳ ${offer} Off` : 0}</p>
      </div>
      <StyledCard
        type="inner"
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
        <CardBodyComponent product={product} />
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
    background: #f5222d;
    font-weight: 800;
    width: 68px;
    height: 68px;
    position: absolute;
    top: 5px;
    z-index: 1;
    right: 10px;
    text-align: center;
    display: block;
    border-radius: 12px;
    display: block;
    margin: auto;
    text-align: center;
    clip-path: polygon(
      50% 0%,
      46.93% 3.1%,
      43.47% 0.43%,
      40.83% 3.9%,
      37.06% 1.7%,
      34.89% 5.49%,
      30.87% 3.81%,
      29.21% 7.85%,
      25% 6.7%,
      23.89% 10.92%,
      19.56% 10.33%,
      19.01% 14.66%,
      14.64% 14.64%,
      14.66% 19.01%,
      10.33% 19.56%,
      10.92% 23.89%,
      6.7% 25%,
      7.85% 29.21%,
      3.81% 30.87%,
      5.49% 34.89%,
      1.7% 37.06%,
      3.9% 40.83%,
      0.43% 43.47%,
      3.1% 46.93%,
      0% 50%,
      3.1% 53.07%,
      0.43% 56.53%,
      3.9% 59.17%,
      1.7% 62.94%,
      5.49% 65.11%,
      3.81% 69.13%,
      7.85% 70.79%,
      6.7% 75%,
      10.92% 76.11%,
      10.33% 80.44%,
      14.66% 80.99%,
      14.64% 85.36%,
      19.01% 85.34%,
      19.56% 89.67%,
      23.89% 89.08%,
      25% 93.3%,
      29.21% 92.15%,
      30.87% 96.19%,
      34.89% 94.51%,
      37.06% 98.3%,
      40.83% 96.1%,
      43.47% 99.57%,
      46.93% 96.9%,
      50% 100%,
      53.07% 96.9%,
      56.53% 99.57%,
      59.17% 96.1%,
      62.94% 98.3%,
      65.11% 94.51%,
      69.13% 96.19%,
      70.79% 92.15%,
      75% 93.3%,
      76.11% 89.08%,
      80.44% 89.67%,
      80.99% 85.34%,
      85.36% 85.36%,
      85.34% 80.99%,
      89.67% 80.44%,
      89.08% 76.11%,
      93.3% 75%,
      92.15% 70.79%,
      96.19% 69.13%,
      94.51% 65.11%,
      98.3% 62.94%,
      96.1% 59.17%,
      99.57% 56.53%,
      96.9% 53.07%,
      100% 50%,
      96.9% 46.93%,
      99.57% 43.47%,
      96.1% 40.83%,
      98.3% 37.06%,
      94.51% 34.89%,
      96.19% 30.87%,
      92.15% 29.21%,
      93.3% 25%,
      89.08% 23.89%,
      89.67% 19.56%,
      85.34% 19.01%,
      85.36% 14.64%,
      80.99% 14.66%,
      80.44% 10.33%,
      76.11% 10.92%,
      75% 6.7%,
      70.79% 7.85%,
      69.13% 3.81%,
      65.11% 5.49%,
      62.94% 1.7%,
      59.17% 3.9%,
      56.53% 0.43%,
      53.07% 3.1%
    );

    display: ${(props) => (props.displayoffer ? 'flex' : 'none')};

    p {
      margin: auto;
    }

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
    background: #f9f9f9;
    width: 250px;
    margin: auto;
    height: auto;
  }

  @media (max-width: 360px) {
    & div:nth-of-type(2) {
      width: 230px;
    }
  }
  @media (max-width: 330px) {
    & div:nth-of-type(2) {
      width: 200px;
      height: auto;
    }
  }

  @media (max-width: 313px) {
    & div:nth-of-type(2) {
      width: 180px;
      height: auto;
    }
  }
`;

export default CardComponent;
