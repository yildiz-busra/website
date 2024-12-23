import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand tag={Link} to="/">E-Shop</NavbarBrand>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/cart">Cart</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/account">Account</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/orders">Orders</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/support">Support</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
