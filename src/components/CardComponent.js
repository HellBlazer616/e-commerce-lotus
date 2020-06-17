import React from 'react';
import { Card, Tooltip, Button, message } from 'antd';
import {
  ShoppingCartOutlined,
  EyeOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { navigate } from '@reach/router';
import styled from '@emotion/styled';
import LazyLoad from 'react-lazyload';

const { Meta } = Card;

const CardComponent = ({ product }) => {
  const cardOnClick = (e) => {
    console.log(e.target.dataset.key);
    if (e.target.dataset.key === 'show')
      navigate(`/product/showcase/${product._id}`);
    else if (e.target.dataset.key === 'cart')
      message.success('Item added to cart');
    else if (e.target.dataset.key === 'favorite')
      message.error('You must be logged in');
  };

  const titleAndDescription = (
    <div
      style={{
        textAlign: 'center',
        width: '80%',
        margin: 'auto',

        padding: '1rem',
      }}
    >
      <p>{product.name}</p>
      <h3>৳{product.price.regular}</h3>
    </div>
  );
  return (
    <Article>
      <Card
        bodyStyle={{ maxWidth: 300 }}
        onClick={cardOnClick}
        hoverable
        cover={
          <LazyLoad height={200} offset={100}>
            <img
              alt="example"
              src={`${process.env.REACT_APP_DOMAIN.concat(
                product?.cover?.medium
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
      </Card>
    </Article>
  );
};

const Article = styled.article`
  margin: 10px;
  max-width: 300px;
  word-break: break-all;
  margin: 1rem;
`;

export default CardComponent;
