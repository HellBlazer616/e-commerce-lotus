/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Tooltip } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import colors from '../utils/Colors';

const CardBodyComponent = ({ product }) => {
  return (
    <section style={{}}>
      <Article>
        <p
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            padding: '16px 24px',
            fontWeight: '700',
          }}
        >
          {product.name}
        </p>

        <span>
          {product.price.offer === '' ? (
            <h3
              style={{ color: `${colors.primary600}`, padding: '16px 24px' }}
            >{`৳ ${product.price.regular}`}</h3>
          ) : (
            <>
              <h3 style={{ padding: '16px 24px' }}>
                <s
                  style={{ color: `${colors.contrast}`, fontSize: '14px' }}
                >{`৳${product.price.regular} `}</s>
                <span
                  style={{ color: `${colors.primary600}` }}
                >{` ৳${product.price.offer}`}</span>
              </h3>
            </>
          )}
          <Tooltip title="Add to cart" placement="bottom">
            <StyledButton data-key="cart" size="large">
              <ShoppingCartIcon style={{ pointerEvents: 'none' }} /> Cart
            </StyledButton>
          </Tooltip>
        </span>
      </Article>

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
  border: none;
  float: right;

  border-radius: 18px;
  display: flex;
  align-items: center;
  color: #009e7f;
  float: right;

  :hover {
    background: #009e7f;
    color: #fff;
  }
  border: 2px solid rgb(247, 247, 247);
`;
const ShoppingCartIcon = styled(ShoppingCartOutlined)`
  font-size: 24px;
  :hover {
    color: #fff;
  }
`;

const Article = styled.article`
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default CardBodyComponent;
