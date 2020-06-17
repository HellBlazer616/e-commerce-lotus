import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { BackTop, Result, Skeleton } from 'antd';
import { useParams } from '@reach/router';
import AsideMenuComponent from '../components/AsideMenuComponent';
import NavComponent from '../components/NavComponent';
import CardComponent from '../components/CardComponent';
import { CartOpenContext } from '../CartOpenContext';

const Product = () => {
  const { visible, setVisible } = useContext(CartOpenContext);
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProduct() {
      if (localStorage.getItem(`${params.productId}`)) {
        const data = JSON.parse(localStorage.getItem(`${params.productId}`));
        setProducts(data);
        console.log('not fetched');
        return;
      }
      setLoading(true);
      await fetch(`/api/category/${params.productId}/product`, {
        method: 'GET',
      }).then(async (response) => {
        const res = await response.json();
        if (res.data) {
          console.log('fetched');
          setProducts(res.data);
          localStorage.setItem(`${params.productId}`, JSON.stringify(res.data));
        }
      });
    }

    getProduct();
    setLoading(false);
  }, [params.productId]);

  return (
    <Wrapper>
      <NavComponent visible={visible} setVisible={setVisible} />
      <Content>
        <AsideMenuComponent />
        <Row>
          <section className="head">
            <article className="head__banner">
              <h1>Banner</h1>
            </article>
            <article className="head__category">
              <h1 style={{ textAlign: 'center' }}>
                {products.length >= 1 && products[1].categoryName
                  ? products[1].categoryName[0]
                  : 'NO CATEGORY'}
              </h1>
            </article>
          </section>

          <section className="products">
            {/* eslint-disable-next-line no-nested-ternary */}
            {products.length === 0 ? (
              loading ? (
                <Skeleton />
              ) : (
                <Result
                  status="404"
                  title="404"
                  subTitle="Sorry, we are out of stock. Please check back soon!! 😊😊😊 "
                />
              )
            ) : (
              products.map((product) => {
                return <CardComponent key={product._id} product={product} />;
              })
            )}
          </section>
        </Row>
      </Content>

      <BackTop />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Row = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;

  & .head {
  }
  & .products {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default Product;
