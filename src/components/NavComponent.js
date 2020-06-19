import React, { useState, useContext } from 'react';
import {
  Menu,
  Input,
  Dropdown,
  Button,
  Tooltip,
  Badge,
  Select,
  Affix,
  Avatar,
} from 'antd';
import { Link, navigate } from '@reach/router';
import {
  AppstoreOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { RiMenu2Line } from 'react-icons/ri';
import styled from '@emotion/styled';
import CartComponent from './CartComponent';
import { CategoryContext } from '../context/CategoryContext';

const { SubMenu } = Menu;
const { Search } = Input;
const { Option } = Select;

const NavComponent = () => {
  const [visible, setVisible] = useState(false);
  const [searchCategory, setSearchCategory] = useState('');

  const { category } = useContext(CategoryContext);

  const showCart = () => {
    setVisible(!visible);
  };

  const handleCategoryClick = (value) => {
    if (value !== '') setSearchCategory(value);
  };

  const searchItem = (query) => {
    if (query !== '' && searchCategory !== '')
      navigate(`/search/searchCategory=${searchCategory}&query=${query}`);
  };

  return (
    <>
      <Nav>
        <StyledMenu mode="horizontal" overflowedIndicator={<RiMenu2Line />}>
          <Menu.Item key="icon" icon={<AppstoreOutlined />}>
            <Link to="/">Brand Icon</Link>
          </Menu.Item>
          <SubMenu
            key="avatar"
            // title="Sign in"
            icon={<Avatar size="large" icon={<UserOutlined />} />}
            style={{ float: 'right' }}
          >
            <Menu.Item key="login" icon={<AppstoreOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="grocery" title="Grocery" icon={<CaretDownOutlined />}>
            {category.map((value) => {
              return (
                <Menu.Item key={value._id} icon={<AppstoreOutlined />}>
                  <Link to={`/category/${value._id}`}>{value.name}</Link>
                </Menu.Item>
              );
            })}
          </SubMenu>
          <Menu.Item key="cart" icon={<AppstoreOutlined />}>
            <Link to="/cart">Show Cart</Link>
          </Menu.Item>
        </StyledMenu>

        <div className="bottom-nav">
          <Select
            style={{ width: 120 }}
            onChange={handleCategoryClick}
            className="bottom-nav__button"
            size="large"
            placeholder="Select Category"
          >
            {category.map((value) => {
              return <Option value={value._id}>{value.name}</Option>;
            })}
          </Select>
          <StyledSearch
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={searchItem}
          />
          <div
            onClick={showCart}
            style={{ margin: '0 20px' }}
            type="button"
            aria-label="cart-button"
            className="cart-button"
            role="button"
            onKeyDown={showCart}
            tabIndex={0}
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
                  block
                />
              </Tooltip>
            </Badge>
          </div>
        </div>
      </Nav>
      <CartComponent visible={visible} onClose={showCart} />
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
    margin: 0px 20px;
    position: fixed;
    right: 0px;
    bottom: 40%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    cursor: pointer;
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
