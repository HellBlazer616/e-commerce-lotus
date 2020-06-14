import React, { useState } from 'react';
import { Menu, Input, Dropdown, Button, Tooltip, Badge } from 'antd';
import { Link } from '@reach/router';
import {
  AppstoreOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { RiMenu2Line } from 'react-icons/ri';
import styled from '@emotion/styled';
import CartComponent from './CartComponent';

const { SubMenu } = Menu;
const { Search } = Input;

const NavComponent = ({ visible, setVisible }) => {
  const [current, setCurrent] = useState({});

  const handleNavClick = (e) => {
    console.log('click ', e);
    setCurrent({
      current: e.key,
    });
  };

  const showCart = () => {
    setVisible(true);
  };

  const handleCategoryClick = (e) => {
    console.log('click ', e);
  };

  const HoverMenu = (
    <Menu
      key="menu"
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
    <>
      <Nav>
        <StyledMenu
          onClick={handleNavClick}
          selectedKeys={[current]}
          mode="horizontal"
          overflowedIndicator={<RiMenu2Line />}
        >
          <Menu.Item key="icon" icon={<AppstoreOutlined />}>
            <Link to="/">Brand Icon</Link>
          </Menu.Item>
          <Menu.Item key="home" icon={<AppstoreOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="product" icon={<AppstoreOutlined />}>
            <Link to="/product">Product</Link>
          </Menu.Item>

          <SubMenu
            key="avatar"
            title="  User avatar will be here"
            icon={<AppstoreOutlined />}
            style={{ float: 'right' }}
          >
            <Menu.Item key="7">Login</Menu.Item>
          </SubMenu>
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
          <div onClick={showCart} style={{ margin: '0 20px' }}>
            <Badge count={0} showZero>
              <Tooltip title="open cart">
                <Button
                  type="primary"
                  shape="circle"
                  icon={
                    <ShoppingCartOutlined
                      style={{ fontSize: '25px', margin: 'auto' }}
                    />
                  }
                  size="large"
                />
              </Tooltip>
            </Badge>
          </div>
        </div>
      </Nav>
      <CartComponent visible={visible} setVisible={setVisible} />
    </>
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
