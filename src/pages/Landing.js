import React, { useContext } from 'react';
import styled from '@emotion/styled';

import CarouselComponent from '../components/CarouselComponent';
import NavComponent from '../components/NavComponent';
import ProductCategoryComponent from '../components/ProductCategoryComponent';
import { CartOpenContext } from '../CartOpenContext';
import FooterComponent from '../components/FooterComponent';
import { CategoryContext } from '../context/CategoryContext';

const Landing = () => {
  const { visible, setVisible } = useContext(CartOpenContext);
  const { category } = useContext(CategoryContext);
  return (
    <Wrapper>
      <NavComponent visible={visible} setVisible={setVisible} />
      <CarouselComponent />
      <ProductCategoryComponent category={category} />
      <FooterComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;
`;

export default Landing;
