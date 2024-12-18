import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Navigation Bar Component
const NavigationBar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="#">ShopEasy</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#categories">Categories</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#featured">Featured</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <h1>Welcome to ShopEasy</h1>
        <p>Your one-stop shop for all your needs!</p>
        <Button color="primary">Shop Now</Button>
      </Container>
    </div>
  );
};

// Categories Component
const Categories = () => {
  const categories = ["Electronics", "Fashion", "Home & Kitchen", "Books", "Toys"];

  return (
    <Container className="py-5" id="categories">
      <h2 className="text-center">Shop by Category</h2>
      <Row className="mt-4">
        {categories.map((category, index) => (
          <Col key={index} md="2" className="mb-3">
            <Card>
              <CardBody className="text-center">
                <CardTitle tag="h5">{category}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Featured Products Component
const FeaturedProducts = () => {
  const products = [
    { id: 1, name: "Smartphone", price: "$299" },
    { id: 2, name: "Sneakers", price: "$99" },
    { id: 3, name: "Blender", price: "$49" }
  ];

  return (
    <Container className="py-5 bg-light" id="featured">
      <h2 className="text-center">Featured Products</h2>
      <Row className="mt-4">
        {products.map(product => (
          <Col key={product.id} md="4" className="mb-3">
            <Card>
              <CardBody className="text-center">
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardText>{product.price}</CardText>
                <Button color="success">Add to Cart</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Main Homepage Component
const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
