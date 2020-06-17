import React from 'react';
import { Layout } from 'antd';
import styled from '@emotion/styled';

const FooterComponent = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: 'center' }}>
      <Links>
        <a href="#">How to Order</a>
        <a href="#">About Us</a>
        <a href="#">FAQ</a>
        <a href="#">Career</a>
        <a href="#">Contact Us</a>
        <a href="#">Our Policy</a>
      </Links>
      <p>Ant Design ©2020 Created by Ant UED</p>
    </Footer>
  );
};

const Links = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 1rem;

  a {
    color: #2f2f2f;
    margin: 10px;
  }
`;

export default FooterComponent;
