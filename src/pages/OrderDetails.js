import React from 'react';
import styled from '@emotion/styled';
import { Breadcrumb } from 'antd';
import NavComponent from '../components/NavComponent';

const OrderDetails = () => {
  return (
    <Wrapper>
      <NavComponent />
      <Breadcrumb style={{ background: '#eee', margin: '2rem 1rem' }}>
        <Breadcrumb.Item>Order</Breadcrumb.Item>
        <Breadcrumb.Item>Need Help</Breadcrumb.Item>
        <Breadcrumb.Item>Your Account Settings</Breadcrumb.Item>
      </Breadcrumb>
      <p>Order Details</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eee;
`;

export default OrderDetails;
