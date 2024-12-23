import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const sampleProducts = [
  { id: 1, name: 'Product 1', price: 10, image: '/images/product1.jpg', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', price: 20, image: '/images/product2.jpg', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', price: 30, image: '/images/product3.jpg', description: 'Description of Product 3' },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;
