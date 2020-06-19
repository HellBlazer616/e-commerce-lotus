import React from 'react';
import { Drawer, Button } from 'antd';
import styled from '@emotion/styled';
import { navigate } from '@reach/router';
import OrderComponent from './OrderComponent';
import useWindowDimension from '../utils/customHooks/useWindowDimension';

const CartComponent = ({ visible, onClose }) => {
  const redirectCart = () => {
    navigate('/cart');
  };

  const { width } = useWindowDimension();

  return (
    <StyledDrawer
      title="Place your order"
      placement="right"
      closable
      onClose={onClose}
      visible={visible}
      width={width < 800 ? '100vw' : 650}
    >
      <OrderComponent />
      <OrderComponent />
      <OrderComponent />
      <OrderComponent />
      <OrderComponent />
      <div className="order__checkout">
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
  );
};

const StyledDrawer = styled(Drawer)`
  /* div:nth-of-type(2) {
    width: 650px;
    @media (max-width: 800px) {
      width: 100vw;
    }
  }

  .ant-drawer-content-wrapper {
    width: 650px;
    @media (max-width: 800px) {
      width: 100vw;
    }
  } */

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
  & .order__checkout {
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
