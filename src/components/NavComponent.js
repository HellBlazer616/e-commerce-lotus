import React, { useState } from 'react';
import { Menu, Input, Dropdown } from 'antd';

import { AppstoreOutlined, CaretDownOutlined } from '@ant-design/icons';
import { RiMenu2Line } from 'react-icons/ri';
import styled from '@emotion/styled';

const { SubMenu } = Menu;
const { Search } = Input;

const NavComponent = () => {
  const [current, setCurrent] = useState({});

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent({
      current: e.key,
    });
  };
  const handleCategoryClick = (e) => {
    console.log('click ', e);
  };

  const HoverMenu = (
    <Menu
      key="mail"
      icon={<AppstoreOutlined />}
      title="Grocery"
      onClick={handleCategoryClick}
    >
      <Menu.Item key="1">1st Menu Item</Menu.Item>
      <Menu.Item key="2">Option 6</Menu.Item>
      <Menu.Item key="3">Option 5</Menu.Item>
      <Menu.Item key="4">Option 6</Menu.Item>
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <Menu.Item key="7">Option 5</Menu.Item>
      <Menu.Item key="8">Option 6</Menu.Item>
      <Menu.Item key="9">Option 5</Menu.Item>
      <Menu.Item key="10">Option 6</Menu.Item>
    </Menu>
  );

  return (
    <Nav>
      <StyledMenu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        overflowedIndicator={<RiMenu2Line />}
      >
        <Menu.Item key="icon" icon={<AppstoreOutlined />}>
          Brand Icon
        </Menu.Item>
        <Menu.Item key="five" icon={<AppstoreOutlined />}>
          Navigation Five
        </Menu.Item>
        <Menu.Item key="six" icon={<AppstoreOutlined />}>
          Navigation Six
        </Menu.Item>
        <Menu.Item
          key="avatar"
          icon={<AppstoreOutlined />}
          style={{ float: 'right' }}
        >
          User avatar will be here
        </Menu.Item>
        <Menu.Item
          key="seven"
          icon={<AppstoreOutlined />}
          style={{ float: 'right' }}
        >
          Cart will be here
        </Menu.Item>
      </StyledMenu>

      <div className="bottom-nav">
        <Dropdown.Button
          size="large"
          onClick={handleCategoryClick}
          overlay={HoverMenu}
          className="bottom-nav__button"
          icon={<CaretDownOutlined />}
          key="category"
        >
          Categories
        </Dropdown.Button>
        <StyledSearch
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={(value) => console.log(value)}
        />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10px;

  & .bottom-nav {
    display: flex;
    justify-content: center;

    & .bottom-nav__button {
      margin: 0 10px;
    }
  }
`;

const StyledMenu = styled(Menu)`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
`;
const StyledSearch = styled(Search)`
  width: 50%;
  /* margin: auto; */
`;

export default NavComponent;
