import React, { useContext } from 'react';
import styled from '@emotion/styled';

import CarouselComponent from '../components/CarouselComponent';
import NavComponent from '../components/NavComponent';
import ProductCategoryComponent from '../components/ProductCategoryComponent';
import { CartOpenContext } from '../CartOpenContext';
import FooterComponent from '../components/FooterComponent';

const Landing = () => {
  const { visible, setVisible } = useContext(CartOpenContext);

  return (
    <Wrapper>
      <NavComponent visible={visible} setVisible={setVisible} />
      <CarouselComponent />
      <ProductCategoryComponent />
      <FooterComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;
`;

export default Landing;
