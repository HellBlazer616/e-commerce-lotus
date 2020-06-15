import React from 'react';
import { useParams } from '@reach/router';
import styled from '@emotion/styled';
import { Button } from 'antd';
import NavComponent from '../components/NavComponent';
import ProductShowcaseCarousel from '../components/ProductShowcaseCarousel';
import FooterComponent from '../components/FooterComponent';

const ProductShowcase = () => {
  const params = useParams();
  return (
    <Wrapper>
      <NavComponent />
      {/* <p>Product Showcase {params.productId}</p> */}
      <div className="product">
        <div className="product__image">
          <img src="https://picsum.photos/500/500" alt="carousel pic" />
        </div>
        <div className="product__info">
          <div className="product__info__upper">
            <h1>Title</h1>
            <h3>Price: $250</h3>
            <p>
              <strong>Category: </strong>Name of the category
            </p>
            <p>
              <strong>Description: </strong>Topping tiramisu sweet roll
              gingerbread tootsie roll bear claw candy canes chupa chups
              macaroon. Topping gummi bears toffee tootsie roll. Gummi bears
              chocolate bar pastry.
            </p>
          </div>
          <div className="product__info__lower">
            <Button size="large" type="primary">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <ProductShowcaseCarousel />
      <FooterComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;
  & .product {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 3rem 0;

    @media only screen and (max-width: 767px) {
      margin: 0;
    }

    & .product__image {
      justify-content: center;
      @media only screen and (max-width: 767px) {
        flex-basis: 70%;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
    & .product__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-basis: 30%;

      @media only screen and (max-width: 767px) {
        flex-basis: 100%;
        margin: 1rem;
      }

      & .product__info__upper {
        flex-basis: 100%;
      }
      & .product__info__lower {
        /*  */
      }
    }
  }
`;

export default ProductShowcase;
