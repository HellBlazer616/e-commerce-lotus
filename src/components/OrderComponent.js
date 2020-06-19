import React, { useState } from 'react';

import OrderElementComponent from './OrderElementComponent';

const OrderComponent = () => {
  // const { productId, title, price, image, quantity, stock } = data;
  // const [orderPrice, setOrderPrice] = useState(Number(price));
  // const [orderQuantity, setOrderQuantity] = useState(Number(quantity));

  // const handleClose = () => removeOrder(productId);
  // const handleQuantity = (e) => {
  //   const value = Number(e.target.value);

  //   if (value < 1 || value > Number(stock)) {
  //     console.log(`over stock`);
  //     return;
  //   }

  //   const newOrderPrice = value * price;
  //   setOrderPrice(newOrderPrice);
  //   setOrderQuantity(value);
  //   handleOrderQuantity(productId, value, newOrderPrice);
  // };

  return (
    <div>
      <OrderElementComponent />
    </div>
  );
};

export default OrderComponent;
