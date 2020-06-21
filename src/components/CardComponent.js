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

const CardComponent = ({ product, handleModalOpen }) => {
  const [count, setCount] = useState(0);
  const [offer, setOffer] = useState(0);

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
    <Article displayoffer={offer > 0} data-key="card">
      <div className="mask">
        <p>{offer > 0 ? `${offer}%` : 0}</p>
      </div>
      <StyledCard
        type="inner"
        onClick={handleModalOpen}
        data-key="card"
        cover={
          <LazyLoad height={200} offset={100} once>
            <span style={{ display: 'flex' }}>
              <img
                alt="example"
                src={`${process.env.REACT_APP_DOMAIN.concat(
                  product?.cover?.medium
                )}`}
                style={{ width: 250, height: 230, margin: 'auto' }}
              />
            </span>
          </LazyLoad>
        }
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
  cursor: pointer;

  & .mask {
    background: #ffad5f;
    font-weight: 800;
    width: 48px;
    height: 28px;
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

    display: ${(props) => (props.displayoffer ? 'flex' : 'none')};

    p {
      margin: auto;
      color: #fff;
    }
  }
`;

const StyledCard = styled(Card)`
  p {
    margin: auto;
  }
  & div:nth-of-type(2) {
    background: transparent;
    width: 250px;
    margin: auto;
    height: 158px;
    padding: 0;
    display: flex;
    flex-direction: column;

    justify-content: flex-end;

    @media screen and (max-width: 768px) {
      height: 150px;
    }

    .ant-card-actions > li {
      margin: 0 !important;
    }
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
