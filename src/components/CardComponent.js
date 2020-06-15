import React from 'react';
import { Card, Tooltip, Button } from 'antd';
import {
  ShoppingCartOutlined,
  EyeOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { navigate } from '@reach/router';

const { Meta } = Card;
const CardComponent = () => {
  const cardOnClick = (e) => {
    console.log(e.target.dataset.key);
    if (e.target.dataset.key === 'show')
      navigate('/product/showcase/idOfTheProduct');
  };
  return (
    <div style={{ margin: '10px' }}>
      <Card
        onClick={cardOnClick}
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
              hoverable
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
              hoverable
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
              hoverable
              danger
            />
          </Tooltip>,
        ]}
        hoverable
      >
        <Meta title="Product Title" description="Price: $50" />
      </Card>
    </div>
  );
};

export default CardComponent;
