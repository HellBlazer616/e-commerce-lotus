/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import NavComponent from '../components/NavComponent';
import WishListTable from '../components/WishListTable';
import AccountNav from '../components/AccountNav';

const AccountWishList = () => {
  return (
    <Wrapper>
      <NavComponent />
      <Main>
        <AccountNav />
        <div className="order">
          <section className="order__details">
            <h2 style={{ margin: '1rem rem' }}>User's WishList</h2>
            <hr />
            {/* table here */}
            <WishListTable />
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

export default AccountWishList;
