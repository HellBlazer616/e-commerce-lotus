import React from 'react';
import styled from '@emotion/styled';
import { lightSky } from '../utils/Colors';

const HorizontalCardComponent = () => {
  return (
    <Info>
      <div className="info__wrapper">
        <section className="info__title">
          <button type="button">1</button>
          <h1>Title of the Information</h1>
        </section>
        <section className="info__description">
          <button type="button" className="info__button">
            <h1>Title of the Information</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi
              omnis qui accusantium est veritatis rerum! Repudiandae nobis sequi
              pariatur nesciunt doloribus. Minima, dolore molestiae porro in
              itaque officiis ut!
            </p>
          </button>
          <button type="button" className="info__button">
            <h1>Title of the Information</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi
              omnis qui accusantium est veritatis rerum! Repudiandae nobis sequi
              pariatur nesciunt doloribus. Minima, dolore molestiae porro in
              itaque officiis ut!
            </p>
          </button>
        </section>
      </div>
    </Info>
  );
};

const Info = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  margin: 1rem;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  & .info__wrapper {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;

    & .info__title {
      display: flex;
      flex-basis: 10%;
      justify-content: flex-start;
      align-items: center;
      margin: 0.5rem;

      button {
        background: #1890ff;
        border: 1px solid #1890ff;
        border-radius: 50%;
        font-size: 21px;
        padding: 5px;
        flex-basis: 10%;
        margin: 0 10px;
      }
    }
    & .info__description {
      display: flex;
      justify-content: space-around;
      flex-basis: 90%;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      @media only screen and (max-width: 767px) {
        flex-basis: 100%;
      }

      & .info__button {
        cursor: pointer;
        background: ${lightSky};
        border: none;
        flex-basis: 90%;
        margin: 1rem 0;
        box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.25);
        :hover {
          box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
`;

export default HorizontalCardComponent;
