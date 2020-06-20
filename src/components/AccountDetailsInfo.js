import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const AccountDetailsInfo = () => {
  return (
    <AccountDetails>
      <div className="info__left">
        {/* <h1>Account Info</h1> */}
        <span>
          <h3>First Name: John</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <h3>Last Name: Doe</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <h3>Email Address: jdoe@gmail.com</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <span>
            <h3>Address: Some where, Some City, Some Country</h3>
          </span>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <h3>Phone No: 123456789</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <h3>Date Joined: 12/12/2020</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <h3>Password: ***********</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
      </div>
      <div className="info__right">
        {/* <h1>Account Info</h1> */}
        <span>
          <h3>Name: John Doe</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <h3>Email: jdoe@gmail.com</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <span>
            <h3>Address: Some where, Some City, Some Country</h3>
          </span>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <h3>Phone No: 123456789</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <h3>Date Joined: 12/12/2020</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
        <span>
          <h3>Password: ***********</h3>
          {/* <Button icon={<EditOutlined />} aria-label="Update name" /> */}
        </span>
      </div>
      {/* <div className="account__details__info">
        <span>
          <h3 style={{ marginRight: '3rem' }}>Sub Total</h3>
          <h3>$500</h3>
        </span>
        <span>
          <h3 style={{ marginRight: '3rem' }}>Discount</h3>
          <h3>$500</h3>
        </span>
        <span>
          <h3 style={{ marginRight: '3rem' }}>Delivery Fee</h3>
          <h3>$500</h3>
        </span>
        <span>
          <h3 style={{ marginRight: '3rem' }}>Total</h3>
          <h3>$500</h3>
        </span>
      </div> */}
    </AccountDetails>
  );
};

const AccountDetails = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  flex-wrap: wrap;
  word-break: break-all;

  & .info__left {
    flex-grow: 1;
    /* span {
      display: flex;
      justify-content: space-between;
    } */
  }
  & .info__right {
    flex-grow: 1;
  }
  h1 {
    font-size: calc(26px + 1vw);
  }

  /* & .account__details__info {
    border: 1px solid black;
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    section {
      display: flex;
      justify-content: space-between;
      article {
        display: flex;
      }
      h3 {
      }
    }
  } */
`;

export default AccountDetailsInfo;
