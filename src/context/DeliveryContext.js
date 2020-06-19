import React, { createContext, useState, useEffect } from 'react';

export const DeliveryContext = createContext();

export const DeliveryProvider = ({ children }) => {
  const [delivery, setDelivery] = useState([]);

  const defaultContext = {
    delivery,
    setDelivery,
  };

  useEffect(() => {
    async function getDeliveryZones() {
      await fetch('/api/delivery', {
        method: 'GET',
      }).then(async (response) => {
        const res = await response.json();
        if (res) {
          setDelivery(res);
        }
      });
    }

    getDeliveryZones();
  }, []);

  return (
    <DeliveryContext.Provider value={defaultContext}>
      {children}
    </DeliveryContext.Provider>
  );
};
