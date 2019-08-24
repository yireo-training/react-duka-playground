import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import Categories from "./Categories";
import MiniCart from "./MiniCart";
import CustomerLogin from "./CustomerLogin";
import QuickSearch from "./QuickSearch";

const Navigation = () => (
  <div className="Navigation">
    <Container>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Link to="/checkout" className="nav-link" role="button">
            Checkout
          </Link>
        </Nav.Item>
        <Nav.Item>
          <CustomerLogin />
        </Nav.Item>
        <Nav.Item>
          <MiniCart />
        </Nav.Item>
      </Nav>
    </Container>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand" role="button">
          Duka <span style={{ color: "#c82529" }}>for React</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Categories />
          </Nav>
          <QuickSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Navigation;
