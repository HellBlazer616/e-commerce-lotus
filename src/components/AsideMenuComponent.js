import React, { useState, useRef, useEffect } from 'react';
import { Menu, Button } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import useWindowDimension from '../utils/customHooks/useWindowDimension';

const { SubMenu } = Menu;

const AsideMenuComponent = () => {
  const [current, setCurrent] = useState({});
  const [isCollapse, setIsCollapse] = useState(false);
  const menuRef = useRef();
  const { height, width } = useWindowDimension();

  const handleMenuClick = (e) => {
    console.log('click ', e);
    setCurrent({
      current: e.key,
    });
    console.log(menuRef.current);
    console.log(width, height);
  };
  const toggleCollapsed = () => {
    console.log(isCollapse);
    setIsCollapse(!isCollapse);
  };

  // useEffect(() => {
  //   if (width > 500 && isCollapse) {
  //     setIsCollapse(false);
  //     console.log('render');
  //   } else if (width < 500 && !isCollapse) {
  //     console.log('render');
  //     setIsCollapse(true);
  //   }
  // }, [width, isCollapse]);

  return (
    <aside>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
        size="large"
      >
        {isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        onClick={handleMenuClick}
        // defaultSelectedKeys={['1']}
        collapsible
        mode="inline"
        style={{ position: 'sticky', top: 0 }}
        ref={menuRef}
        inlineCollapsed={isCollapse}
      >
        <Menu.Item key="1">Option 1</Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Sub Menu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </aside>
  );
};

export default AsideMenuComponent;
