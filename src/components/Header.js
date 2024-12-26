import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Row>
        <Col md="3">
          <NavbarBrand tag={Link} to="/">
            <img
              alt="logo"
              src="https://picsum.photos/300/200?random=3"
              style={{
                height: 40,
                width: 40,
                padding: 4,
              }}
            />
            E-Shop
          </NavbarBrand>
        </Col>
        <Col md="7" >
          <Nav navbar >
            
            <NavItem >
              <NavLink tag={Link} to="/cart" >
                Cart
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/account">
                Account
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/orders">
                Orders
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/support">
                Support
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/login">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Header;
