import React from 'react';
import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col md="4" sm="6" key={product.id}>
            <Card>
              <CardImg top width="100%" src={product.image} alt={product.name} />
              <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">${product.price}</CardSubtitle>
                <Button tag={Link} to={`/products/${product.id}`} color="primary">View Details</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;

