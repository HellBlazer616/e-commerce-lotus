import React from 'react';
import styled from '@emotion/styled';
import AsideMenuComponent from '../components/AsideMenuComponent';
import NavComponent from '../components/NavComponent';
import CarousalComponent from '../components/CarousalComponent';
import './App.less';

function App() {
  return (
    <Wrapper>
      <NavComponent />
      <AsideMenuComponent />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;
`;
