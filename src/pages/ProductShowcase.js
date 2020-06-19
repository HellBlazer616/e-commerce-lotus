import React, { useEffect, useState } from 'react';
import { useParams } from '@reach/router';
import styled from '@emotion/styled';
import { Button, Rate } from 'antd';
import ReactImageMagnify from 'react-image-magnify';
import NavComponent from '../components/NavComponent';
import ProductShowcaseCarousel from '../components/ProductShowcaseCarousel';
import FooterComponent from '../components/FooterComponent';

const ProductShowcase = () => {
  const params = useParams();

  const [product, setProduct] = useState([]);
  const [offer, setOffer] = useState(0);

  useEffect(() => {
    console.log('Show Case');
    async function getProduct() {
      if (localStorage.getItem(`${params.productId}`)) {
        const data = JSON.parse(localStorage.getItem(`${params.productId}`));
        setProduct([data]);
        console.log('not fetched');
        return;
      }
      await fetch(`/api/product/${params.productId}`, {
        method: 'GET',
      }).then(async (response) => {
        console.log(response);
        const res = await response.json();
        console.log(res);
        if (res._id) {
          console.log('fetched');
          setProduct([res]);
          localStorage.setItem(`${params.productId}`, JSON.stringify(res));
        }
      });
    }

    getProduct();
  }, [params.productId]);

  useEffect(() => {
    if (product[0]?.price?.offer !== '') {
      const percent = Math.round(
        ((Number(product[0]?.price?.regular) -
          Number(product[0]?.price?.offer)) /
          Number(product[0]?.price?.regular)) *
          100
      );

      setOffer(percent);
    }
  }, [product]);

  return (
    <Wrapper>
      <NavComponent />

      {product.map((value) => {
        return (
          <div className="product" key={value._id}>
            <div className="product__image">
              {/* <img
                src={`${process.env.REACT_APP_DOMAIN.concat(
                  value.cover.medium
                )}`}
                alt="product pic"
              /> */}
              <ReactImageMagnify
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: `${process.env.REACT_APP_DOMAIN.concat(
                      value.cover.medium
                    )}`,
                  },
                  largeImage: {
                    src: `${process.env.REACT_APP_DOMAIN.concat(
                      value.cover.original
                    )}`,
                    width: 1200,
                    height: 1800,
                  },
                }}
                enlargedImagePosition="over"
              />
            </div>
            <div className="product__info">
              <div className="product__info__upper">
                <h2>{value.name}</h2>
                <h3>{value.unit}</h3>
                {value.price.offer === '' ? (
                  <h2>{`৳ ${value.price.regular}`}</h2>
                ) : (
                  <>
                    <h2>
                      <s>{`৳${value.price.regular} `}</s>
                      <span
                        style={{ color: '#f5222d', margin: '0 1rem' }}
                      >{` ৳${value.price.offer}`}</span>
                    </h2>
                  </>
                )}
                {offer > 0 ? <h2>{offer}% off</h2> : null}
                <Rate
                  allowHalf
                  defaultValue={5}
                  style={{ marginBottom: '1rem' }}
                />
                <p>
                  <strong>Category:{value.primaryCategory.name} </strong>
                </p>

                {/* {value.price.offer !== '' ? `Offer: `: value.price.offer: null} */}
                <p>
                  <strong>Description: </strong>{' '}
                  {value.description === ''
                    ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cumque ad, explicabo ducimus quaerat vitae numquam recusandae delectus magni saepe quasi. Cum vitae rerum recusandae in asperiores itaque blanditiis autem'
                    : value.description}
                </p>
              </div>
              <div className="product__info__lower">
                <Button size="large" type="primary" block>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      <ProductShowcaseCarousel />
      <FooterComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;
  & .product {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 3rem auto;
    width: 80%;

    @media only screen and (max-width: 1024px) {
      width: 100%;
      margin: 0;
    }

    & .product__image {
      justify-content: center;

      img {
        width: 100%;
        height: auto;
      }

      @media only screen and (max-width: 1024px) {
        flex-basis: 100%;
        justify-content: flex-start;
        margin: 3rem;
        img {
          width: 60%;
          height: auto;
        }
      }

      @media only screen and (max-width: 700px) {
        img {
          width: 70%;
          height: auto;
        }
      }
      @media only screen and (max-width: 600px) {
        img {
          width: 80%;
          height: auto;
        }
      }
      @media only screen and (max-width: 500px) {
        img {
          width: 90%;
          height: auto;
        }
      }
      @media only screen and (max-width: 400px) {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    & .product__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-basis: 30%;

      @media only screen and (max-width: 1024px) {
        flex-basis: 100%;
        margin: 3rem;
      }

      & .product__info__upper {
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      & .product__info__lower {
        max-width: 90%;
      }
    }
  }
`;

export default ProductShowcase;
