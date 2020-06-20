import React from 'react';
import { Table } from 'antd';

const OrderDetailsTable = () => {
  const columns = [
    {
      title: 'Items',
      dataIndex: 'item',
      key: 'item',
      render: (text) => (
        <div>
          <p>{text}</p>
          <p style={{ color: '#52c41a' }}>$50</p>
        </div>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <p>${price}</p>,
    },
  ];

  const data = [
    {
      key: '1',
      item: `Ginger Indian[Net Weight +10gm] (আদা)/250
      gm Ginger Indian[Net Weight +10gm] (আদা)/250 gm/`,
      quantity: 32,
      price: '50',
    },
    {
      key: '2',
      item: `Ginger Indian[Net Weight +10gm] (আদা)/250
      gm Ginger Indian[Net Weight +10gm] (আদা)/250 gm/`,
      quantity: 42,
      price: '500',
    },
    {
      key: '3',
      item: `Ginger Indian[Net Weight +10gm] (আদা)/250
      gm Ginger Indian[Net Weight +10gm] (আদা)/250 gm/`,
      quantity: 32,
      price: '40',
    },
  ];

  return (
    <article className="order__details__list">
      <Table
        className="order__details__list__table"
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    </article>
  );
};

export default OrderDetailsTable;
