import React from 'react';
import './App.less';
import { Router } from '@reach/router';
import Landing from './pages/Landing';
import Product from './pages/Product';
import { CartOpenProvider } from './CartOpenContext';

function App() {
  return (
    <CartOpenProvider>
      <Router>
        <Landing path="/" />
        <Product path="/product" />
      </Router>
    </CartOpenProvider>
  );
}

export default App;
