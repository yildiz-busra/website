import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardImg } from 'reactstrap';
import { AppContext } from '../context/AppContext';

const ProductDetails = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  return (
    <Container>
      <Row>
        <Col md="6">
          <Card>
            <CardImg top width="100%" src={product.image} alt={product.name} />
          </Card>
        </Col>
        <Col md="6">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
          <Button color="success" onClick={() => addToCart(product)}>Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;

