/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Breadcrumb, Menu, Steps, Table, Tag, Space } from 'antd';
import { Link } from '@reach/router';
import NavComponent from '../components/NavComponent';
import useWindowDimension from '../utils/customHooks/useWindowDimension';

const { Step } = Steps;

const Checkout = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const { width } = useWindowDimension();

  useEffect(() => {
    if (width > 1330) {
      setIsCollapse(false);
    } else if (width < 1330) {
      setIsCollapse(true);
    }
  }, [width]);

  const columns = [
    {
      title: 'Items',
      dataIndex: 'item',
      key: 'item',
      render: (text) => (
        <div>
          <p>{text}</p>
          <p style={{ color: '#52c41a' }}>$50</p>
        </div>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <p>${price}</p>,
    },
  ];

  const data = [
    {
      key: '1',
      item: `Ginger Indian[Net Weight +10gm] (আদা)/250
      gm Ginger Indian[Net Weight +10gm] (আদা)/250 gm/`,
      quantity: 32,
      price: '50',
    },
    {
      key: '2',
      item: `Ginger Indian[Net Weight +10gm] (আদা)/250
      gm Ginger Indian[Net Weight +10gm] (আদা)/250 gm/`,
      quantity: 42,
      price: '500',
    },
    {
      key: '3',
      item: `Ginger Indian[Net Weight +10gm] (আদা)/250
      gm Ginger Indian[Net Weight +10gm] (আদা)/250 gm/`,
      quantity: 32,
      price: '40',
    },
  ];

  return (
    <Wrapper>
      <NavComponent />
      <Main>
        <Nav>
          <Breadcrumb
            className="mobile"
            style={{ background: '#eee', margin: '2rem 1rem' }}
          >
            <Breadcrumb.Item>
              <Link to="#">Order</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="#">Need Help</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="#">Your Account Settings</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Menu
            mode="inline"
            style={{
              maxWidth: 250,
              textAlign: 'justify',

              display: isCollapse ? 'none' : 'block',
            }}
          >
            <Menu.Item key="1">Order</Menu.Item>
            <Menu.Item key="2">Need Help</Menu.Item>
            <Menu.Item key="3">Your Account Settings</Menu.Item>
            <Menu.Item key="4">Logout</Menu.Item>
          </Menu>
        </Nav>
        <div className="order">
          <section className="order__list">
            <h2 style={{ marginLeft: '1rem' }}>Delivery Locations</h2>
            <hr />
            <article className="order__list__item">
              <span className="order__list__item__head">
                <h3 className="order__list__item--tag">Order#1</h3>
                <div className="order__list__item--info">
                  <h3>Order on the way</h3>
                </div>
              </span>
              <hr />
              <div className="order__list__item__body">
                <span>
                  <h3>Order Date</h3> <h3>7th April 2019</h3>
                </span>
                <span>
                  <h3>Delivery TIme</h3> <h3>13th April</h3>
                </span>
                <span>
                  <h3>Total Price</h3> <h3>$339</h3>
                </span>
              </div>
            </article>
            <article className="order__list__item">
              <span className="order__list__item__head">
                <h3 className="order__list__item--tag">Order#1</h3>{' '}
                <div className="order__list__item--info">
                  <h3>Order on the way</h3>
                </div>
              </span>
              <div className="order__list__item__body">
                <span>
                  <h3>Order Date</h3> <h3>7th April 2019</h3>
                </span>
                <span>
                  <h3>Delivery TIme</h3> <h3>13th April</h3>
                </span>
                <span>
                  <h3>Total Price</h3> <h3>$339</h3>
                </span>
              </div>
            </article>
            <article className="order__list__item">
              <span className="order__list__item__head">
                <h3 className="order__list__item--tag">Order#1</h3>
                <div className="order__list__item--info">
                  <h3>Order on the way</h3>
                </div>
              </span>
              <div className="order__list__item__body">
                <span>
                  <h3>Order Date</h3> <h3>7th April 2019</h3>
                </span>
                <span>
                  <h3>Delivery TIme</h3> <h3>13th April</h3>
                </span>
                <span>
                  <h3>Total Price</h3> <h3>$339</h3>
                </span>
              </div>
            </article>
          </section>
          <section className="order__details">
            <h2 style={{ margin: '1rem rem' }}>Order Details</h2>
            <hr />

            <article className="order__details__list">
              <Table
                className="order__details__list__table"
                pagination={false}
                columns={columns}
                dataSource={data}
              />
            </article>
          </section>
        </div>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f6f6f6;

  hr {
    border: 1px solid #d8e6f5;
    width: 100%;
  }

  @media screen and (max-width: 342px) {
    word-break: break-all;
  }
`;

const Nav = styled.nav`
  & .mobile {
    display: none;
  }

  @media screen and (max-width: 1330px) {
    & .mobile {
      display: block;
    }
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media screen and (max-width: 620px) {
  }
  & .order {
    flex-grow: 1;
    display: flex;
    padding: 0 1rem;
    flex-wrap: wrap;

    & .order__list {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 0 1rem;

      & .order__list__item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 180px;
        max-width: 350px;

        & .order__list__item--tag {
        }
        & .order__list__item--info {
          h3 {
            color: #52c41a;
          }
        }

        margin: 1rem 0;
        padding: 1rem;
        background: #dff4f3;

        & .order__list__item__head {
          display: flex;
          justify-content: space-between;
        }

        & .order__list__item__body {
          span {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }

    & .order__details {
      flex-grow: 10;
      margin: 0 2rem;

      & .order__details__address {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        flex-wrap: wrap;
        word-break: break-all;
      }

      & .order__details__price {
        display: flex;
        flex-direction: column;
        span {
          display: flex;
          justify-content: space-between;
          h3 {
          }
        }
      }

      & .order__details__steps {
        width: 60%;
        margin: 2rem auto;
      }

      & .order__details__list {
        & .order__details__list__table {
        }
      }
    }
  }
`;

export default Checkout;
