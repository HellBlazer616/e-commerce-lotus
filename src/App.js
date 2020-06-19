import React from 'react';
import './App.less';
import { Router } from '@reach/router';
import Landing from './pages/Landing';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductShowCase from './pages/ProductShowcase';
import ShowCart from './pages/ShowCart';
import CategoryShowCase from './pages/CategoryShowcase';
import Account from './pages/Account';
import OrderDetails from './pages/OrderDetails';
import { CartOpenProvider } from './CartOpenContext';
import { CategoryProvider } from './context/CategoryContext';
import { DeliveryProvider } from './context/DeliveryContext';
import Search from './pages/Search';

function App() {
  return (
    <CategoryProvider>
      <CartOpenProvider>
        <DeliveryProvider>
          <Router>
            <Landing path="/" />
            <Product path="/category/:productId" />
            <ProductShowCase path="product/showcase/:productId" />
            <CategoryShowCase path="category/showcase/:categoryId" />
            <Register path="/register" />
            <Login path="/login" />
            <ShowCart path="/cart" />
            <Account path="account/user" />
            <OrderDetails path="account/user/order" />
            <Search path="search/:search" />
          </Router>
        </DeliveryProvider>
      </CartOpenProvider>
    </CategoryProvider>
  );
}

export default App;
