import React from "react";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

const MiniCart = (props) => {
  return (
    <Nav.Link href="/cart">
      Cart
      {props.cartId && <Badge variant="primary">{props.items.length}</Badge>}
    </Nav.Link>
  );
};

export default MiniCart;
