import React from 'react';
import styled from '@emotion/styled';
import { Carousel } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const BannerCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'resize',
    autoplay: false,
    arrows: true,
    dots: false,
    swipeToSlide: true,
    prevArrow: <ArrowLeftOutlined style={{ fontSize: 20, color: 'red' }} />,
    nextArrow: <ArrowRightOutlined style={{ fontSize: 20, color: 'red' }} />,

    responsive: [
      {
        breakpoint: 1820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1453,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
          <img src="https://picsum.photos/1920/250" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/1920/250" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/1920/250" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/1920/250" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/1920/250" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/1920/250" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/1920/250" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/1920/250" alt="carousel pic" />
        </div>
        <div type="button">
          <img src="https://picsum.photos/1920/250" alt="carousel pic" />
        </div>
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;

  & .resize {
    width: 86vw;
    height: 200px;
    overflow: hidden;
    margin: auto;
  }
  @media (max-width: 1442px) {
    & .resize {
      width: 75vw;
    }
  }
  @media (max-width: 724px) {
    & .resize {
      width: 50vw;
    }
  }
  @media (max-width: 370px) {
    & .resize {
      width: 45vw;
    }
  }
  @media (max-width: 290px) {
    & .resize {
      width: 35vw;
    }
  }

  width: 100%;
  div {
    margin: auto;
  }

  img {
    margin: auto;

    @media (max-width: 724px) {
      img {
        width: 100%;
      }
    }
  }
`;

export default BannerCarousel;
