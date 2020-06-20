import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { navigate } from '@reach/router';
import OrderComponent from '../components/OrderComponent';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import InfoDrawerComponent from '../components/InfoDrawerComponent';
import HorizontalCardComponent from '../components/HorizontalCardComponent';

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

          <section className="bottom">
            <div className="order__buttons">
              <Button size="large" type="primary" onClick={redirectToProduct}>
                Continue Shopping
              </Button>
              <Button
                size="large"
                type="primary"
                style={{ minWidth: 160 }}
                danger
              >
                Checkout
              </Button>
              <Button size="large" type="primary" onClick={showInfoCart}>
                Delivery Information
              </Button>
              <InfoDrawerComponent onClose={showInfoCart} visible={visible} />
            </div>
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
          </section>
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
    padding: 1rem;

    background: #fff;

    h1 {
      text-align: center;
    }

    & .bottom {
      display: flex;
      flex-direction: column-reverse;
    }

    & .order__button {
      order: 1;
    }

    & .order__buttons {
      display: flex;
      justify-content: center;
      flex-basis: 100%;
      margin-bottom: 3rem;

      button {
        margin: 1rem;
      }

      @media only screen and (max-width: 900px) {
        flex-direction: column;
      }
    }

    & .order__image {
      order: 2;
      padding: 1rem;
      img {
        width: 150px;
        height: auto;
        border-radius: 0%;
      }
    }
    & .order__info {
      order: 3;
      display: flex;
      justify-content: space-around;
      margin-top: 1rem;
      input {
        width: 25%;
      }
    }
    & .order__price {
      order: 4;
      /* display: flex;
      align-self: flex-end;
      margin: 1rem 4rem;
   
      padding: 10px; */
    }

    & .order__close {
      /* margin: auto; */
      order: 5;
      button {
        background: transparent;
        cursor: pointer;
        outline-color: #f5222d;
      }
      i {
        font-size: 30px;
      }
    }

    & .order__checkout {
      order: 6;
      padding: 10px;
      display: flex;
      align-self: flex-end;
      flex-direction: column;
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

    & .order {
      @media (max-width: 790px) {
        flex-direction: column;
        & .order__button {
          order: 3;
          flex-direction: row;
          button {
            min-height: 50px;
            min-width: 50px;
          }
        }
        & .order__image {
          order: 2;
          img {
            width: 100%;
            height: auto;
            border-radius: 0%;
          }
        }
        & .order__info {
          padding: 1rem;
        }
        & .order__price {
          text-align: center;
        }
        & .order__close {
          order: 1;
          align-self: flex-end;
        }
        & .order__checkout {
        }
      }
    }
  }
`;

export default ShowCart;
