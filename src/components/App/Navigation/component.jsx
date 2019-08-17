import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Categories from "./Categories";
import MiniCart from "./MiniCart";
import CustomerLogin from "./CustomerLogin";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
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
      <Navbar bg="dark" variant="dark" expand="lg">
        <Link to="/" className="navbar-brand" role="button">
          Apollo<span style={{ color: "lightblue" }}>Playground</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Categories />
          </Nav>
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
