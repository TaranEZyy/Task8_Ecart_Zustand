import React, { useState } from 'react';
import ProductPage from './components/ProductPage';
import CheckoutPage from './components/CheckoutPage';

function App() {
  const [page, setPage] = useState('products');

  return (
    <div>
      <nav>
        <button onClick={() => setPage('products')}>Products</button>
        <button onClick={() => setPage('checkout')}>Checkout</button>
      </nav>
      {page === 'products' && <ProductPage />}
      {page === 'checkout' && <CheckoutPage />}
    </div>
  );
}

export default App;
