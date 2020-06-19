import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Breadcrumb } from 'antd';
import AsideMenuAccount from '../components/AsideMenuAccount';
import NavComponent from '../components/NavComponent';
import { DeliveryContext } from '../context/DeliveryContext';
import OrderElementComponent from '../components/OrderElementComponent';

const Account = () => {
  const { delivery } = useContext(DeliveryContext);
  return (
    <Wrapper>
      <NavComponent />

      <Row>
        <StyledSection>
          <article className="information">
            {delivery.map((info) => {
              return (
                <button type="button" className="delivery__information">
                  <p>{info.pickUpLocation}</p>
                  <p>
                    {info.city.map((cityName) => {
                      return `${cityName}, `;
                    })}
                  </p>
                  {/* <p>{JSON.stringify(info.charge)}</p> */}
                  <p>Estimated Time: {info.time}</p>
                </button>
              );
            })}
          </article>
          <article className="order">
            <h1 className="order__header">Your Order</h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '1rem',
                flexBasis: '80%',
                padding: '2rem',
              }}
            >
              <h3 style={{ fontWeight: 400 }}>
                <strong>2</strong> x Something
                ssssssssssssssssssssssssssssssssssssssssssss
              </h3>
              <h1>$50</h1>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '1rem',
                flexBasis: '80%',
                padding: '2rem',
              }}
            >
              <div>
                <h3 style={{ fontWeight: 400 }}>
                  <strong>2</strong> x Something
                  ssssssssssssssssssssssssssssssssssssssssssss
                </h3>
              </div>
              <h1>$50</h1>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '1rem',
                flexBasis: '80%',
                padding: '2rem',
              }}
            >
              <h3 style={{ fontWeight: 400 }}>
                <strong>2</strong> x Something
                ssssssssssssssssssssssssssssssssssssssssssss
              </h3>
              <h1>$50</h1>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '1rem',
                flexBasis: '80%',
                padding: '2rem',
              }}
            >
              <h3 style={{ fontWeight: 400 }}>
                <strong>2</strong> x Something
                ssssssssssssssssssssssssssssssssssssssssssss
              </h3>
              <h1>$50</h1>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '1rem',
                flexBasis: '80%',
                padding: '2rem',
              }}
            >
              <h3 style={{ fontWeight: 400 }}>
                <strong>2</strong> x Something
                ssssssssssssssssssssssssssssssssssssssssssss
              </h3>
              <h1>$50</h1>
            </div>
            <hr style={{ width: '80%' }} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '1rem',
                flexBasis: '80%',
                padding: '2rem',
              }}
            >
              <div>
                <h3 style={{ fontWeight: 400 }}>Sub Total</h3>
                <h3 style={{ fontWeight: 400 }}>Delivery Fee</h3>
                <h3 style={{ fontWeight: 400 }}>Total</h3>
              </div>
              <div>
                <h1>$500</h1>
                <h1>$50</h1>
                <h1>$550</h1>
              </div>
            </div>
          </article>
        </StyledSection>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eee;
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-start;

  & .menu {
    /*  */
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: space-around;

  & .information {
    flex-basis: 25%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #f9f7f7;
    margin-top: 1rem;
    min-height: 300px;
    align-items: center;

    h1 {
      margin: 1rem;
      display: inline-block;
    }
    & .delivery__information {
      cursor: pointer;
      margin: 1rem;
      padding: 1rem;
      text-align: justify;
      border-radius: 10px;
      background: #dbe2ef;
      border: none;
      box-shadow: inset 4px 4px 4px rgba(255, 255, 255, 5);
      p {
        margin: 0;
      }
      :hover {
        box-shadow: 4px 4px 4px #f9f7f7;
      }
    }
  }
  & .order {
    flex-basis: 45%;
    background: #f9f7f7;
    margin-top: 1rem;
    max-width: 30%;

    & .order__header {
      font-size: calc(16px + 0.6vw);
      margin-top: 3rem;
      text-align: center;
    }
  }
`;

export default Account;
