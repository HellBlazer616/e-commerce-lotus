/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

const HigherOrderDeliveryCard = ({
  value,
  index,
  setDeliveryMethod,
  deliveryMethod,
}) => {
  const chargeLimit = Object.keys(value.charge);
  const charge = Object.values(value.charge);

  const handleClick = () => {
    setDeliveryMethod(index);
  };
  return (
    <Article
      onClick={handleClick}
      onKeyDown={handleClick}
      style={{
        border: `${deliveryMethod === index ? '2px solid #52c41a' : 'none'}`,
      }}
      selected={`${deliveryMethod === index}`}
    >
      <span className="order__list__item__head">
        <h3 className="order__list__item--tag">Delivery Method #{index + 1}</h3>
        <div className="order__list__item--info">
          <h3>{value.pickUpLocation}</h3>
        </div>
      </span>
      <hr />
      <div className="order__list__item__body">
        <span>
          <h3>Location </h3>
          <h3 style={{ textAlign: 'right' }}>{value.name}</h3>
        </span>
        <span>
          <h3>Covered Cities </h3>
          <h3 style={{ textAlign: 'right' }}>
            {value.city.map((cityName) => {
              return `${cityName}, `;
            })}
          </h3>
        </span>
        <span>
          <h3>Delivery Time </h3>
          <h3>{value.time}</h3>
        </span>
        <span>
          <h3>Charge </h3>
          <h3>{JSON.stringify(chargeLimit)}</h3>
          <h3>{JSON.stringify(charge)}</h3>
        </span>
      </div>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  max-width: 350px;
  cursor: pointer;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  :hover {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

  :active {
    outline: 2px solid #52c41a;
  }

  & .order__list__item--tag {
  }
  & .order__list__item--info {
    h3 {
      color: #52c41a;
    }
  }

  margin: 1rem 0;
  padding: 1rem;
  background: #dff4f3;

  & .order__list__item__head {
    display: flex;
    justify-content: space-between;
  }

  & .order__list__item__body {
    span {
      display: flex;
      justify-content: space-between;
    }
  }
`;
export default HigherOrderDeliveryCard;
