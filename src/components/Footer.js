import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md="6">
            <h5>E-Shop</h5>
            <p>Your one-stop shop for all your needs.</p>
          </Col>
          <Col md="6" className="text-md-end">
            <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
