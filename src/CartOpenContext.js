import React, { createContext, useState } from 'react';

export const CartOpenContext = createContext();

export const CartOpenProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const defaultContext = {
    visible,
    setVisible,
  };

  return (
    <CartOpenContext.Provider value={defaultContext}>
      {children}
    </CartOpenContext.Provider>
  );
};
