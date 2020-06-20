import React from 'react';
import { Table, Button } from 'antd';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

const WishListTable = () => {
  const columns = [
    {
      title: 'Items',
      dataIndex: 'item',
      key: 'item',
      width: 200,
      render: (text) => (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          <img
            src="https://picsum.photos/50/50"
            alt="product"
            style={{ marginRight: '1rem' }}
          />
          <span style={{ width: '80%' }}>
            <p>{text}</p>
            <p style={{ color: '#52c41a' }}>$50</p>
          </span>
        </div>
      ),
    },

    {
      title: 'Price',
      dataIndex: 'price',
      width: 100,
      key: 'price',
      render: (price) => <p>${price}</p>,
    },
    {
      title: 'Link',
      width: 100,
      dataIndex: 'link',
      key: 'link',
      render: (price) => <Link to="#">{price}</Link>,
    },
    // {
    //   title: '',
    //   width: 100,
    //   dataIndex: 'Blank',
    //   key: 'Blank',
    // },
  ];

  const data = [
    {
      key: '1',
      item: `Ginger Indian[Net Weight +10gm] (আদা)/250
      gm Ginger Indian[Net Weight +10gm] (আদা)/250 gm/`,
      // date: '12/12/2019',
      price: '50',
      link: 'product link',
    },
    {
      key: '2',
      item: `Ginger Indian[Net Weight +10gm] (আদা)/250
      gm Ginger Indian[Net Weight +10gm] (আদা)/250 gm/`,
      // date: '12/12/2019',
      price: '500',
      link: 'product link',
    },
    {
      key: '3',
      item: `Ginger Indian[Net Weight +10gm] (আদা)/250
      gm Ginger Indian[Net Weight +10gm] (আদা)/250 gm/`,
      // date: '12/12/2019',
      price: '40',
      link: 'product link',
    },
  ];

  return (
    <WishList className="order__details__list">
      <Table
        className="order__details__list__table"
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    </WishList>
  );
};

const WishList = styled.article`
  overflow-x: auto;

  & .order__details__list__table {
    word-break: break-all;
  }
`;

export default WishListTable;
