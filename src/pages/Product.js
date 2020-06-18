import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { BackTop, Result, Skeleton, Select, Radio } from 'antd';
import { useParams } from '@reach/router';
import AsideMenuComponent from '../components/AsideMenuComponent';
import NavComponent from '../components/NavComponent';
import CardComponent from '../components/CardComponent';
import { CartOpenContext } from '../CartOpenContext';
import BannerCarousel from '../components/BannerCarousel';

const { Option } = Select;

const Product = () => {
  const { visible, setVisible } = useContext(CartOpenContext);
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('added');
  const [sortOrder, setSortOrder] = useState(1);

  const sortProducts = (value) => {
    if (sort === value) return;
    console.log(value);
    setSort(value);
  };
  const changeSortOrder = (value) => {
    if (value.target.value === value) return;
    setSortOrder(value.target.value);
    console.log(value.target.value);
  };

  useEffect(() => {
    async function getProduct() {
      if (
        localStorage.getItem(
          `/api/category/${params.productId}/product?recursive=true&sort=${sort}&sortOrder=${sortOrder}`
        )
      ) {
        const data = JSON.parse(
          localStorage.getItem(
            `/api/category/${params.productId}/product?recursive=true&sort=${sort}&sortOrder=${sortOrder}`
          )
        );
        setProducts(data);
        console.log('not fetched');
        return;
      }
      setLoading(true);
      await fetch(
        `/api/category/${params.productId}/product?recursive=true&sort=${sort}&sortOrder=${sortOrder}`,
        {
          method: 'GET',
        }
      ).then(async (response) => {
        const res = await response.json();
        if (res.data) {
          console.log('fetched');
          setProducts(res.data);
          localStorage.setItem(
            `/api/category/${params.productId}/product?recursive=true&sort=${sort}&sortOrder=${sortOrder}`,
            JSON.stringify(res.data)
          );
        }
      });
    }

    getProduct();
    setLoading(false);
  }, [params.productId, sort, sortOrder]);

  return loading ? (
    <Skeleton />
  ) : (
    <Wrapper>
      <NavComponent visible={visible} setVisible={setVisible} />
      <Content>
        <AsideMenuComponent />
        <Row>
          <section className="head">
            <article className="head__banner">
              <BannerCarousel />
            </article>
            <section className="head__bottom">
              <article className="head__category">
                <h1 style={{ textAlign: 'center' }}>
                  {products.length >= 1 && products[1].categoryName
                    ? products[1].categoryName[0]
                    : 'NO CATEGORY'}
                </h1>
              </article>
              <article className="head__sort">
                <Select
                  showSearch
                  style={{ width: 200, margin: '1rem' }}
                  placeholder="Select sorting category"
                  optionFilterProp="children"
                  onChange={sortProducts}
                >
                  <Option value="added">Sort by add</Option>
                  <Option value="price">Sort by Price</Option>
                </Select>
                <Radio.Group onChange={changeSortOrder} defaultValue={1}>
                  <Radio data-key={1} value={1}>
                    Ascending
                  </Radio>
                  <Radio data-key={-1} value={-1}>
                    Descending
                  </Radio>
                </Radio.Group>
              </article>
            </section>
          </section>

          <section className="products">
            {/* eslint-disable-next-line no-nested-ternary */}
            {products.length === 0 && !loading ? (
              <Result
                status="404"
                title="404"
                subTitle="Sorry, we are out of stock. Please check back soon!! 😊😊😊 "
              />
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
  justify-content: flex-start;
`;
const Row = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 100%;
  & .head {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    & .head__banner {
      /*  */
      overflow: hidden;
      margin-bottom: 1rem;
      /* min-height: 220px; */
    }

    & .head__category {
      background: #52c41a;
      height: auto;
      margin: auto;
      width: 54%;
      text-align: center;

      padding: 1rem;

      h1 {
        color: #fff;
        margin: 0;
      }
    }

    & .head__bottom {
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
    }

    & .head__sort {
      flex-basis: 100%;
      display: flex;

      margin: 1rem;
      align-items: center;
      justify-content: space-between;
      margin: 1rem;
    }
  }

  & .products {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default Product;
