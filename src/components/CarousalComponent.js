import React from 'react';
import { Carousel } from 'antd';
import styled from '@emotion/styled';

const CarousalComponent = () => {
  return (
    <Carousel autoplay>
      <CarouselDiv>
        <h3>1</h3>
      </CarouselDiv>
      <CarouselDiv>
        <h3>2</h3>
      </CarouselDiv>
      <CarouselDiv>
        <h3>3</h3>
      </CarouselDiv>
      <CarouselDiv>
        <h3>4</h3>
      </CarouselDiv>
    </Carousel>
  );
};

const CarouselDiv = styled.div`
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;

  h3 {
    color: #fff;
  }
`;

export default CarousalComponent;
