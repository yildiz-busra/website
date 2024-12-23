import React from 'react';
import ProductList from '../components/ProductList';

const sampleProducts = [
  { id: 1, name: 'Product 1', price: 10, image: '/images/product1.jpg', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', price: 20, image: '/images/product2.jpg', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', price: 30, image: '/images/product3.jpg', description: 'Description of Product 3' },
];

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to E-Shop</h1>
      <ProductList products={sampleProducts} />
    </div>
  );
};

export default HomePage;
