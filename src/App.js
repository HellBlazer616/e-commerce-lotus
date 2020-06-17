import React from 'react';
import './App.less';
import { Router } from '@reach/router';
import Landing from './pages/Landing';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductShowCase from './pages/ProductShowcase';
import ShowCart from './pages/ShowCart';
import { CartOpenProvider } from './CartOpenContext';
import { CategoryProvider } from './context/CategoryContext';

function App() {
  return (
    <CategoryProvider>
      <CartOpenProvider>
        <Router>
          <Landing path="/" />
          <Product path="/category/:productId" />
          <ProductShowCase path="product/showcase/:productId" />
          <Register path="/register" />
          <Login path="/login" />
          <ShowCart path="/cart" />
        </Router>
      </CartOpenProvider>
    </CategoryProvider>
  );
}

export default App;
