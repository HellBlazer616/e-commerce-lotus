import React from 'react';
import './App.less';
import { Router } from '@reach/router';
import Landing from './pages/Landing';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductShowCase from './pages/ProductShowcase';
import { CartOpenProvider } from './CartOpenContext';

function App() {
  return (
    <CartOpenProvider>
      <Router>
        <Landing path="/" />
        <Product path="product/:productId" />
        <ProductShowCase path="product/showcase/:productId" />
        <Register path="/register" />
        <Login path="/login" />
      </Router>
    </CartOpenProvider>
  );
}

export default App;
