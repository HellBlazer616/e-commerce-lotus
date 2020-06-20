import React from 'react';
import styled from '@emotion/styled';

const SmallCardItem = () => {
  return (
    <Article>
      <span className="order__list__item__head">
        <h3 className="order__list__item--tag">Order#1</h3>
        <div className="order__list__item--info">
          <h3>Order on the way</h3>
        </div>
      </span>
      <hr />
      <div className="order__list__item__body">
        <span>
          <h3>Order Date</h3> <h3>7th April 2019</h3>
        </span>
        <span>
          <h3>Delivery TIme</h3> <h3>13th April</h3>
        </span>
        <span>
          <h3>Total Price</h3> <h3>$339</h3>
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

export default SmallCardItem;
