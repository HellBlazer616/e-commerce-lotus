import React from 'react';
import styled from '@emotion/styled';
import vegetable from '../utils/assets/vegetable.svg';
import vegetable2 from '../utils/assets/vegetable2.svg';
import beverage from '../utils/assets/beverage.svg';
import cooking from '../utils/assets/cooking.svg';
import meat from '../utils/assets/meat.svg';
import fish from '../utils/assets/fish.svg';

const ProductCategoryComponent = () => {
  return (
    <div>
      <Row>
        <div className="heading">
          <i>Our Products</i>
          <p>
            Topping tiramisu sweet roll gingerbread tootsie roll bear claw candy
            canes chupa chups macaroon. Topping gummi bears toffee tootsie roll.
            Gummi bears chocolate bar pastry.
          </p>
        </div>
        <section>
          <button size="large" type="button">
            <img src={vegetable} alt="" />
            Fruits
          </button>

          <button size="large" type="button">
            <img src={vegetable2} alt="" />
            Vegetable
          </button>

          <button size="large" type="button">
            <img src={cooking} alt="" />
            Cooking
          </button>

          <button size="large" type="button">
            <img src={meat} alt="" />
            Meat
          </button>

          <button size="large" type="button">
            <img src={fish} alt="" />
            fish
          </button>

          <button
            size="large"
            type="button"
            onClick={() => console.log('Clicked')}
          >
            <img src={beverage} alt="" />
            Beverages
          </button>
        </section>
      </Row>
    </div>
  );
};

const Row = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;

  & .heading {
    flex-basis: 100%;
    i {
      font-size: calc(32px + 1vw);
    }
  }

  section {
    flex-basis: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    button {
      display: flex;
      flex-basis: 23%;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      flex-direction: column;
      align-items: center;
      & img {
        width: 120px;
        height: auto;
        flex-basis: 100%;
      }
      color: #000;
      text-decoration: none;
      margin: 1em 0;
      border: none;
      :hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }

  @media (max-width: 927px) {
    section {
      flex-direction: column;
      flex-basis: 80%;
      margin: auto;
    }
  }
`;

export default ProductCategoryComponent;
