import React, { useContext } from "react";
import { Container, Row, Col, Button, Card, CardImg, ListGroup, ListGroupItem } from "reactstrap";
import { AppContext } from "../context/AppContext";

const ProductDetails = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  return (
    <Container>
      <Row>
        <Col md="6">
          <Card>
            <CardImg top src={product.image} alt={product.name} />
          </Card>
        </Col>
        <Col md="6">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
          <Button color="success" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h5>Reviews</h5>
          <ListGroup>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <ListGroupItem key={index}>{review}</ListGroupItem>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
