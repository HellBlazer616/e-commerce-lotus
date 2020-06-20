import React from 'react';
import styled from '@emotion/styled';

const OrderDetailsInfo = () => {
  return (
    <OrderDetailsAddress>
      <span>
        <h2>Delivery Address</h2>
        <h3>1st Floor, House 149, Road 22, Somewhere SomePlace, Some City</h3>
      </span>
      <div className="order__details__price">
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
      </div>
    </OrderDetailsAddress>
  );
};

const OrderDetailsAddress = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  flex-wrap: wrap;
  word-break: break-all;

  & .order__details__price {
    display: flex;
    flex-direction: column;
    span {
      display: flex;
      justify-content: space-between;
      h3 {
      }
    }
  }
`;

export default OrderDetailsInfo;
