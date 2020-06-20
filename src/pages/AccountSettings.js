/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { Link } from '@reach/router';
import NavComponent from '../components/NavComponent';
import AccountDetailsInfo from '../components/AccountDetailsInfo';
import AccountNav from '../components/AccountNav';
import HigherOrderOrderCard from '../components/HigherOrderOrderCard';

const AccountSetting = () => {
  return (
    <Wrapper>
      <NavComponent />
      <Main>
        <AccountNav />
        <div className="account">
          <section className="wish__list">
            <h2 style={{ marginLeft: '1rem' }}>My WishList</h2>
            <hr />
            <HigherOrderOrderCard />
            <HigherOrderOrderCard />
            <HigherOrderOrderCard />
            <HigherOrderOrderCard />
            <HigherOrderOrderCard />
            <HigherOrderOrderCard />
            <HigherOrderOrderCard />
          </section>
          <section className="account__details">
            <h2 style={{ margin: '1rem rem' }}>Account Information</h2>
            <hr />
            <AccountDetailsInfo />
            <Button danger type="primary" style={{ marginRight: '1rem' }}>
              <Link to="/account/user/password/reset">Change Password</Link>
            </Button>
            <Button type="primary">
              <Link to="/account/user/update">Update Information</Link>
            </Button>
            <hr />
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
  & .account {
    flex-grow: 1;
    display: flex;
    padding: 0 1rem;
    flex-wrap: wrap;

    & .wish__list {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
      max-height: 70vh;
      overflow-y: auto;
    }

    & .account__details {
      flex-grow: 10;
      margin: 0 2rem;

      & .order__details__steps {
        width: 60%;
        margin: 2rem auto;
      }
    }
  }
`;

export default AccountSetting;
