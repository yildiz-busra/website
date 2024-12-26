import React, {useContext} from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  return (
    <Card className="mb-4">
      <CardImg top src={product.image} alt={product.name} />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted">
          ${product.price}
        </CardSubtitle>
        <Button className="m-2" tag={Link} to={`/products/${product.id}`} color="primary">
          View Details
        </Button>
        <Button className="m-2" color="success" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
