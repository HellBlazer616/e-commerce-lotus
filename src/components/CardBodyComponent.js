/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const CardBodyComponent = ({ product }) => {
  return (
    <section style={{}}>
      <article>
        <p
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {product.name}
        </p>
        {product.price.offer === '' ? (
          <h2>{`৳ ${product.price.regular}`}</h2>
        ) : (
          <>
            <h2>
              <s>{`৳${product.price.regular} `}</s>
              <span
                style={{ color: '#f5222d' }}
              >{` ৳${product.price.offer}`}</span>
            </h2>
          </>
        )}
        {/* <StyledButton
          size="large"
          block
          icon={<ShoppingCartOutlined style={{ fontSize: '2rem' }} />}
        >
          Add to Cart
        </StyledButton> */}
      </article>

      {/* <section
        style={{
          display: 'flex',
          flexBasis: '100%',
          justifyContent: 'space-between',
          margin: 10,
        }}
      >
        <Button
          type="primary"
          icon={
            <MinusSquareTwoTone
              style={{ fontSize: 30, pointerEvents: 'none' }}
            />
          }
          style={{ background: 'transparent', border: 'none' }}
          data-key="negative"
        />
        <p>{count}</p>
        <Button
          type="primary"
          icon={
            <PlusSquareTwoTone
              style={{ fontSize: 30, pointerEvents: 'none' }}
            />
          }
          style={{ background: 'transparent', border: 'none' }}
          data-key="plus"
        />
      </section> */}
    </section>
  );
};

const StyledButton = styled(Button)`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  padding: 5px;
  transition: all 0.2s ease;
  color: #1890ff;

  :hover {
    background: #1890ff;
    color: #fff;
  }
`;

export default CardBodyComponent;
