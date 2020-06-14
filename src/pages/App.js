import React, { useState } from 'react';
import styled from '@emotion/styled';
import AsideMenuComponent from '../components/AsideMenuComponent';
import NavComponent from '../components/NavComponent';
import CartComponent from '../components/CartComponent';
import './App.less';

function App() {
  const [visible, setVisible] = useState(false);

  const showCart = () => {
    setVisible(true);
  };

  return (
    <Wrapper>
      <NavComponent showCart={showCart} />
      <AsideMenuComponent />
      <CartComponent visible={visible} setVisible={setVisible} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;
`;
