/* eslint-disable no-underscore-dangle */
import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useLayoutEffect,
} from 'react';
import { Menu, Button } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  CaretLeftFilled,
  CaretRightFilled,
} from '@ant-design/icons';
import { Link, navigate } from '@reach/router';
import useWindowDimension from '../utils/customHooks/useWindowDimension';
import { CategoryContext } from '../context/CategoryContext';

const { SubMenu } = Menu;

const AsideMenuComponent = () => {
  const [current, setCurrent] = useState({});
  const [isCollapse, setIsCollapse] = useState(false);
  const menuRef = useRef();
  const { width } = useWindowDimension();
  const { category } = useContext(CategoryContext);

  const toggleCollapsed = () => {
    setIsCollapse(!isCollapse);
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
    <aside style={{ maxWidth: 300 }}>
      <Menu
        mode="vertical"
        style={{ position: 'sticky', top: 0 }}
        ref={menuRef}
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
        {category.map((value) => {
          if (value.subCategory.length >= 2) {
            return (
              <SubMenu
                key={value._id}
                icon={<MailOutlined />}
                title={
                  <Link
                    style={{ color: 'inherit' }}
                    to={`/category/showcase/${value._id}`}
                  >
                    {value.name}
                  </Link>
                }
              >
                {value.subCategory.map((valueSub) => {
                  return (
                    <Menu.Item key={`${valueSub._id}`}>
                      <Link to={`/category/${valueSub._id}`}>
                        {valueSub.name}
                      </Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          }
          return (
            <Menu.Item key={value._id} icon={<AppstoreOutlined />}>
              <Link to={`/category/${value._id}`}>{value.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </aside>
  );
};

export default AsideMenuComponent;
