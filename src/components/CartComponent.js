import React from 'react';
import { Drawer } from 'antd';

const CartComponent = ({ visible, setVisible }) => {
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        title="Place your order"
        placement="right"
        closable
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default CartComponent;
