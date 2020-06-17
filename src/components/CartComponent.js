import React from 'react';
import { Drawer, Button } from 'antd';
import styled from '@emotion/styled';
import { navigate } from '@reach/router';
import OrderComponent from './OrderComponent';

const CartComponent = ({ visible, onClose }) => {
  const redirectCart = () => {
    navigate('/cart');
  };

  return (
    <div>
      <StyledDrawer
        title="Place your order"
        placement="right"
        closable
        onClose={onClose}
        visible={visible}
        width={window.innerWidth < 800 ? 300 : 650}
      >
        <OrderComponent />
        <OrderComponent />
        <OrderComponent />
        <OrderComponent />
        <OrderComponent />
        <div className="order__price">
          <h2>
            <i>SubTotal: $10000</i>
          </h2>
        </div>
        <div className="order__buttons">
          <Button size="large" type="primary" onClick={redirectCart}>
            View Cart
          </Button>
          <Button size="large" type="primary" danger>
            Checkout
          </Button>
        </div>
      </StyledDrawer>
    </div>
  );
};

const StyledDrawer = styled(Drawer)`
  & .order__close {
    margin: 10px;
    align-self: flex-end;
  }

  & .order__buttons {
    display: flex;
    justify-content: space-around;
    flex-basis: 100%;
    margin-bottom: 3rem;
  }
  & .order__price {
    display: flex;
    align-self: flex-end;
    margin: 1rem 4rem;
    background: #2f2f2f;
    padding: 10px;
    h2 {
      color: #fff;
    }
  }
`;

export default CartComponent;
