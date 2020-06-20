/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import NavComponent from '../components/NavComponent';
import OrderDetailsMethod from '../components/OrderDetailsMethod';
import OrderDetailsInfo from '../components/OrderDetailsInfo';
import OrderDetailsTable from '../components/OrderDetailsTable';
import AccountNav from '../components/AccountNav';
import { DeliveryContext } from '../context/DeliveryContext';
import HigherOrderDeliveryCard from '../components/HigherOrderDeliveryCard';

const AccountCheckout = () => {
  const { delivery } = useContext(DeliveryContext);
  const [deliveryMethod, setDeliveryMethod] = useState('');

  return (
    <Wrapper>
      <NavComponent />
      <Main>
        <AccountNav />
        <div className="order">
          <section className="order__list">
            <h2 style={{ marginLeft: '1rem' }}>Drop Location</h2>
            <hr />

            {delivery.map((value, index) => {
              return (
                <HigherOrderDeliveryCard
                  key={value._id}
                  value={value}
                  setDeliveryMethod={setDeliveryMethod}
                  deliveryMethod={deliveryMethod}
                  index={index}
                />
              );
            })}
          </section>
          <section className="order__details">
            <h2 style={{ margin: '1rem rem' }}>Order Details</h2>
            <hr />
            <OrderDetailsInfo />
            {/* <OrderDetailsMethod /> */}
            {deliveryMethod !== '' ? (
              <h2 style={{ margin: '1rem 0' }}>
                Delivery Method #{deliveryMethod + 1}
              </h2>
            ) : (
              <h2 style={{ margin: '1rem 0' }}>Choose A Delivery Method </h2>
            )}
            {/* table here */}
            <OrderDetailsTable />
            <Button
              size="large"
              type="primary"
              style={{ marginTop: '1rem' }}
              block
            >
              Submit Order
            </Button>
          </section>
        </div>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f6f6f6;

  hr {
    border: 1px solid #d8e6f5;
    width: 100%;
  }

  @media screen and (max-width: 342px) {
    word-break: break-all;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media screen and (max-width: 620px) {
  }
  & .order {
    flex-grow: 1;
    display: flex;
    padding: 0 1rem;
    flex-wrap: wrap;

    & .order__list {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
    }

    & .order__details {
      flex-grow: 10;
      margin: 0 2rem;

      & .order__details__steps {
        width: 60%;
        margin: 2rem auto;
      }
    }
  }
`;

export default AccountCheckout;
