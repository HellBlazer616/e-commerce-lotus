import React from 'react';
import { Carousel } from 'antd';
import styled from '@emotion/styled';
import img from '../utils/assets/background.jpg';

const CarouselComponent = () => {
  return (
    <Section>
      {/* <Carousel autoplay infinite> */}
      <div className="pic">
        {/* <img src="https://picsum.photos/1920/840" alt="carousel pic" /> */}
      </div>
      {/* </Carousel> */}
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 10px;

  & .pic {
    background-image: url(${img});
    width: 100%;
    min-height: 100vh;
    display: flex;

    align-items: center;
    background-color: rgb(247, 247, 247);
    background-size: cover;
    overflow: hidden;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
  & .ant-carousel {
    width: 100%;
    height: auto;

    & img {
      width: 100%;
      min-height: 600px;
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
