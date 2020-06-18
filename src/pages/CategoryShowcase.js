import React, { useState, useEffect } from 'react';
import { useParams, Link } from '@reach/router';
import { Card } from 'antd';
import Column from 'antd/lib/table/Column';
import NavComponent from '../components/NavComponent';
import AsideMenuComponent from '../components/AsideMenuComponent';

const { Meta } = Card;

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
    <main
      style={{
        minHeight: '100vh',
        background: '#eee',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavComponent />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <AsideMenuComponent />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexBasis: '100%',
          }}
        >
          {subCategories.map((subCategory) => {
            return (
              <Link to={`/category/${subCategory._id}`}>
                <Card
                  style={{ margin: '1rem', width: 200, height: 310 }}
                  key={subCategory._id}
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
        </div>
      </div>
    </main>
  );
};

export default CategoryShowcase;
