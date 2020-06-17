import React from 'react';
import styled from '@emotion/styled';
import { Carousel } from 'antd';

const BannerCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'resize',
    autoplay: true,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Carousel {...settings}>
        <div type="button">
          <img src="https://picsum.photos/800/200" alt="carousel pic" />
        </div>

        <div type="button">
          <img src="https://picsum.photos/800/200" alt="carousel pic" />
        </div>

        <div type="button">
          <img src="https://picsum.photos/800/200" alt="carousel pic" />
        </div>

        <div type="button">
          <img src="https://picsum.photos/800/200" alt="carousel pic" />
        </div>

        <div type="button">
          <img src="https://picsum.photos/800/200" alt="carousel pic" />
        </div>

        <div type="button">
          <img src="https://picsum.photos/800/200" alt="carousel pic" />
        </div>

        <div type="button">
          <img src="https://picsum.photos/800/200" alt="carousel pic" />
        </div>

        <div type="button">
          <img src="https://picsum.photos/800/200" alt="carousel pic" />
        </div>

        <div type="button">
          <img src="https://picsum.photos/800/200" alt="carousel pic" />
        </div>
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* & .resize {
    width: 200px;
    height: 200px;
    overflow: hidden;
  } */
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: calc(16px + 1vw);
  }
  width: 100%;
  div {
    margin: auto;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
  }

  img {
    margin: auto;
  }
`;

export default BannerCarousel;
