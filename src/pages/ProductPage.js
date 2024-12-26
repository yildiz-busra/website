import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const sampleProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: "https://picsum.photos/300/200?random=1",
    description: "Description of Product 1",
    reviews: ["Great product!", "Loved it!"],
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    image: "https://picsum.photos/300/200?random=2",
    description: "Description of Product 2",
    reviews: ["Good quality", "Worth the price"],
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image: "https://picsum.photos/300/200?random=3",
    description: "Description of Product 3",
    reviews: ["Amazing product!", "Highly recommend!"],
  },
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
