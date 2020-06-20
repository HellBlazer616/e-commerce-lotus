/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Breadcrumb, Menu } from 'antd';
import { Link } from '@reach/router';
import useWindowDimension from '../utils/customHooks/useWindowDimension';

const AccountNav = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const { width } = useWindowDimension();

  useEffect(() => {
    if (width > 1330) {
      setIsCollapse(false);
    } else if (width < 1330) {
      setIsCollapse(true);
    }
  }, [width]);

  return (
    <Nav>
      <Breadcrumb
        className="mobile"
        style={{ margin: '1rem', padding: '1rem', fontWeight: 800 }}
      >
        <Breadcrumb.Item>
          <Link to="/account/user/order">Order</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="#">Need Help</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="#">Account</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="#">Wishlist</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Menu
        mode="inline"
        style={{
          width: 200,
          textAlign: 'justify',

          display: isCollapse ? 'none' : 'block',
        }}
      >
        <Menu.Item key="1">
          <Link to="/account/user/order">Order</Link>
        </Menu.Item>
        <Menu.Item key="2">Need Help</Menu.Item>
        <Menu.Item key="3">Account</Menu.Item>
        <Menu.Item key="4">WishList</Menu.Item>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  & .mobile {
    display: none;
  }

  @media screen and (max-width: 1330px) {
    & .mobile {
      display: block;
    }
  }
`;

export default AccountNav;
