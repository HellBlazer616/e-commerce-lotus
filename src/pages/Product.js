import React, { useContext, useState, useEffect } from 'react';
import { useParams } from '@reach/router';
import { CartOpenContext } from '../CartOpenContext';
import ProductComponent from '../components/ProductComponent';

const Product = () => {
  const { visible, setVisible } = useContext(CartOpenContext);
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState('false');
  const [sort, setSort] = useState('added');
  const [sortOrder, setSortOrder] = useState(1);

  const sortProducts = (value) => {
    if (sort === value) return;
    console.log(value);
    setSort(value);
  };
  const changeSortOrder = (value) => {
    if (value.target.value === value) return;
    setSortOrder(value.target.value);
    console.log(value.target.value);
  };

  useEffect(() => {
    async function getProduct() {
      if (
        localStorage.getItem(
          `/api/category/${params.productId}/product?recursive=true&sort=${sort}&sortOrder=${sortOrder}`
        )
      ) {
        const data = JSON.parse(
          localStorage.getItem(
            `/api/category/${params.productId}/product?recursive=true&sort=${sort}&sortOrder=${sortOrder}`
          )
        );
        setProducts(data);
        console.log('not fetched');
        return;
      }
      setLoading(true);
      await fetch(
        `/api/category/${params.productId}/product?recursive=true&sort=${sort}&sortOrder=${sortOrder}`,
        {
          method: 'GET',
        }
      ).then(async (response) => {
        const res = await response.json();
        if (res.data) {
          console.log('fetched');
          setProducts(res.data);
          localStorage.setItem(
            `/api/category/${params.productId}/product?recursive=true&sort=${sort}&sortOrder=${sortOrder}`,
            JSON.stringify(res.data)
          );
        }
      });
    }

    getProduct();
  }, [params.productId, sort, sortOrder]);

  return (
    <ProductComponent
      visible={visible}
      setVisible={setVisible}
      products={products}
      sortProducts={sortProducts}
      changeSortOrder={changeSortOrder}
    />
  );
};

export default Product;
