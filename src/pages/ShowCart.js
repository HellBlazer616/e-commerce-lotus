import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { navigate } from '@reach/router';
import OrderComponent from '../components/OrderComponent';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import InfoDrawerComponent from '../components/InfoDrawerComponent';

const ShowCart = () => {
  const [visible, setVisible] = useState(false);
  const showInfoCart = () => {
    setVisible(!visible);
  };
  const redirectToProduct = () => {
    navigate('product/all');
  };
  return (
    <Wrapper>
      <NavComponent />
      <div className="page__wrapper">
        <div className="order__wrapper">
          <div>
            <h1>Your Orders</h1>
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
          </div>
          <div className="order__price">
            <h2>
              <i>SubTotal: $10000</i>
            </h2>
          </div>
          <div className="order__buttons">
            <Button size="large" type="primary" onClick={redirectToProduct}>
              Continue Shopping
            </Button>
            <Button size="large" type="primary" danger>
              Checkout
            </Button>
            <Button size="large" type="primary" onClick={showInfoCart}>
              Delivery Information
            </Button>
            <InfoDrawerComponent onClose={showInfoCart} visible={visible} />
          </div>
        </div>
      </div>
      <FooterComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;

  & .order__wrapper {
    display: flex;
    flex-direction: column;
    width: 70%;
    flex-basis: 70%;
    margin: 2rem auto;

    background: #fff;

    h1 {
      text-align: center;
    }

    & .order__image {
      img {
        width: 200px;
        height: 200px;
        border-radius: 0%;
      }
    }
    & .order__info {
      display: flex;
      justify-content: space-around;
      margin-top: 1rem;
      input {
        width: 25%;
      }
    }
    & .order__close {
      margin: auto;
      button {
        border: 1px solid #f5222d;
        background: transparent;
        cursor: pointer;
        outline-color: #f5222d;
      }
      i {
        font-size: 30px;
      }
    }

    & .order__buttons {
      display: flex;
      justify-content: space-around;
      flex-basis: 100%;
      margin-bottom: 3rem;

      button {
        margin: 1rem;
      }

      @media only screen and (max-width: 767px) {
        flex-direction: column;
      }
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
  }
`;

export default ShowCart;
