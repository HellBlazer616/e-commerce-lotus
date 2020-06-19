import React, { useState, useLayoutEffect } from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  CaretRightFilled,
  CaretLeftFilled,
} from '@ant-design/icons';
import useWindowDimension from '../utils/customHooks/useWindowDimension';

const AsideMenuAccount = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const { width } = useWindowDimension();

  const toggleCollapsed = () => {
    setIsCollapse(!isCollapse);
    console.log(isCollapse);
  };

  useLayoutEffect(() => {
    if (width > 500 && isCollapse) {
      setIsCollapse(false);
      console.log('render');
    } else if (width < 550 && !isCollapse) {
      console.log('render');
      setIsCollapse(true);
    }
  }, [width]);

  return (
    <aside style={{ marginTop: '1rem' }}>
      <Menu
        mode="vertical"
        style={{ position: 'sticky', top: 0, maxWidth: '200px' }}
        inlineCollapsed={isCollapse}
      >
        <Button
          onClick={toggleCollapsed}
          style={{ marginTop: 25 }}
          size="large"
          block
        >
          {isCollapse ? <CaretRightFilled /> : <CaretLeftFilled />}
        </Button>
        <Menu.Item key="1" icon={<AppstoreOutlined />}>
          Account
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          Wishlist
        </Menu.Item>
        <Menu.Item key="3" icon={<AppstoreOutlined />}>
          Order Details
        </Menu.Item>
      </Menu>
    </aside>
  );
};

export default AsideMenuAccount;
