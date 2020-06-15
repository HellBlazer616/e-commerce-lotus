import React from 'react';
import { Drawer } from 'antd';
import styled from '@emotion/styled';
import HorizontalCardComponent from './HorizontalCardComponent';

const InfoDrawerComponent = ({ onClose, visible }) => {
  return (
    <div>
      <StyledDrawer
        title="Delivery Information"
        placement="left"
        closable
        onClose={onClose}
        visible={visible}
        width={window.innerWidth < 800 ? 300 : 650}
      >
        <HorizontalCardComponent />
      </StyledDrawer>
    </div>
  );
};

const StyledDrawer = styled(Drawer)``;

export default InfoDrawerComponent;
