import React from 'react';
import { useParams } from '@reach/router';
import styled from '@emotion/styled';
import { Button } from 'antd';
import NavComponent from '../components/NavComponent';

const ProductShowcase = () => {
  const params = useParams();
  return (
    <Wrapper>
      <NavComponent />
      <p>Product Showcase {params.productId}</p>
      <div className="product">
        <div className="product__image">
          <img src="https://picsum.photos/500/500" alt="carousel pic" />
        </div>
        <div className="product__info">
          <h1>Title</h1>
          <h3>$250</h3>
          <p>
            <strong>Category: </strong>Name of the category
          </p>
          <p>
            <strong>Description: </strong>Topping tiramisu sweet roll
            gingerbread tootsie roll bear claw candy canes chupa chups macaroon.
            Topping gummi bears toffee tootsie roll. Gummi bears chocolate bar
            pastry.
          </p>
          <Button type="primary">Add to cart</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;

  & .product {
    display: flex;
    justify-content: space-between;

    & .product__image {
      margin: 1rem;
    }
    & .product__info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      margin: 1rem;
    }
  }
`;

export default ProductShowcase;
