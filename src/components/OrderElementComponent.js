import React from 'react';
import styled from '@emotion/styled';
import { CloseCircleOutlined, DeleteTwoTone } from '@ant-design/icons';

import { Input } from 'antd';
import { grey } from '../utils/Colors';

const OrderElementComponent = () => {
  return (
    <OrderElement>
      <div className="order__image">
        <img src="https://picsum.photos/500/500" alt="order" />
      </div>
      <div className="order__info">
        <h3>The Name of the Product</h3>
        <h3>
          <i>Default Quantity</i>
        </h3>

        <Input
          addonBefore="Quantity"
          type="number"
          id="quantity"
          value={60}
          // onChange={handleQuantity}
          min="1"
        />
        <h3>
          <strong>Total: 60 x $50 = $3000</strong>
        </h3>
      </div>
      <div className="order__close">
        <button type="button">
          <i>
            <DeleteTwoTone twoToneColor="#f5222d" />
          </i>
        </button>
      </div>
    </OrderElement>
  );
};

const OrderElement = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #dadce0;
  margin-bottom: 1rem;
  flex-basis: 100%;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
  & .order__image {
    flex-basis: 30%;
    align-self: center;

    @media only screen and (max-width: 1024px) {
      align-self: flex-start;
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }
  & .order__info {
    display: flex;
    flex-direction: column;
    flex-basis: 60%;
  }

  & .order__close {
    flex-basis: 10%;
    button {
      border: 1px solid #f5222d;
      background: transparent;
      cursor: pointer;
      outline-color: #f5222d;

      & :hover {
        transform: scale3d(1, 1, 2);
      }
    }
    i {
      font-size: 30px;
    }
  }
`;

export default OrderElementComponent;
