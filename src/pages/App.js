import React, { useState } from 'react';
import styled from '@emotion/styled';
import AsideMenuComponent from '../components/AsideMenuComponent';
import NavComponent from '../components/NavComponent';
import CartComponent from '../components/CartComponent';
import CardComponent from '../components/CardComponent';
import './App.less';

function App() {
  const [visible, setVisible] = useState(false);

  const showCart = () => {
    setVisible(true);
  };

  return (
    <Wrapper>
      <NavComponent showCart={showCart} />
      <Content>
        <AsideMenuComponent />
        <Row>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Row>
      </Content>
      <CartComponent visible={visible} setVisible={setVisible} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
`;
