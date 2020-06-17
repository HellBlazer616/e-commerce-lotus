import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { BackTop } from 'antd';
import { useParams } from '@reach/router';
import AsideMenuComponent from '../components/AsideMenuComponent';
import NavComponent from '../components/NavComponent';
import CardComponent from '../components/CardComponent';
import { CartOpenContext } from '../CartOpenContext';

const Product = () => {
  const { visible, setVisible } = useContext(CartOpenContext);
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      if (localStorage.getItem(`${params.productId}`)) {
        const data = JSON.parse(localStorage.getItem(`${params.productId}`));
        setProducts(data);
        console.log('not fetched');
        return;
      }
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
  }, [params.productId]);

  return (
    <Wrapper>
      <NavComponent visible={visible} setVisible={setVisible} />
      <Content>
        <AsideMenuComponent />
        <Row>
          {products.map((product) => {
            return <CardComponent key={product._id} product={product} />;
          })}
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
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  flex-wrap: wrap;
`;

export default Product;
