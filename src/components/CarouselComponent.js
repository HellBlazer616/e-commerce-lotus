import React from 'react';
import { Carousel } from 'antd';
import styled from '@emotion/styled';

const CarouselComponent = () => {
  return (
    <Section>
      <Carousel autoplay infinite>
        <div>
          <img src="https://picsum.photos/1920/500" alt="carousel pic" />
        </div>
        <div>
          <img src="https://picsum.photos/1920/500" alt="carousel pic" />
        </div>
        <div>
          <img src="https://picsum.photos/1920/500" alt="carousel pic" />
        </div>
        <div>
          <img src="https://picsum.photos/1920/500" alt="carousel pic" />
        </div>
      </Carousel>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 10px;
  & .ant-carousel {
    width: 100%;
    height: auto;

    & img {
      width: 100%;
    }

    & .slick-slide {
      height: auto;
      /* padding: 10px; */
      background: transparent;
      overflow: hidden;
      h3 {
        color: #fff;
      }
    }
  }
`;

export default CarouselComponent;
