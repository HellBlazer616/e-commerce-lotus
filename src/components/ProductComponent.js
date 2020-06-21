/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import { BackTop, Result, Skeleton, Select, Radio, Modal } from 'antd';
import { useState } from 'react';
import AsideMenuComponent from './AsideMenuComponent';
import NavComponent from './NavComponent';
import CardComponent from './CardComponent';
import BannerCarousel from './BannerCarousel';
import colors from '../utils/Colors';

const { Option } = Select;
const ProductComponent = ({
  visible,
  setVisible,
  products,
  sortProducts,
  changeSortOrder,
}) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleOk = () => {
    setVisibleModal(false);
  };
  const handleCancel = () => {
    setVisibleModal(false);
  };

  const handleModalOpen = (e) => {
    if (e.target.dataset.key === 'cart') return;
    setVisibleModal(!visible);
  };

  return (
    <Wrapper>
      <NavComponent visible={visible} setVisible={setVisible} />
      <Content>
        <AsideMenuComponent />
        <Row>
          <Modal
            title="Basic Modal"
            visible={visibleModal}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          <section className="head">
            <article className="head__banner">
              <BannerCarousel />
            </article>
            <section className="head__bottom">
              <article className="head__category">
                <h1 style={{ textAlign: 'center' }}>
                  {products.length >= 1 && products[0].categoryName
                    ? products[0].categoryName[0]
                    : 'NO CATEGORY'}
                </h1>
              </article>
              <article className="head__sort">
                <Select
                  showSearch
                  placeholder="Select sorting category"
                  optionFilterProp="children"
                  onChange={sortProducts}
                >
                  <Option value="added">Sort by date added</Option>
                  <Option value="price">Sort by price</Option>
                </Select>
                <Radio.Group
                  className="head__sort-radio"
                  onChange={changeSortOrder}
                  defaultValue={1}
                >
                  <Radio data-key={1} value={1}>
                    Ascending
                  </Radio>
                  <Radio data-key={-1} value={-1}>
                    Descending
                  </Radio>
                </Radio.Group>
              </article>
            </section>
          </section>

          <section className="products">
            {/* eslint-disable-next-line no-nested-ternary */}
            {products.length === 0 ? (
              <Result
                status="404"
                title="404"
                subTitle="Sorry, we are out of stock. Please check back soon!! 😊😊😊 "
              />
            ) : (
              products.map((product) => {
                // eslint-disable-next-line no-underscore-dangle
                return (
                  <CardComponent
                    key={product._id}
                    product={product}
                    handleModalOpen={handleModalOpen}
                  />
                );
              })
            )}
          </section>
        </Row>
      </Content>

      <BackTop />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${colors.background};
  color: ${colors.colorOne};
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Row = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 100%;

  & .head {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    & .head__banner {
      /*  */
      overflow: hidden;
      margin-bottom: 1rem;
      /* min-height: 220px; */
    }

    & .head__category {
      background: ${colors.primary600};
      height: auto;
      margin: auto;
      width: 54%;
      text-align: center;

      padding: 1rem;

      h1 {
        color: #fff;
        margin: 0;
        text-align: center;
        font-size: calc(14px + 0.3vw);
      }
    }

    & .head__bottom {
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
    }

    & .head__sort {
      flex-basis: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 1rem 5rem;
      align-items: center;
      justify-content: space-between;

      & .head__sort-radio {
        margin: 1rem;
      }

      width: 200;
    }

    @media (max-width: 700px) {
      & .head__sort {
        justify-content: center;
        margin: 1rem auto;
      }
    }

    @media (max-width: 400px) {
      & .head__sort {
        justify-content: center;

        div:nth-of-type(2) {
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
        }
      }
    }

    @media (max-width: 300px) {
      & .head__sort {
        justify-content: center;

        div:nth-of-type(1) {
          width: 150px;
        }
        div:nth-of-type(2) {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  & .products {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default ProductComponent;
