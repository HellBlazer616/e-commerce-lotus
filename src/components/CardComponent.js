import React from 'react';
import { Card, Tooltip, Button, message } from 'antd';
import {
  ShoppingCartOutlined,
  EyeOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { navigate } from '@reach/router';

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

  const description = <h4>Price: ৳{product.price.regular}</h4>;
  const title = (
    <div>
      <h3>{product.name}</h3>
    </div>
  );
  return (
    <div style={{ margin: '10px', maxWidth: '300px', wordBreak: 'break-all' }}>
      <Card
        bodyStyle={{ maxWidth: '260px' }}
        onClick={cardOnClick}
        hoverable
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
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
        {title}
        {description}
      </Card>
    </div>
  );
};

export default CardComponent;
