import React from 'react';
import { Card, Tooltip, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;
const CardComponent = () => {
  const cardOnClick = (e) => console.log(e.target.dataset.key);
  return (
    <div style={{ margin: '10px' }}>
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <Tooltip title="Add to cart" placement="bottom">
            <Button
              type="primary"
              shape="circle"
              icon={
                <ShoppingCartOutlined
                  data-key="cart"
                  style={{ fontSize: '25px', margin: 'auto' }}
                />
              }
              size="large"
              hoverable
              onClick={cardOnClick}
            />
          </Tooltip>,
        ]}
        hoverable
        onClick={cardOnClick}
      >
        <Meta title="Product Title" description="Price: $50" />
      </Card>
    </div>
  );
};

export default CardComponent;
