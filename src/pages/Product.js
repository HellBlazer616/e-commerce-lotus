import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { BackTop } from 'antd';
import AsideMenuComponent from '../components/AsideMenuComponent';
import NavComponent from '../components/NavComponent';
import CardComponent from '../components/CardComponent';
import { CartOpenContext } from '../CartOpenContext';

const Product = () => {
  const { visible, setVisible } = useContext(CartOpenContext);

  return (
    <Wrapper>
      <NavComponent visible={visible} setVisible={setVisible} />
      <Content>
        <AsideMenuComponent />
        <Row>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
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
  display: grid;
  grid-template-columns: 1fr auto;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  flex-wrap: wrap;
`;

export default Product;
