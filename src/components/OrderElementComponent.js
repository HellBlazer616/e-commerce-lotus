import React from 'react';
import styled from '@emotion/styled';
import { CloseCircleTwoTone, DeleteTwoTone } from '@ant-design/icons';

import { Input, Button } from 'antd';
import { grey } from '../utils/Colors';

const OrderElementComponent = () => {
  return (
    <OrderElement>
      <div className="order__button">
        <Button shape="circle" size="small" aria-valuetext="increase">
          +
        </Button>
        <Button
          shape="circle"
          size="small"
          style={{ border: 'none' }}
          color="#2f2f2f"
        >
          20
        </Button>
        <Button shape="circle" size="small" aria-valuetext="decrease">
          -
        </Button>
      </div>
      <div className="order__image">
        <img src="https://picsum.photos/500/500" alt="order" />
      </div>
      <div className="order__info">
        <span>
          <h3>
            Ginger Indian[Net Weight +10gm] (আদা)/250 gm/>Ginger Indian[Net
            Weight +10gm] (আদা)/250 gm/
          </h3>
          <h3>
            <s>$50</s> <strong>$40</strong>
          </h3>
        </span>
      </div>
      <div className="order__price">
        {/* <h3>
          <s>$50</s> <strong>$40</strong>
        </h3> */}

        {/* <Input
          addonBefore="Quantity"
          type="number"
          id="quantity"
          value={60}
          // onChange={handleQuantity}
          min="1"
          step="0.5"
        /> */}
        <h3>
          <strong>$3000</strong>
        </h3>
      </div>
      <div className="order__close">
        <button type="button">
          <i>
            <CloseCircleTwoTone twoToneColor="#f5222d" />
          </i>
        </button>
      </div>
    </OrderElement>
  );
};

const OrderElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #dadce0;
  margin-bottom: 1rem;
  flex-basis: 100%;
  font-size: 16px;

  h3 {
    font-size: inherit;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 400px) {
    /* flex-direction: column; */
    font-size: 9px;
  }

  & .order__button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* flex-basis: 5%; */
    padding: 10px;
  }

  & .order__image {
    flex-basis: 10%;
    margin: auto;

    img {
      width: 50px;
      height: 50px;
    }
  }
  & .order__info {
    display: flex;
    flex-direction: column;
    /* flex-basis: 50%; */
    padding: 10px;
    flex-grow: 5;
    justify-content: center;
  }

  & .order__price {
    /* flex-basis: 20%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    flex-grow: 2;
  }

  & .order__close {
    /* flex-basis: 10%; */
    align-self: flex-start;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
      outline-color: #f5222d;

      & :hover {
        transform: scale3d(1, 1, 2);
      }
    }
    i {
      font-size: 15px;
    }
  }
`;

export default OrderElementComponent;
