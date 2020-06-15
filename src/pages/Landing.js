import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import CarouselComponent from '../components/CarouselComponent';
import NavComponent from '../components/NavComponent';
import ProductCategoryComponent from '../components/ProductCategoryComponent';
import { CartOpenContext } from '../CartOpenContext';

const Landing = () => {
  const { visible, setVisible } = useContext(CartOpenContext);

  const { Footer } = Layout;

  return (
    <Wrapper>
      <NavComponent visible={visible} setVisible={setVisible} />
      <CarouselComponent />
      <ProductCategoryComponent />
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2020 Created by Ant UED
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;
`;

export default Landing;
