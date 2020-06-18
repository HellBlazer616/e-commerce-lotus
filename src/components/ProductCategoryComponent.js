/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import vegetable from '../utils/assets/vegetable.svg';
// import vegetable2 from '../utils/assets/vegetable2.svg';
// import beverage from '../utils/assets/beverage.svg';
// import cooking from '../utils/assets/cooking.svg';
// import meat from '../utils/assets/meat.svg';
// import fish from '../utils/assets/fish.svg';

const ProductCategoryComponent = ({ category }) => {
  return (
    <div>
      <Row>
        <section className="heading">
          <article>
            <i>Our Products</i>
            <p style={{ margin: '5rem auto', width: '80%' }}>
              Muffin cotton candy I love muffin cupcake muffin gingerbread
              chocolate cake. Sweet I love macaroon pie icing. Sesame snaps
              tiramisu chocolate. Dragée chocolate bar sugar plum liquorice
              brownie lemon drops pie I love. Muffin caramels croissant I love
              sweet roll. Cotton candy candy donut icing tart macaroon apple
              pie. Marshmallow gummies liquorice. Gummi bears sugar plum cookie
              dragée I love. Donut topping chupa chups chocolate.
            </p>
          </article>
        </section>
        <section className="category">
          {category.map((value) => {
            return (
              <StyledLink
                className="category__item"
                to={`/category/${value._id}`}
              >
                <img src={value.cover.thumbnail} alt={`${value.name} pic`} />
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
    flex-basis: 70%;
    justify-self: center;
    margin: 5rem auto;
    i {
      font-size: calc(32px + 1vw);
    }
  }

  & .category {
    flex-basis: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    & .category__item {
      /*  */
    }
  }

  @media (max-width: 927px) {
    & .category {
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
  border-radius: 20px;
  padding: 1rem;

  & img {
    width: 120px;
    height: auto;
    flex-basis: 100%;
  }
  color: #000;
  text-decoration: none;
  margin: 3rem;
  border: none;

  h3 {
    margin-top: 1rem;
  }

  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default ProductCategoryComponent;
