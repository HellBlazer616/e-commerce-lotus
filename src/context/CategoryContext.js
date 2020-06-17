import React, { createContext, useState, useEffect } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  const defaultContext = {
    category,
    setCategory,
  };

  useEffect(() => {
    async function getCategory() {
      await fetch('/api/category?subCategory=true', {
        method: 'GET',
      }).then(async (response) => {
        const res = await response.json();
        if (res.data) {
          console.log('fetched');
          setCategory(res.data);
        }
      });
    }

    getCategory();
    localStorage.clear();
  }, []);

  return (
    <CategoryContext.Provider value={defaultContext}>
      {children}
    </CategoryContext.Provider>
  );
};
