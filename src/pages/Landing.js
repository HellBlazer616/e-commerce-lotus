import React, { useContext } from 'react';
import styled from '@emotion/styled';
import NavComponent from '../components/NavComponent';
import { CartOpenContext } from '../CartOpenContext';

const Landing = () => {
  const { visible, setVisible } = useContext(CartOpenContext);

  return (
    <Wrapper>
      <NavComponent visible={visible} setVisible={setVisible} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eeeeee;
`;

export default Landing;
