import React from 'react';
import styled from '@emotion/styled';

const HigherOrderOrderCard = ({ delivery }) => {
  const handleClick = (e) => {
    console.log('clicked');
  };

  return (
    <Article onClick={handleClick} onKeyDown={handleClick}>
      <span className="order__list__item__head">
        <h3 className="order__list__item--tag">Order #index</h3>
        <div className="order__list__item--info">
          <h3>Order on the way</h3>
        </div>
      </span>
      <hr />
      <div className="order__list__item__body">
        <span>
          <h3> Order Time</h3>
          <h3>7th April 2019</h3>
        </span>
        <span>
          <h3> Order Time</h3>
          <h3>13th April</h3>
        </span>
        <span>
          <h3>Total Price</h3>
          <h3>$339</h3>
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
export default HigherOrderOrderCard;
