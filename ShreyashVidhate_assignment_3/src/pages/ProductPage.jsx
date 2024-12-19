import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';


const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 200, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 300, description: 'Description 2' },
    { id: 3, name: 'Product 3', price: 400, description: 'Description 3' }
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (product) => setCart(cart.filter((item) => item.id !== product.id));

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ProductPage;
