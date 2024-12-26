import React from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "reactstrap";
import HeroSection from "../components/HeroSection";
import CategoryList from "../components/CategoryList";

const sampleProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image: "https://picsum.photos/300/200?random=3",
  },
];

const HomePage = () => {
  return (
    <div>
      {/* <Banner /> */}
      <HeroSection />
      <Container>
        <Row>
          <Col md='3'>
            <CategoryList />
          </Col>
          <Col>
            {sampleProducts.map((product) => (
              <Col md="8" key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
