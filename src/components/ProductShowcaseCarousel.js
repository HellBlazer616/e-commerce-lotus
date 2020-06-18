import React from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { Carousel, Card } from 'antd';
import { useParams } from '@reach/router';

const ProductShowcaseCarousel = () => {
  const params = useParams();
  const handleClick = () => {
    console.log('click');
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: 'resize',
    autoplay: true,
    arrows: false,
    dots: false,
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
      <h2> Similar items </h2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Carousel {...settings}>
        <button type="button" onClick={handleClick}>
          <img src="https://picsum.photos/300/300" alt="carousel pic" />
          <h1>Some Title</h1>
          <h3>Price: $50</h3>
        </button>

        <button type="button" onClick={handleClick}>
          <img src="https://picsum.photos/300/300" alt="carousel pic" />
          <h1>Some Title</h1>
          <h3>Price: $50</h3>
        </button>

        <button type="button" onClick={handleClick}>
          <img src="https://picsum.photos/300/300" alt="carousel pic" />
          <h1>Some Title</h1>
          <h3>Price: $50</h3>
        </button>

        <button type="button" onClick={handleClick}>
          <img src="https://picsum.photos/300/300" alt="carousel pic" />
          <h1>Some Title</h1>
          <h3>Price: $50</h3>
        </button>

        <button type="button" onClick={handleClick}>
          <img src="https://picsum.photos/300/300" alt="carousel pic" />
          <h1>Some Title</h1>
          <h3>Price: $50</h3>
        </button>

        <button type="button" onClick={handleClick}>
          <img src="https://picsum.photos/300/300" alt="carousel pic" />
          <h1>Some Title</h1>
          <h3>Price: $50</h3>
        </button>

        <button type="button" onClick={handleClick}>
          <img src="https://picsum.photos/300/300" alt="carousel pic" />
          <h1>Some Title</h1>
          <h3>Price: $50</h3>
        </button>

        <button type="button" onClick={handleClick}>
          <img src="https://picsum.photos/300/300" alt="carousel pic" />
          <h1>Some Title</h1>
          <h3>Price: $50</h3>
        </button>

        <button type="button" onClick={handleClick}>
          <img src="https://picsum.photos/300/300" alt="carousel pic" />
          <h1>Some Title</h1>
          <p>Price: $50</p>
        </button>
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

export default ProductShowcaseCarousel;
