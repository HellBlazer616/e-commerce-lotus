import React from 'react';
import styled from '@emotion/styled';
import { Carousel } from 'antd';

const BannerCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: 'resize',
    autoplay: true,
    arrows: false,
    dots: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          <img src="https://picsum.photos/200/200" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/200/200" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/200/200" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/200/200" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/200/200" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/200/200" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/200/200" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/200/200" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/200/200" alt="carousel pic" />
        </div>
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & .resize {
    width: 70vw;
    height: 200px;
    overflow: hidden;
  }

  width: 100%;
  div {
    margin: auto;
  }

  img {
    margin: auto;
    object-fit: cover;
  }
`;

export default BannerCarousel;
