import React, { useState } from 'react';
import { Menu, Input, Dropdown, Button, Tooltip, Badge, Select } from 'antd';
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
const { Option } = Select;

const NavComponent = () => {
  const [current, setCurrent] = useState({});
  const [visible, setVisible] = useState(false);

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
            <Link to="/product/all">Product</Link>
          </Menu.Item>
          <Menu.Item key="login" icon={<AppstoreOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="cart" icon={<AppstoreOutlined />}>
            <Link to="/cart">Show Cart</Link>
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
          <Select
            defaultValue="All Category"
            style={{ width: 120 }}
            onChange={handleCategoryClick}
            className="bottom-nav__button"
            size="large"
          >
            <Option value="all-category">All Categories</Option>
            <Option value="fruit">Fruit</Option>
            <Option value="vegetable">Vegetable</Option>
          </Select>
          <StyledSearch
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={(value) => console.log(value)}
          />
          <button
            onClick={showCart}
            style={{ margin: '0 20px' }}
            type="button"
            aria-label="cart-button"
            className="cart-button"
          >
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
          </button>
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
  & .cart-button {
    border: none;
    background: inherit;
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
