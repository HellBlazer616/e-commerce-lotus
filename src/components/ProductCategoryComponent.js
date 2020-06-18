import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import vegetable from '../utils/assets/vegetable.svg';
import vegetable2 from '../utils/assets/vegetable2.svg';
import beverage from '../utils/assets/beverage.svg';
import cooking from '../utils/assets/cooking.svg';
import meat from '../utils/assets/meat.svg';
import fish from '../utils/assets/fish.svg';

const ProductCategoryComponent = ({ category }) => {
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
          {category.map((value) => {
            return (
              <StyledLink to={`/category/${value._id}`}>
                <img src={vegetable} alt="" />
                <h3>{value.name}</h3>
              </StyledLink>
            );
          })}
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

  

  @media (max-width: 927px) {
    section {
      flex-direction: column;
      flex-basis: 80%;
      margin: auto;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-basis: 20%;
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
  margin: 3rem;
  border: none;
  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default ProductCategoryComponent;
