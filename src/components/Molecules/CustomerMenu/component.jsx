import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const CustomerMenu = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Link to="/customer" className="nav-link" role="button">
        My Account
      </Link>
      <Link to="/customer/orders" className="nav-link" role="button">
        My Orders
      </Link>
      <Link to="/downloads" className="nav-link" role="button">
        My Downloads
      </Link>
      <Link to="/wishlist" className="nav-link" role="button">
        My Wish List
      </Link>
      <Link to="/customer/addressbook" className="nav-link" role="button">
        Address Book
      </Link>
      <Link to="/customer/account/logout" className="nav-link" role="button">
        Logout
      </Link>
    </Nav>
  );
};

export default CustomerMenu;
