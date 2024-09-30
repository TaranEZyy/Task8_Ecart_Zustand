import React from 'react';
import useCartStore from '../store/useCartStore';

function ProductPage() {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
  ];

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.name} - ${item.price}</h2>
          <button onClick={() => addToCart(item) || alert(`${item.name} item is added` ) }>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
