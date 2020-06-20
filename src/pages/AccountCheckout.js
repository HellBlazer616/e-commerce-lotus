/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from '@emotion/styled';
import NavComponent from '../components/NavComponent';
import SmallCardItem from '../components/SmallCardItem';
import OrderDetailsInfo from '../components/OrderDetailsInfo';
import OrderDetailsTable from '../components/OrderDetailsTable';
import AccountNav from '../components/AccountNav';

const AccountCheckout = () => {
  return (
    <Wrapper>
      <NavComponent />
      <Main>
        <AccountNav />
        <div className="order">
          <section className="order__list">
            <h2 style={{ marginLeft: '1rem' }}>My Orders</h2>
            <hr />
            <SmallCardItem />
            <SmallCardItem />
            <SmallCardItem />
          </section>
          <section className="order__details">
            <h2 style={{ margin: '1rem rem' }}>Order Details</h2>
            <hr />
            <OrderDetailsInfo />
            <OrderDetailsTable />
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
