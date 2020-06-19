/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from '@reach/router';
import { Card } from 'antd';
import styled from '@emotion/styled';
import NavComponent from '../components/NavComponent';
import AsideMenuComponent from '../components/AsideMenuComponent';

const CategoryShowcase = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const params = useParams();

  const handleCardClick = (e) => {
    console.log(e.target.dataset.key);
  };

  useEffect(() => {
    async function getProduct() {
      await fetch(`/api/category/${params.categoryId}`, {
        method: 'GET',
      }).then(async (response) => {
        const res = await response.json();

        if (res._id) {
          console.log('fetched');
          const sub = [...res.subCategory];
          setSubCategories(sub);
        }
      });
    }

    getProduct();
  }, [params.categoryId]);

  return (
    <Wrapper>
      <NavComponent />
      <main className="content">
        <AsideMenuComponent />
        <article className="content__category">
          {subCategories.map((subCategory) => {
            return (
              <Link key={subCategory._id} to={`/category/${subCategory._id}`}>
                <Card
                  style={{ margin: '1rem', width: 200, height: 310 }}
                  hoverable
                  onClick={handleCardClick}
                  data-key={subCategory._id}
                  cover={
                    <img
                      alt="sub category"
                      src={`${process.env.REACT_APP_DOMAIN.concat(
                        subCategory?.cover?.thumbnail
                      )}`}
                    />
                  }
                >
                  <article style={{ height: 100, textAlign: 'center' }}>
                    <h3>{subCategory.name}</h3>
                    <p>{subCategory.description}</p>
                  </article>
                </Card>
              </Link>
            );
          })}
        </article>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eee;
  display: flex;
  flex-direction: column;

  & .content {
    display: flex;
    justify-content: space-between;

    & .content__category {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-basis: 100%;
    }
  }
`;

export default CategoryShowcase;
