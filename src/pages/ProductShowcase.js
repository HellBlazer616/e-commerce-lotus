import React, { useEffect, useState } from 'react';
import { useParams } from '@reach/router';
import styled from '@emotion/styled';
import { Button, Rate } from 'antd';
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
      {/* <p>Product Showcase {params.productId}</p> */}
      {product.map((value) => {
        return (
          <div className="product" key={value._id}>
            <div className="product__image">
              <img
                src={`${process.env.REACT_APP_DOMAIN.concat(
                  value?.cover?.medium
                )}`}
                alt="product pic"
              />
            </div>
            <div className="product__info">
              <div className="product__info__upper">
                <h2>{value.name}</h2>
                <p>{value.unit}</p>
                {value.price.offer === '' ? (
                  <h2>{`৳ ${value.price.regular}`}</h2>
                ) : (
                  <>
                    <s>{`৳${value.price.regular}`}</s>{' '}
                    <h1
                      style={{ color: '#f5222d' }}
                    >{`৳ ${value.price.offer}`}</h1>{' '}
                  </>
                )}
                {offer > 0 ? <h2>{offer}% off</h2> : null}
                <Rate allowHalf defaultValue={5} />
                <p>
                  <strong>Category:{value.primaryCategory.name} </strong>
                </p>

                {/* {value.price.offer !== '' ? `Offer: `: value.price.offer: null} */}
                <p>
                  <strong>Description: </strong> {value.description}
                </p>
              </div>
              <div className="product__info__lower">
                <Button size="large" type="primary">
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

    @media only screen and (max-width: 767px) {
      margin: 0;
      width: 100%;
    }

    & .product__image {
      justify-content: center;
      @media only screen and (max-width: 767px) {
        flex-basis: 100%;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
    & .product__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-basis: 30%;

      @media only screen and (max-width: 767px) {
        flex-basis: 100%;
        margin: 1rem;
      }

      & .product__info__upper {
        flex-basis: 100%;
      }
      & .product__info__lower {
        /*  */
      }
    }
  }
`;

export default ProductShowcase;
