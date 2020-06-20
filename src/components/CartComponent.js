import React from 'react';
import { Drawer, Button } from 'antd';
import styled from '@emotion/styled';
import { navigate, Link } from '@reach/router';
import OrderComponent from './OrderComponent';
import useWindowDimension from '../utils/customHooks/useWindowDimension';

const CartComponent = ({ visible, onClose }) => {
  const redirectCart = () => {
    navigate('/cart');
  };

  const { width } = useWindowDimension();

  return (
    <StyledDrawer
      title="Your Orders"
      placement="right"
      closable
      onClose={onClose}
      visible={visible}
      width={width < 800 ? '100vw' : 650}
      headerStyle={{ textAlign: 'center', marginTop: '1rem' }}
    >
      <OrderComponent />
      <OrderComponent />
      <OrderComponent />
      <OrderComponent />
      <OrderComponent />
      <section className="cart__bottom">
        <div className="order__checkout">
          <span>
            <h3 style={{ fontWeight: 400 }}>Sub Total</h3>
            <h3>$500</h3>
          </span>
          <span>
            <h3 style={{ fontWeight: 400 }}>Delivery Price</h3>
            <h3>$50</h3>
          </span>
          <span>
            <h3 style={{ fontWeight: 400 }}> Total</h3>
            <h3>$550</h3>
          </span>
        </div>
        <div className="order__buttons">
          <Button size="large" type="primary" onClick={redirectCart}>
            View Cart
          </Button>
          <Button size="large" type="primary" danger>
            <Link to="/account/user/checkout"> Checkout</Link>
          </Button>
        </div>
      </section>
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
  & .cart__bottom {
    display: flex;
    flex-direction: column;
  }

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
    flex-direction: column;
    align-self: flex-end;
    padding: 10px;
    margin-bottom: 2rem;
    span {
      display: flex;
      justify-content: space-between;
      h3:nth-of-type(1) {
        margin-right: 4rem;
      }
    }
    h2 {
      color: #fff;
    }
  }
`;

export default CartComponent;
